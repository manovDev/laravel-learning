<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoteController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware('guest')->controller(AuthController::class)->group(function () {
    Route::get('/register', 'showRegister')->name('show.register');
    Route::get('/login', 'showLogin')->name('show.login');
    Route::post('/register', 'register')->name('register');
    Route::post('/login', 'login')->name('login');
});


Route::middleware('auth')->controller(NoteController::class)->group(function () {
    Route::get('/notes', 'index')->name('notes.index');
    Route::get('/notes/create', 'create')->name('notes.create');
    Route::get('/notes/{note}', 'show')->name('notes.show');
    Route::post('/notes', 'store')->name('notes.store');
    Route::delete('/notes/{note}', 'destroy')->name('notes.destroy');
});
