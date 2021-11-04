$('.drop-hover').mouseenter(function(){
  $(this).find('.drop-menu-off').addClass('drop-menu-on')
})
$('.drop-hover').mouseleave(function(){
  $(this).find('.drop-menu-off').removeClass('drop-menu-on')
})