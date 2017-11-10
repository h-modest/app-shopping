<?php
  namespace Common\Model;
  use Think\Model;

  class UserModel extends Model {

    public const $validate = array(
      array('username' => 'require', , ),
    );
  }

?>
