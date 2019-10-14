<?php

namespace App\Admin\Controllers;

use App\Slider;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

// include composer autoload
require_once dirname(__FILE__) . '/../../../vendor/autoload.php';

// import the Intervention Image Manager Class
use Intervention\Image\ImageManager;
use Tests\Models\Image;


class SliderController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = '图片管理';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Slider);
        $grid->column('id', __('图片ID'));
        $grid->column('img', __('查看图片'))->display(function ($name) {
            return "<img srcset='/upload/$name' width='50px' height='50px'>";
        });
        $grid->column('order', __('排序'))->sortable();
        $grid->column('title', __('图片标题'));
        $grid->column('href', __('图片链接'));
        $grid->disableExport();     //禁用导出数据按钮
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
        $show = new Show(Slider::findOrFail($id));
        $show->field('id', __('图片ID'));
        $show->field('img', __('查看图片'))->image('/upload/');
        $show->field('order', __('排序'));
        $show->field('title', __('图片标题'));
        $show->field('href', __('图片链接'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Slider);
        $form->display('id');
        $form->image('img', __('查看图片'))->thumbnail('small', $width = 1341, $height = 300)->move('/slider')->required();
//        $form->image('img', __('查看图片'))->crop($width=1341, $height=300)->move('/slider')->required();
        $form->text('order', __('排序'))->required();
        $form->text('title', __('图片标题'))->required();
        $form->text('href', __('图片链接'))->required();

        return $form;
    }

    public function objectToArray($object)
    {
        return json_decode(json_encode($object), true);
    }
}
