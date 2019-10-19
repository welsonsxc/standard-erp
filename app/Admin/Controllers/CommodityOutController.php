<?php

namespace App\Admin\Controllers;

use App\CommodityOut;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class CommodityOutController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = '商品销售管理';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new CommodityOut);

        $grid->column('id', __('Id'));
        $grid->column('CommodityId', __('商品id'));
        $grid->column('Num', __('商品数量'));
        $grid->column('Price', __('价格'));
        $grid->column('Date', __('入库日期'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(CommodityOut::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('CommodityId', __('商品id'));
        $show->field('Num', __('商品数量'));
        $show->field('Price', __('价格'));
        $show->field('Date', __('入库日期'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new CommodityOut);

        $form->number('CommodityId', __('商品id'));
        $form->number('Num', __('商品数量'));
        $form->decimal('Price', __('价格'));
        $form->datetime('Date', __('入库日期'))->default(date('Y-m-d H:i:s'));

        return $form;
    }
}
