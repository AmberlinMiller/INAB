"use strict"

// ---------Conti. on focus and blur--------------------
$('.cardholder_1n').focus(function(){
  $(this).css('opacity', '1'),
  $(this).attr('placeholder', '');
}).blur(function(){
  $(this).css('opacity', '0.8'),
  $(this).attr('placeholder', 'FIRST NAME');
});

$('.cardholder_2n').focus(function(){
  $(this).css('opacity', '1'),
  $(this).attr('placeholder', '');
}).blur(function(){
  $(this).css('opacity', '0.8'),
  $(this).attr('placeholder', 'LAST NAME');
});

$('.month').focus(function(){
  $(this).css('opacity', '1'),
  $(this).attr('placeholder', '');
}).blur(function(){
  $(this).css('opacity', '0.8'),
  $(this).attr('placeholder', 'MM');
});

$('.year').focus(function(){
  $(this).css('opacity', '1'),
  $(this).attr('placeholder', '');
}).blur(function(){
  $(this).css('opacity', '0.8'),
  $(this).attr('placeholder', 'YY');
});

$('.cvc').focus(function(){
  $(this).css('opacity', '1'),
  $(this).attr('placeholder', '');
}).blur(function(){
  $(this).css('opacity', '0.8'),
  $(this).attr('placeholder', '3 DIGITS');
});