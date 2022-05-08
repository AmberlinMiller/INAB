"use strict"

// ---------Burger Menu--------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// --------Scroll Animation----------------
// ====== Header Paragraph======
function revealHP() {
  var HPAppear = document.querySelectorAll("header p");

  for (var i = 0; i < HPAppear.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = HPAppear[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      HPAppear[i].classList.add("headerPAppear"); 
    } else { 
      HPAppear[i].classList.remove("headerPAppear"); 
    }
  }
}

window.addEventListener("scroll", revealHP);

// ====== Header Paragraph======
function flipOption() {
  var opflip = document.querySelectorAll("aside + section");

  for (var i = 0; i < opflip.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = opflip[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      opflip[i].classList.add("optionFlipper"); 
    } else { 
      opflip[i].classList.remove("optionFlipper"); 
    }
  }
}

window.addEventListener("scroll", flipOption);

// ====== Lauriel ======
function revealLauriel() {
  var laurielAppear = document.querySelectorAll(".lauriel");

  for (var i = 0; i < laurielAppear.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = laurielAppear[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      laurielAppear[i].classList.add("laurielAppear"); 
    } else { 
      laurielAppear[i].classList.remove("laurielAppear"); 
    }
  }
}

window.addEventListener("scroll", revealLauriel);

// ====== Anonymous ======
function revealAnonymous() {
  var anonymousAppear = document.querySelectorAll(".anonymous");

  for (var i = 0; i < anonymousAppear.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = anonymousAppear[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      anonymousAppear[i].classList.add("anonymousAppear"); 
    } else { 
      anonymousAppear[i].classList.remove("anonymousAppear"); 
    }
  }
}

window.addEventListener("scroll", revealAnonymous);