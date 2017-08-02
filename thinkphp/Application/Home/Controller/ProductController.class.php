<?php
namespace Home\Controller;
use Common\Controller\BaseController as Controller;
use Common;
class ProductController extends Controller {
    public function index(){
      // $_GET = I('get.id');
      // $this->assign('index', '1');
      // $this->display();
      // header("Access-Control-Allow-Origin: *");
      // header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
      // header('Access-Control-Allow-Methods: GET, POST, PUT');
      $callback = $_GET['callback'];
      //json数据
      $json_data = '["customername1","customername2"]';
      //输出jsonp格式的数据
      echo $callback . "(" . $json_data . ")";
    }
}
