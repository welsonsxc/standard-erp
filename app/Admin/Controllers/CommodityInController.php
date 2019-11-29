<?php

namespace App\Admin\Controllers;

use App\CommodityIn;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class CommodityInController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = '商品入库管理';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new CommodityIn);

        $grid->column('id', __('Id'));
        $grid->column('CommodityId', __('商品id'));
        $grid->column('Num', __('商品数量'));
		$grid->column('updated_at','操作时间');

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
        $show = new Show(CommodityIn::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('CommodityId', __('商品id'));
        $show->field('Num', __('商品数量'));


        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new CommodityIn);

        $form->number('CommodityId', __('商品id'));
        $form->number('Num', __('商品数量'));


        return $form;
    }
}
