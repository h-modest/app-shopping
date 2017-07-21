<?php
namespace Home\Controller;
use Common\Controller\BaseController as Controller;
use Common;
class ProductController extends Controller {
    public function index(){
      $_GET = I('get.id');
      $this->assign('index', '1');
      $this->display();
    }
}
