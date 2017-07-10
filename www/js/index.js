$(function(){
  $this = $('.classify-body').find('.all-list dl');
  $this.each(function(i){
    $dl = $(this);
    $dl.mouseover(function(){
      $this.eq(i).addClass('active');
    });
    $dl.mouseleave(function(){
      $this.eq(i).removeClass('active');
    });
  });
  $nav = $('.aside-navigation .enlarge').find('.content .icon');
  $nav.click(function(){
    $polling = $(this).next().find('dl');
    $polling.animate({'top': '-64px'},500,function(){
      $polling.css('top',0).find("dd:first").appendTo($polling);
    });
  });
});
