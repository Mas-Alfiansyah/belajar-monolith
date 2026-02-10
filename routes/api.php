<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MajorController;
use App\Http\Controllers\Api\StudentController;

Route::get('/majors', [MajorController::class, 'index']);
Route::post('/majors', [MajorController::class, 'store']);
Route::put('/majors/{id}', [MajorController::class, 'update']);
Route::delete('/majors/{id}', [MajorController::class, 'destroy']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
