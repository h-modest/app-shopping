<?php
  namespace Home\Controller;
  use Common\Controller\BaseController as Controller;
  use Common;

class UploadController extends Controller {

  public function index() {
    $this->display();
  }

  //文件上传
  public function upload() {
    $upload = new \Think\Upload();// 实例化上传类
    $upload->maxSize   =     30054059;// 设置附件上传大小
    // $upload->exts      =     array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
    $upload->rootPath  =     './uploads/'; // 设置附件上传根目录
    $upload->savePath  =     ''; // 设置附件上传（子）目录
    // 上传文件
    $info =  $upload->upload();
    if(!$info) {// 上传错误提示错误信息
        $this->error($upload->getError());
    }else{// 上传成功
      foreach($info as $file){
        echo $file['savepath'].$file['savename'];
      }
    // $this->success('上传成功！');
    }
  }

  public function progress() {
  }

}
