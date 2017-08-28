$(function(){
  //main catalog with hover effect
  if (!$('body').hasClass('mobile')) {
    $(".catalog.dropdown").hover(function(){
      $('body').addClass("show_overlay");
    }, function(){
      $('body').removeClass("show_overlay");
    });
  }

});