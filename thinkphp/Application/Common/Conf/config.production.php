<?php

return array(
    // '配置项'=>'配置值'

    // 模板文件名分隔符
    'TMPL_FILE_DEPR' => '_',

    // url模式：rewrite模式
    'URL_MODEL' => 2,

    // 缓存
    'cache_time' => array(
        'long' => 60 * 60 * 10,
        'medium' => 60 * 60,
        'short' => 60
    ),

    // 允许访问的模块列表
    'MODULE_ALLOW_LIST' => array(
        'Home',
    ),

    // 默认模块
    'DEFAULT_MODULE' => 'Home',

    // 不显示伪静态的后缀
    'URL_HTML_SUFFIX' => '',

    // 404页面
    'ERROR_PAGE' => '/404.html',

    // 开启调试模式
    'SHOW_PAGE_TRACE' => false,

    'LOAD_EXT_CONFIG' => array(
        'config_db'
    )
);
