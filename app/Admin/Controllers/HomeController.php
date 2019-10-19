<?php

namespace App\Admin\Controllers;

use App\Http\Controllers\Controller;
use Encore\Admin\Layout\Content;
use Encore\Admin\Layout\Row;
use Encore\Admin\Widgets;
use Encore\Admin\Widgets\Box;
use Illuminate\Support\Facades\DB;
use Encore\Admin\Facades\Admin;

class HomeController extends Controller
{
    /**
     * @param Content $content
     * @return Content
     */
    public function index(Content $content)
    {
        $content->title('个人中心');
        $content->breadcrumb(
            ['text' => '个人中心', 'url' => '/admin']
        );
        $content->row(function (Row $row) {
            $sliders = DB::select('select img from sliders where id<?', [4]);
            if (count($sliders) < 3) {
                $data = [
                    '0' => 'slider/1.jpg',
                    '1' => 'slider/2.jpg',
                    '2' => 'slider/3.jpg',
                ];
            } else {
                $data = [
                    '0' => $sliders[0]->img,
                    '1' => $sliders[1]->img,
                    '2' => $sliders[2]->img,
                ];
            }
            $data[0] = explode('.', $data[0]);
            $data[1] = explode('.', $data[1]);
            $data[2] = explode('.', $data[2]);

            $a = <<<EOT
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" align="center">                   
                                                                                                                 
		<!-- Indicators --> <ul class="carousel-indicators">                                                     
			<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>                   
			<li data-target="#carousel-example-generic" data-slide-to="1"></li>                                  
			<li data-target="#carousel-example-generic" data-slide-to="2"></li>                                  
		</ul> <!-- Wrapper for slides -->                                                                        
		<div class="carousel-inner" role="listbox">                                                              
			<div class="item active">                                                                            
				<img class="img-responsive" src="/upload/{$data[0][0]}-small.jpg"/>                              
			</div>                                                                                               
			<div class="item">                                                                                   
				<img class="img-responsive" src="upload/{$data[1][0]}-small.jpg"/>                               
			</div>                                                                                               
			<div class="item">                                                                                   
				<img class="img-responsive" src="upload/{$data[2][0]}-small.jpg"/>                               
			</div>                                                                                               
		</div> <!-- Controls -->                                                                                 
		<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">       
			<span class="glyphicon glyphicon-chevron-left"></span>                                               
			<span class="sr-only">Previous</span> </a>                                                           
			<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">  
				<span class="glyphicon glyphicon-chevron-right"></span>                                          
				<span class="sr-only">Next</span>                                                                
			</a>                                                                                                 
</div>                                                                                                           
		                                                                                                         
		                                                                                                         
EOT;
            $row->column(12, $a);

        });


        $content->row(function (Row $row) {
            $row->column(4, ' ');
        });
        $content->row(function (Row $row) {
            $row->column(4, ' ');
        });
        $content->row(function (Row $row) {
            $row->column(4, ' ');
        });
        $content->row(function (Row $row) {
            $row->column(4, ' ');
        });
        $content->row(function (Row $row) {
            $row->column(4, ' ');
        });
        $content->row(function (Row $row) {
            $row->column(4, ' ');
        });

        $content->row(function (Row $row) {
            $row->column(4, new Widgets\InfoBox("&nbsp;", 'users', 'aqua', '/admin/commodities', '商品管理'));
            $row->column(4, new Widgets\InfoBox('&nbsp;', 'shopping-cart', 'green', '/admin/suppliers', '供应商管理'));
            $row->column(4, new Widgets\InfoBox('&nbsp;', 'book', 'yellow', '/admin/commodity-ins', '入库管理'));
        });
//            $content->body(new Box('Bar chart', view('admin.chartjs')));

        return $content;
    }

}
