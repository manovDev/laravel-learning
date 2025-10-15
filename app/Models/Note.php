<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    protected $fillable = ['name', 'description', 'highlight'];

    /** @use HasFactory<\Database\Factories\NoteFactory> */
    use HasFactory;
}
