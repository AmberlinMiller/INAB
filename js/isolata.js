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