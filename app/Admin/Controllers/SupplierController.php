<?php

namespace App\Admin\Controllers;

use App\Supplier;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SupplierController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = '供应商管理';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Supplier);

        $grid->column('id', __('供应商ID'));
        $grid->column('Company', __('公司全称'));
        $grid->column('Contact', __('联系人'));
        $grid->column('Phone', __('联系手机'));

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
        $show = new Show(Supplier::findOrFail($id));

        $show->field('id', __('供应商ID'));
        $show->field('Company', __('公司全称'));
        $show->field('Contact', __('联系人'));
        $show->field('Phone', __('联系手机'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Supplier);

        $form->text('Company', __('公司全称'))->required();
        $form->text('Contact', __('联系人'));
        $form->text('Phone', __('联系手机'))->required();

        return $form;
    }

}
