<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    protected $fillable = ['name', 'description', 'location'];

    /** @use HasFactory<\Database\Factories\StoreFactory> */
    use HasFactory;

    public function notes() {
        return $this->hasMany(Note::class);
    }
}
