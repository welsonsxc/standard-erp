<?php

use Encore\Admin\Admin;
/**
 * Laravel-admin - admin builder based on Laravel.
 * @author z-song <https://github.com/z-song>
 *
 * Bootstraper for Admin.
 *
 * Here you can remove builtin form field:
 * Encore\Admin\Form::forget(['map', 'editor']);
 *
 * Or extend custom form field:
 * Encore\Admin\Form::extend('php', PHPEditor::class);
 *
 * Or require js and css assets:
 * Admin::css('/packages/prettydocs/css/styles.css');
 * Admin::js('/packages/prettydocs/js/main.js');
 *
 */


Encore\Admin\Form::forget(['map', 'editor']);

app('view')->prependNamespace('admin', resource_path('views/admin'));

Encore\Admin\Form::extend('scriptinjecter', Field\Interaction\ScriptInjecter::class);

//Admin::js('layer/layer.js');

Admin::js('layui/layui.js');

Admin::css('layui/css/layui.css');

Admin::js('https://cdnjs.cloudflare.com/ajax/libs/mathjs/3.16.0/math.min.js');
