///////////////////トップページへ戻る/////////////////
$(function(){

  $('.page-top').hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.page-top').fadeIn();
    }else{
      $('.page-top').fadeOut();
    }
  });

  $('.page-top').click(function() {
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
  });
});

////////////////////accordion_panel////////////////
$(function(){

  $('dd').css('display','none');
  $('dl dt').click(function(){
    if($('+dd',this).css('display')=='none'){
      $('+dd', this).slideDown('slow');
      $(this).addClass('selected');
    }
    else{
      $('+dd', this).slideUp('slow');
      $(this).removeClass('selected');
    }
  });
});


$(function () {
  $("#button2").click(function () {
    
    const position = $('#testpoint1').offset().top;
    const speed = 600;
    $("html,body").animate({scrollTop:position},speed);

  });
});
$(function () {
  $("#button3").click(function () {
    
    const position = $('#testpoint1').offset().top;
    const speed = 600;
    $("html,body").animate({scrollTop:position},speed);

  });
});
$(function () {
  $("#button4").click(function () {
    
    const position = $('#testpoint1').offset().top;
    const speed = 600;
    $("html,body").animate({scrollTop:position},speed);

  });
});