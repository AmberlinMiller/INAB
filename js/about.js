"use strict"

// ====== Scroll Animation =================================================================
// -----About Title-------
const abuObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const abT = entry.target.querySelector('.aboutTitle');

    if (entry.isIntersecting) {
      abT.classList.add('aboutToRun');
    }else{
      abT.classList.remove('aboutToRun');
  }});
});

abuObserver.observe(document.querySelector('.us'));

// ------About Paragraph---
const abPObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const abP = entry.target.querySelector('.aboutPara');

    if (entry.isIntersecting) {
      abP.classList.add('aboutToAppear');
    }else{
      abP.classList.remove('aboutToAppear');
  }});
});

abPObserver.observe(document.querySelector('.us'));

// ------ mandate Title ----
const mdObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const mdH3 = entry.target.querySelector('.mandH3');

    if (entry.isIntersecting) {
      mdH3.classList.add('mandateToRun');
    }else{
      mdH3.classList.remove('mandateToRun');
  }});
});

mdObserver.observe(document.querySelector('.mandate'));

// ------ mandate Para -----
const mdPObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const mdP = entry.target.querySelector('.mandatePara');

    if (entry.isIntersecting) {
      mdP.classList.add('mandateToAppear');
    }else{
      mdP.classList.remove('mandateToAppear');
  }});
});

mdPObserver.observe(document.querySelector('.mandate'));

// ------ History h3 ------
const hisH3Observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const historyH3 = entry.target.querySelector('.historyH3');

    if (entry.isIntersecting) {
      historyH3.classList.add('historyH3ToAppear');
    }else{
      historyH3.classList.remove('historyH3ToAppear');
  }});
});

hisH3Observer.observe(document.querySelector('.history'));

// ====== Year Scroll Transition =================================================================
function reveal() { // 設計一個叫 reveal 的 function
    var years = document.querySelectorAll(".year"); // 將所有帶有 .year 的物件找出來裝在 years 裡
  
    for (var i = 0; i < years.length; i++) { // 用 years 的陣列長度來跑回圈
      var windowHeight = window.innerHeight; // 將視窗的內部高度裝在 windowHeight 裡
      var elementTop = years[i].getBoundingClientRect().top; // 找出第 i 個 years 的大小與其在視窗上的位子, 然後裝在 elementTop 裡
      var elementVisible = 150; // 應該是視窗內層上緣與動畫物件的距離, 數字越小滑動距離越短就能引發動畫
  
      if (elementTop < windowHeight - elementVisible) { // 如果 years 的大小與位置 < 視窗高度 - 上緣與物件的距離
        years[i].classList.add("yearFlipper"); // 那麼就引發動畫
      } else { // 要是沒有小於
        years[i].classList.remove("yearFlipper"); // 那就不會出現動畫
      }
    }
  }
  
window.addEventListener("scroll", reveal); // 建立事件聆聽, 在捲動時呼叫並執行 function reveal
// ===============================================================================================
function reveal() { 
  var years = document.querySelectorAll(".year"); 
  for (var i = 0; i < years.length; i++) { 
    var windowHeight = window.innerHeight; 
    var elementTop = years[i].getBoundingClientRect().top; 
    var elementVisible = 150; 
    if (elementTop < windowHeight - elementVisible) { 
      years[i].classList.add("yearFlipper"); 
    } else { 
      years[i].classList.remove("yearFlipper"); 
    }
  }
}

window.addEventListener("scroll", reveal); 

// =================================================
let runner = $('li+p');
console.log(object);
$('runner').scroll(function(running){
  
});