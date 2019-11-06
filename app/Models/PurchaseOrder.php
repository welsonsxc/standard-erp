<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PurchaseOrder extends Model
{
    protected $table = 'purchase_orders';

    public function getCommodityAttribute($commodity)
    {
        return array_values(json_decode($commodity, true) ?: []);
    }

    public function setCommodityAttribute($commodity)
    {
        $this->attributes['commodity'] = json_encode(array_values($commodity), JSON_UNESCAPED_UNICODE);
    }
}