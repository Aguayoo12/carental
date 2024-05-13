<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'seats', 'transmission', 'power', 'price', 'km', 'type', 'fuel', 'city', 'images', 'brand_id'
    ];

    public function brand()
    {
        return $this->belongsTo('App\Brand');
    }

    public function users()
    {
        return $this->belongsToMany('App\User', 'users_cars')->withPivot('rating', 'firstDate', 'lastDate')->withTimestamps();
    }
}
