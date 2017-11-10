<?php
namespace Home\Controller;
use Common\Controller\BaseController as Controller;
use Common;
class ProductController extends Controller {
    public function index(){
      // $_GET = I('get.id');
      // $this->assign('index', '1');
      // $this->display();
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
      header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
      $headers = array();
      foreach ($_SERVER as $key => $value) {
          if ('HTTP_' == substr($key, 0, 5)) {
              $headers[str_replace('_', '-', substr($key, 5))] = $value;
          }
      }
      $callback = json_decode(file_get_contents("php://input"), true);
      $count = $callback['count'] + 10;
      echo json_encode($count);
      exit;
    }
}
