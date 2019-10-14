<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesDeliveryOrder extends Model
{
    protected $table = 'sales_delivery_orders';

    protected $appends = ['commodity'];
    
    public function getCommodityAttribute($commodity)
    {
        return $commodity;
    }

    public function setCommodityAttribute($commodity)
    {
        //$this->attributes['commodity'] = json_encode(array_values($commodity));
    }
}