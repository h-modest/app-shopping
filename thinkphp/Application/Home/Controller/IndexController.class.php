<?php
namespace Home\Controller;
use Common\Controller\BaseController as Controller;
use Common;
class IndexController extends Controller {
    public function index(){
      $this->assign('index', 'home');
      $this->display();
    }
}
