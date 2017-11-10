$(function(){
  $this = $('.classify');
  $list = $this.find('.list-bar li');
  $switch = $this.find('.list-switch');
  $shop = $this.find('.shop-bar .shop-navigation');
  $option = $this.find('.shop-option');
  $goods = $this.find('.goods');
  $list.click(function(){
    var index = $(this).index();
    if (index > 0) {
      $list.removeClass('active');
      $(this).addClass('active');
    }
  });
  $switch.click(function(){
    $('.classify').find('.content').toggleClass('closed');
  });
  $shop.find('.fold')
  .click(function(){
    $shop.toggleClass('stretch');
  });
  $option.find('li').click(function(){
    var index = $(this).index();
    if (index > 0) {
      $option.find('li').removeClass('active');
      $(this).addClass('active');
    }
  });
  $option.find('dd').click(function(){
    var index = $(this).index();
    $option.find('dd').removeClass('active');
    $(this).addClass('active');
    $goods.removeClass().addClass('goods');
    if (index === 1) {
      $goods.addClass('image-text');
    }
    if(index === 2) {
      $goods.addClass('entry');
    }
  });
});
