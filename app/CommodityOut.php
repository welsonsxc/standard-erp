<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CommodityOut extends Model
{
    protected $table = 'commodity_out';

    protected $fillable = [
        'id', 'CommodityId', 'Num'
    ];
}
