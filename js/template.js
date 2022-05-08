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

// ---------Scroll Animation ---------------------
// function runner2015() {
//   var show2015 = document.querySelectorAll("li.y2015+p");

//   for (var i = 0; i < show2015.length; i++) {
//     var windowHeight = window.innerHeight; 
//     var elementTop = show2015[i].getBoundingClientRect().top; 
//     var elementVisible = 50; 

//     if (elementTop < windowHeight - elementVisible) { 
//       show2015[i].classList.add("y2015p"); 
//     } else { 
//       show2015[i].classList.remove("y2015p"); 
//     }
//   }
// }

// window.addEventListener("scroll", runner2015);