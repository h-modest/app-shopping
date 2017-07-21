$(function(){
    $product = $('.product');
    $.ljsGlasses.pcGlasses({
        "boxid":"main-view",
        "sumid":"show-view",
        "boxw": 450,//宽度,该版本中请把宽高填写成一样
        "boxh": 450,//高度,该版本中请把宽高填写成一样
        "sumw":60,//列表每个宽度,该版本中请把宽高填写成一样
        "sumh":60,//列表每个高度,该版本中请把宽高填写成一样
        "sumi":7,//列表间隔
        "sums":6,//列表显示个数
        "sumsel":"sel",
        "sumborder":1,//列表边框，没有边框填写0，边框在css中修改
        "lastid":"previous-page",
        "nextid":"next-page"
    });//方法调用，务必在加载完后执行
    $recommend_view = $product.find('.recommend .list ul');
    var subPage = function(isUp){
        if (isUp) {
            $recommend_view.css('top', '-154px').find('li:last-child').prependTo($recommend_view);
            $recommend_view.animate({top: 0},500);
        } else {
            $recommend_view.animate({
                top: '-144px',
            },500,function(){
                $recommend_view.css('top',0)
                .find('li').eq(0)
                .appendTo($recommend_view);
            });
        }
    };
    $product.find('.recommend .page-down').click(function(){
        subPage(false);
    });
    $product.find('.recommend .page-up').click(function(){
        subPage(true);
    });
});