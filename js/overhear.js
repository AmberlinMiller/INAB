"use strict"

// ---------Burger Menu---------------------------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// -------Disable a-Life After That--------------------------
$('.show1').mouseover(function(){
  $(this).css("cursor", "not-allowed");
});

var disable_a = document.getElementsByClassName("show1")[0];

    // console.log(disable_a);

disable_a.addEventListener("click", function(eve){
    
  eve.preventDefault();
});

// ---------Scroll Animation--------------------------------
function revealShow() {
  var showAppear = document.querySelectorAll("section");

  for (var i = 0; i < showAppear.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = showAppear[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      showAppear[i].classList.add("overhearShowAppear"); 
    } else { 
      showAppear[i].classList.remove("overhearShowAppear"); 
    }
  }
}

window.addEventListener("scroll", revealShow);