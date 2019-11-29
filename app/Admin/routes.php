<?php

use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
], function (Router $router) {
    $router->get('/', 'HomeController@index')->name('主页');
    //商品管理
    $router->resource('commodities', CommodityController::class);
	//供应商
//    $router->resource('suppliers', SupplierController::class);
    //轮播图管理
    $router->resource('slider', SliderController::class);
    //会员管理
//    $router->resource('members', MemberController::class);
    //商品入库管理
    $router->resource('commodity-ins', CommodityInController::class);
    //商品销售管理
    $router->resource('commodity-out', CommodityOutController::class);
});
