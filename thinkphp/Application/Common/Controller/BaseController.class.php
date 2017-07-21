<?php
namespace Common\Controller;

use Think\Controller;
class BaseController extends Controller
{

    /**
     * 初始化调用的方法
     */
    protected function _initialize()
    {
    }

    /**
     * success之后就退出程序
     * {@inheritDoc}
     * @see \Think\Controller::success()
     */
    protected function success($message = '', $jumpUrl = '', $ajax = false)
    {
        parent::success($message, $jumpUrl, $ajax);
        exit;
    }

    /**
     * 显示404的页面
     */
    protected function notFound()
    {
        header("HTTP/1.1 404 Not Found");
        $this->display('Common@default_404');
        die;
    }

    /**
     * 404
     */
    protected function _empty()
    {
        $this->notFound();
    }

    /**
     * 获取http请求的方法，兼容put, delete
     */
    protected function getHttpMethod()
    {
        return $_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'] ?
            : (I('_method') ?
                : (IS_PUT ? 'put'
                    : (IS_POST ? 'post' : 'get')));
    }
}
