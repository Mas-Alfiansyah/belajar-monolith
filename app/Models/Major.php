<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Major extends Model
{
    protected $fillable = [
        'major_name',
        'major_code',
        'status',
    ];

    public function students()
    {
        return $this->hasMany(Student::class);
    }
}
