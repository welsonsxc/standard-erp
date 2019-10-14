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
    $router->resource('suppliers', SupplierController::class);
    //销售订单
    $router->resource('salesorders', SalesorderController::class);
    //创建销售订单时选择商品
    $router->resource('selectCommodity', SelectCommodity::class);

    $router->any('box', 'SelectCommodity@box');

    $router->prefix('api')->group(function(Router $router){
        $router->any('getCommodityNameByType', 'AdjustmentorderController@getCommodityNameByType');
        $router->any('getCommodityForSalesOrderTable', 'CommodityController@getCommodityForSalesOrderTable');
        //销售订单信息查找
        $router->any('getSalesOrderForSalesDeliveryOrder', 'SalesOrderController@getSalesOrderForSalesDeliveryOrder');
        $router->any('getSalesOrderCommodityForSalesDeliveryOrder', 'SalesOrderController@getSalesOrderCommodityForSalesDeliveryOrder');
        //供应商信息查找
        $router->any('getSupplierById', 'SupplierController@getSupplierById');
        $router->any('getSupplierIdWithName', 'SupplierController@getSupplierIdWithName');
        $router->any('getSupplierByIdForPurchaseOrder', 'SupplierController@getSupplierByIdForPurchaseOrder');
    });

    $router->resource('salesOrdersCommodity', SalesOrdersCommodity::class);

    //轮播图管理
    $router->resource('slider', SliderController::class);
    //会员管理
    $router->resource('members', MemberController::class);
    //商品入库管理
    $router->resource('commodity-ins', CommodityInController::class);

});
