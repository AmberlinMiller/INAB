"use strict"

// ---------Burger Menu--------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
// --------Scroll Animation-----------------
// ====== Torien Img======
function picRotateTorien() {
  var torienRotate = document.querySelectorAll(".torienImage");

  for (var i = 0; i < torienRotate.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = torienRotate[i].getBoundingClientRect().top; 
    var elementVisible = 150; 

    if (elementTop < windowHeight - elementVisible) { 
      torienRotate[i].classList.add("torienPic"); 
    } else { 
      torienRotate[i].classList.remove("torienPic"); 
    }
  }
}

window.addEventListener("scroll", picRotateTorien);

// ====== Torien H3======
function revealTorien() {
  var torienH3 = document.querySelectorAll("#torien h3");

  for (var i = 0; i < torienH3.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = torienH3[i].getBoundingClientRect().top; 
    var elementVisible = 150; 

    if (elementTop < windowHeight - elementVisible) { 
      torienH3[i].classList.add("torienH3Appear"); 
    } else { 
      torienH3[i].classList.remove("torienH3Appear"); 
    }
  }
}

window.addEventListener("scroll", revealTorien);

// ====== Torien P======
function revealTorienP() {
  var torienP = document.querySelectorAll("#torien p");

  for (var i = 0; i < torienP.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = torienP[i].getBoundingClientRect().top; 
    var elementVisible = 150; 

    if (elementTop < windowHeight - elementVisible) { 
      torienP[i].classList.add("torienPAppear"); 
    } else { 
      torienP[i].classList.remove("torienPAppear"); 
    }
  }
}

window.addEventListener("scroll", revealTorienP);

// ====== Amberlin Img======
function picRotateAmberlin() {
  var amberlinRotate = document.querySelectorAll(".amberlinImage");

  for (var i = 0; i < amberlinRotate.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = amberlinRotate[i].getBoundingClientRect().top; 
    var elementVisible = 150; 

    if (elementTop < windowHeight - elementVisible) { 
      amberlinRotate[i].classList.add("amberlinPic"); 
    } else { 
      amberlinRotate[i].classList.remove("amberlinPic"); 
    }
  }
}

window.addEventListener("scroll", picRotateAmberlin);

// ====== Amberlin H3======
function revealAmberlin() {
  var amberlinH3 = document.querySelectorAll("#amberlin h3");

  for (var i = 0; i < amberlinH3.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = amberlinH3[i].getBoundingClientRect().top; 
    var elementVisible = 150; 

    if (elementTop < windowHeight - elementVisible) { 
      amberlinH3[i].classList.add("amberlinH3Appear"); 
    } else { 
      amberlinH3[i].classList.remove("amberlinH3Appear"); 
    }
  }
}

window.addEventListener("scroll", revealAmberlin);

// ====== Amberlin P======
function revealAmberlinP() {
  var amberlinP = document.querySelectorAll("#amberlin p");

  for (var i = 0; i < amberlinP.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = amberlinP[i].getBoundingClientRect().top; 
    var elementVisible = 150; 

    if (elementTop < windowHeight - elementVisible) { 
      amberlinP[i].classList.add("amberlinPAppear"); 
    } else { 
      amberlinP[i].classList.remove("amberlinPAppear"); 
    }
  }
}

window.addEventListener("scroll", revealAmberlinP);