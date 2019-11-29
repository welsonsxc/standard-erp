<?php

namespace App\Admin\Controllers;

use App\Commodity;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use Illuminate\Http\Request;

class CommodityController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = '商品目录';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Commodity);

        $grid->column('id', __('商品ID'));
        $grid->column('CommodityFull', __('商品全称'));
        $grid->column('StandardPrice', __('商品单价'));
        $grid->column('Num',__('商品数量'));
        $grid->column('Code', __('商品编码'));
        $grid->column('Image', __('商品图片'))->display(function ($name) {
            return "<img srcset='/upload/$name' width='50px' height='50px'>";
        });
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
        $show = new Show(Commodity::findOrFail($id));

        $show->field('id', __('商品ID'));
        $show->field('CommodityFull', __('商品全称'));
        $show->field('StandardPrice', __('商品单价'));
        $show->field('Num', __('商品数量'));
        $show->field('Code', __('商品编码'));
        $show->field('Image', __('商品图片'))->image('/upload/');

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Commodity);
        $form->display('id',__('商品编号'));
        $form->text('CommodityFull', __('商品全称'))->required();
        $form->text('StandardPrice', __('商品单价'));
        $form->text('Num', __('商品数量'))->default(0);
        $form->text('Code', __('商品编码'))->required();
        $form->text('Provider', __('供应商编号'));
        $form->image('Image', __('商品图片'))->move('/commodity')->required();

        return $form;
    }

}
