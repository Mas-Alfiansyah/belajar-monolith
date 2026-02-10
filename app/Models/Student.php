<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'full_name',
        'npm',
        'major_id',
        'status',
    ];

    public function major()
    {
        return $this->belongsTo(Major::class);
    }
}
