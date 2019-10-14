<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CommodityIn extends Model
{
    protected $table = 'commodity_in';

    protected $fillable = [
        'id', 'CommodityId', 'Num'
    ];
}
