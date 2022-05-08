"use strict"

// --------Read More-----------------------
function my_Function() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("rd_btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "READ MORE"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "READ LESS"; 
      moreText.style.display = "inline";
    }
  }

// --------Animation-----------------------
function revealIsolataHP() {
  var isolataHP = document.querySelectorAll("header p");

  for (var i = 0; i < isolataHP.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = isolataHP[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      isolataHP[i].classList.add("isolataHPAppear"); 
    } else { 
      isolataHP[i].classList.remove("isolataHPAppear"); 
    }
  }
}

window.addEventListener("scroll", revealIsolataHP);

// --------Scroll Animation----------------
// ====== Drowned Article ======
function revealDrownA() {
  var drownedArti = document.querySelectorAll("article");

  for (var i = 0; i < drownedArti.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = drownedArti[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      drownedArti[i].classList.add("drownedAAppear"); 
    } else { 
      drownedArti[i].classList.remove("drownedAAppear"); 
    }
  }
}

window.addEventListener("scroll", revealDrownA);

// ====== Drowned Poster ======
function drownedPoster() {
  var drownedPoster = document.querySelectorAll(".drowned img");

  for (var i = 0; i < drownedPoster.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = drownedPoster[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      drownedPoster[i].classList.add("drownedIAppear"); 
    } else { 
      drownedPoster[i].classList.remove("drownedIAppear"); 
    }
  }
}

window.addEventListener("scroll", drownedPoster);

// ====== Void Paragraph ======
function revealVoidP() {
  var voidP = document.querySelectorAll(".void p");

  for (var i = 0; i < voidP.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = voidP[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      voidP[i].classList.add("voidPAppear"); 
    } else { 
      voidP[i].classList.remove("voidPAppear"); 
    }
  }
}

window.addEventListener("scroll", revealVoidP);

// ====== Void Poster ======
function voidPoster() {
  var voidPoster = document.querySelectorAll(".void img");

  for (var i = 0; i < voidPoster.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = voidPoster[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      voidPoster[i].classList.add("voidIAppear"); 
    } else { 
      voidPoster[i].classList.remove("voidIAppear"); 
    }
  }
}

window.addEventListener("scroll", voidPoster);