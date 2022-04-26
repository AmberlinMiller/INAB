"use strict"

// ---------Burger Menu--------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// ---------Focus and blur------------------
$('.name').focus(function(){
  $(this).css('opacity', '1'),
  $(this).attr('placeholder', '');
}).blur(function(){
  $(this).css('opacity', '0.8'),
  $(this).attr('placeholder', 'FIRST NAME');
});

$('.last_name').focus(function(){
  $(this).css('opacity', '1'),
  $(this).attr('placeholder', '');
}).blur(function(){
  $(this).css('opacity', '0.8'),
  $(this).attr('placeholder', 'LAST NAME');
});

$(':text').focus(function(){
  $(this).css('opacity', '1')
}).blur(function(){
  $(this).css("opacity", "0.8")
});

$('input[type="email"]').focus(function(){
  $(this).css('opacity', '1');
}).blur(function(){
  $(this).css("opacity", "0.8"),
  $(this).attr('placeholder', 'EXAMPLE@MAIL.COM');
});

$('textarea').focus(function(){
  $(this).css('opacity', '1')
}).blur(function(){
  $(this).css("opacity", "0.8");
});

// ---------Back to top---------------------------
$(function(){
  $('.totop').click(function(){
    $('html,body').animate({scrollTop: 0}, 500)
    return false;
  });
});