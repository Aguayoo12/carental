<?php

use App\Models\Brand;
use App\Models\Car;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::resource('cars', Car::class);
});

Route::get('/admin', function () {
    $cars = Car::get();
    $brands = Brand::get();
    return Inertia::render('Admin/AdminView', [
        'cars' => $cars,
        'brands' => $brands
    ]);
})->middleware(['auth'])->name('admin');