"use strict"

// -------Disable <a>--------------------------
var disable_a = document.getElementsByClassName("H")[0];

// console.log(disable_a);

disable_a.addEventListener("click", function(eve){

eve.preventDefault();
});