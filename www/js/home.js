$(function() {
  $carousel = $('.home .carousel').find('.pic li');
  $page = $('.home .direct');
  $icon = $('.home .carousel').find('.page-btn dd');
  var length = $carousel.length;
  $carousel.each(function(i){
    var num = i == length - 1 ? -1 : i;
    $(this).css('left', num*920+ 'px');
  });
  var page = function(isLeft){
    $carousel.each(function(i){
      $this = $(this);
      var left = parseInt($this.css('left'));
      var width = parseInt($this.css('width'));
      if (left % width === 0) {
        var new_left;
        if (isLeft) {
          if (left < 0) {
            new_left = (length - 2)*width;
            $this.addClass('transfer');
          } else {
            new_left = left - width;
            $this.removeClass('transfer');
          }
        } else {
          if (left > (length - 3) * width) {
            new_left = -width;
            $this.addClass('transfer');
          } else {
            new_left = left + width;
            $this.removeClass('transfer');
          }
        }
        if (new_left === 0) {
          $icon.eq(i).addClass('active');
        }  else {
          $icon.eq(i).removeClass('active');
        }
        $this.css('left', new_left + 'px');
      }
    });
  };
  $page.find('.page-left').click(function(){
    page(false);
  });
  $page.find('.page-right').click(function(){
    page(true);
  });
  $icon.click(function(){
    var index = $(this).index();
    var jump = function(i){
      $carousel.each(function(n){
        var num;
        if (i === 0) {
          num = n == (length - 1) ? -1 : n;
        } else {
          num = n - i < -1 ? n + length - i : n - i;
        }
        if (num === 0) {
          $(this).removeClass('transfer');
        }
        $(this).css('left', num*920+ 'px');
        if (num === 0) {
          $icon.eq(n).addClass('active');
        }  else {
          $icon.eq(n).removeClass('active');
        }
      });
    };
    jump(index);
  });
  var tab = function(i, $this, $that){
    $this.hide().eq(i).show();
    $that.removeClass('active').eq(i).addClass('active');
  };
  var tab_switch = function($that, $this){
    $this.mouseover(function(){
      var index = $(this).index();
      tab(index, $that, $this);
    });
  };
  $senior = $('.home .senior-list');
  $advanced = $('.home .advanced-list');
  $tab = $senior.find('.switch dd');
  $tab_list = $senior.find('.tab-piecre ul');
  $advanced_tab = $advanced.find('.switch dd');
  $advanced_tab_list = $advanced.find('.tab-piecre ul');
  tab(0, $tab_list, $tab);
  tab(0, $advanced_tab_list, $advanced_tab);
  tab_switch($tab_list, $tab);
  tab_switch($advanced_tab_list, $advanced_tab);
  $back = $('.aside-navigation .back-top');
  $back.click(function(){
    $('html, body').animate({scrollTop: 0}, 1000);
  });
});
