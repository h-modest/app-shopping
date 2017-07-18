<?php
namespace Home\Controller;
use Common\Controller\BaseController as Controller;
use Common;
class ProductController extends Controller {
    public function index(){
      $_GET = I('get.id');
      $this->assign('index', '1');
      $this->display();
      // header("Access-Control-Allow-Origin: *");
      // header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
      // header('Access-Control-Allow-Methods: GET, POST, PUT');
      // $result = array(
      //   'flag' => 'Success',
      //   'msg' => '错误',
      //   'data' => 'asdf'
      // );
      // $this->ajaxReturn(json_encode($result),'JSON'); //接口数据推送
    }
}
