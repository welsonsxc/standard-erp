<?php

namespace App\Admin\Controllers;

use App\Members;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class MemberController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = '会员管理';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Members);

        $grid->column('id', __('Id'));
        $grid->column('Names', __('姓名'));
        $grid->column('Phone', __('手机号'));
        $grid->column('Counts', __('累计消费金额'));

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
        $show = new Show(Members::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('Names', __('姓名'));
        $show->field('Phone', __('手机号'));
        $show->field('Counts', __('累计消费金额'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Members);

        $form->text('Names', __('姓名'));
        $form->mobile('Phone', __('手机号'));
        $form->decimal('Counts', __('累计消费金额'));

        return $form;
    }
}
