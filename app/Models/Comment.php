<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'comment', 'rating', 'user_id'
    ];

    // Relación con el usuario
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
