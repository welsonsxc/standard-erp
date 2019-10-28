<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::prefix('v1')->group(function () {
    Route::get('/', function () {
        $response = ['code' => 200, 'message' => 'hello,这是标准版ERP接口'];
        return $response;
    });

    //商品列表
    Route::get('/commodity/{id}', 'api\CommodityController@getCommodityInfo');

    //商品列表
    Route::get('/commodity', 'api\CommodityController@getCommodityList');

    //销售商品
    Route::post('/CommodityOut','api\CommodityController@CommodityOut');

    //商品入库
    Route::post('/CommodityIn','api\CommodityController@CommodityIn');

    //订单查询
    Route::get('/searchOrder/{id}','api\CommodityController@searchOrder');
});
