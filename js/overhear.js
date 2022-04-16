"use strict"

// ---------Burger Menu---------------------------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // -------Disable a-Life After That--------------------------
  var disable_a = document.getElementsByClassName("show1")[0];

    // console.log(disable_a);

  disable_a.addEventListener("click", function(eve){
    
    eve.preventDefault();
  });