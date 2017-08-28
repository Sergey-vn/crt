//mobile
if ($('body').hasClass('mobile')) {


  $('.button_title').on({ 'touchend' : function(){
    $('body').toggleClass('show-menu show_overlay');
  } });

  $('.search .fake-button').on({ 'touchend' : function(){
    $('body').removeClass('show-menu').toggleClass('show-search').addClass('show_overlay');
  } });

  $('.search .close-search').on({ 'touchend' : function(){
    $('body').removeClass('show-search show_overlay');
    $('.search .form-control').val('');
    $('.autocomplete-suggestions').hide();
  } });
}

//other
//search clear button
$(".search").each(function() {

  var $inp = $(this).find("input"),
    $cle = $(this).find(".clear_input");


  $inp.on("input", function(){
    $cle.toggle(!!this.value);
  });

  $cle.on("touchstart click", function(e) {
    e.preventDefault();
    $inp.val("").trigger("input");
  });

});

//cart items onlu numbers in field
$(".cart_items .value").keydown(function(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
    (event.keyCode == 65 && event.ctrlKey === true) ||
    (event.keyCode >= 35 && event.keyCode <= 39)) {
    return;
  }
  else {
    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
      event.preventDefault();
    }
  }
});

$(".remove_item").click(function() {
  $(this).parent().remove();
});

$(".cart_items li .counter i").on("click", function() {

  var $button = $(this);
  var oldValue = $button.parent().find(".value").text();

  if ($button.hasClass('icon-plus')) {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 1) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 1;
    }
  }

  $button.parent().find(".value").html(newVal);

});


//popup init
$('.show-popup').magnificPopup({
  type: 'inline',
  removalDelay: 500,
  callbacks: {
    beforeOpen: function() {
      this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true
});

//select2 init
$('select.form-control').select2();

//input mask
$(".phone-mask").mask("+38 (999) 999-99-99");
$(".time-mask").mask("с 99:99 до 99:99");

//dashboard main tabs
$('#tabs span:not(:first)').addClass('inactive');
$('.dashboard_tabs .main_tab').hide();
$('.dashboard_tabs .main_tab:first').show();

$('#tabs span').click(function(){
  var t = $(this).attr('id');
  if($(this).hasClass('inactive')){ //this is the start of our condition
    $('#tabs span').addClass('inactive');
    $(this).removeClass('inactive');

    $('.dashboard_tabs .main_tab').hide();
    $('#'+ t + 'C').fadeIn('slow');
  }
});
$('#tabs span.inactive').click( function () {
  $('#sub-tab1').click();
});



//dashboard subtabs

$('.personal_data .sub_tab').hide();
$('.personal_data .sub_tab:first').show();

$('.personal_data .personal_trigger').click(function(){
  var st = $(this).attr('id');
  $('.personal_data .sub_tab').hide();
  $('#'+ st + 'S').fadeIn('slow');
});
//dashboard orderlist
$('.order_list li').click( function (event) {
  if ($(this).hasClass('expanded')) {
    if (!event.target.closest('.details') ){
      $(this).toggleClass('expanded');
    }
  } else {
    $(this).toggleClass('expanded');
  }
})

//dashboard_manager
$('.manager .main_bar').click( function () {
  $('.manager').addClass('show');
});
$('.hide_block').click(function () {
  $('.manager').removeClass('show');
});

//dashboard edit section
/* phone */
var max_phone_fields      = 3;

var x = 1;
$("#add-phone").click(function(e){
  e.preventDefault();
  if(x < max_phone_fields){
    x++;
    $(this).parents('.value').append('<div class="removable_value">' +
        '<input type="text" style="margin-top: 10px;" class="form-control phone-mask" value="" placeholder="+38 (___) ___-__-__">' +
        '<i class="icon-close"></i>' +
      '</div>');
    $(".phone-mask").mask("+38 (999) 999-99-99");

    $('.removable_value i').click(function (e) {
      $(this).parents('.flex_value').find('.add_more').show();
      e.preventDefault();
      $(this).parent('div').remove(); x--;
    })
  }
  if (x == max_phone_fields) {
    $(this).parents('.flex_value').find('.add_more').hide();
  }
});
/* address */
$('.address_line .icon-close').click(function () {
  $(this).parent('div').remove();
});

var max__address_fields      = 3;

var y = 1;
$("#add-address").click(function(e){
  e.preventDefault();
  if(y < max__address_fields){
    y++;
    $(this).parents('.value').append('<div class="removable_value">' +
        '<select class="form-control">' +
          '<option value="0">Винница</option>' +
          '<option value="1" selected>Киев</option>' +
        '<option value="2">Одесса</option>' +
        '</select>' +
        '<div class="form-control">' +
          '<input type="text" class="form-control street" placeholder="Улица">' +
          '<input type="text" class="form-control house" placeholder="Дом">' +
          '<input type="text" class="form-control apt" placeholder="Кв.">' +
        '</div>' +
        '<i class="icon-close"></i>' +
      '</div>');
    $('select.form-control').select2();

    $('.removable_value i').click(function (e) {
      $(this).parents('.flex_value').find('.add_more').show();
      e.preventDefault();
      $(this).parent('div').remove(); y--;
    })
  }
  if (y == max__address_fields) {
    $(this).parents('.flex_value').find('.add_more').hide();
  }
});


//sidebar menu
$('.sidebar > ul > li > a').click( function () {
  if( $(this).hasClass('active')) {
    $('.sidebar > ul > li > a').removeClass('active');
  } else {
    $('.sidebar > ul > li > a').removeClass('active');
    $(this).addClass('active');
    
    var activeLink = $('.sidebar > ul > li > a.active');

    if ($(document).scrollTop() + $(window).height() > activeLink.offset().top && $(document).scrollTop() - activeLink.offset().top < activeLink.height()) {

    } else {
      $('html, body').animate({
        scrollTop: $('.sidebar > ul > li > a.active').offset().top
      }, 0);
    }
  }
})




//page height
var footerHeight = $('footer').height();

if ($('.bottom_bar').length > 0) {
  var otherBlocksHeight = 249;
} else {
  var otherBlocksHeight = 141;
}
var freeSpacing = footerHeight + otherBlocksHeight;
$('main').css('min-height', 'calc(100vh - ' + freeSpacing + 'px)');











//FILTERS DEMO
$('#filter-test *').click( function() {
  if ($(this).hasClass('inactive')) {
    $(this).removeClass('inactive');
    $('.product_tail.filtered_item').removeClass('hidden');
  } else {
    $(this).addClass('inactive');
    $('.product_tail.filtered_item').addClass('hidden');
  }
});