<?php
namespace Home\Controller;
use Common\Controller\BaseController as Controller;
use Common;
class ClassController extends Controller {
    public function index(){
      $_GET = I('get.id');
      $this->assign('index', $_GET);
      $this->display();
    }
}
