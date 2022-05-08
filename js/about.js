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
      var elementVisible = 50; // 應該是視窗內層上緣與動畫物件的距離, 數字越小滑動距離越短就能引發動畫
  
      if (elementTop < windowHeight - elementVisible) { // 如果 years 的大小與位置 < 視窗高度 - 上緣與物件的距離
        years[i].classList.add("yearFlipper"); // 那麼就引發動畫
      } else { // 要是沒有小於
        years[i].classList.remove("yearFlipper"); // 那就不會出現動畫
      }
    }
  }
  
window.addEventListener("scroll", reveal); // 建立事件聆聽, 在捲動時呼叫並執行 function reveal

// ====== Show Title Scroll Transistion =========================================================
// ------ 2015 -----------
function runner2015() {
  var show2015 = document.querySelectorAll("li.y2015+p");

  for (var i = 0; i < show2015.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = show2015[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      show2015[i].classList.add("y2015p"); 
    } else { 
      show2015[i].classList.remove("y2015p"); 
    }
  }
}

window.addEventListener("scroll", runner2015);

// ------ 2016 -----------
function runner2016() {
  var show2016 = document.querySelectorAll("li.y2016+p");

  for (var i = 0; i < show2016.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = show2016[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      show2016[i].classList.add("y2016p"); 
    } else { 
      show2016[i].classList.remove("y2016p"); 
    }
  }
}

window.addEventListener("scroll", runner2016);

// ------ 2017 -----------
function runner2017() {
  var show2017 = document.querySelectorAll("li.y2017+p");

  for (var i = 0; i < show2017.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = show2017[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      show2017[i].classList.add("y2017p"); 
    } else { 
      show2017[i].classList.remove("y2017p"); 
    }
  }
}

window.addEventListener("scroll", runner2017);

// ------ 2018 -----------
function runner2018() {
  var show2018 = document.querySelectorAll("li.y2018+p");

  for (var i = 0; i < show2018.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = show2018[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      show2018[i].classList.add("y2018p"); 
    } else { 
      show2018[i].classList.remove("y2018p"); 
    }
  }
}

window.addEventListener("scroll", runner2018);

// ------ 2019 -----------
function runner2019() {
  var show2019 = document.querySelectorAll("li.y2019+p");

  for (var i = 0; i < show2019.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = show2019[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      show2019[i].classList.add("y2019p"); 
    } else { 
      show2019[i].classList.remove("y2019p"); 
    }
  }
}

window.addEventListener("scroll", runner2019);

// ------ 2020 -----------
function runner2020() {
  var show2020 = document.querySelectorAll("li.y2020+p");

  for (var i = 0; i < show2020.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = show2020[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      show2020[i].classList.add("y2020p"); 
    } else { 
      show2020[i].classList.remove("y2020p"); 
    }
  }
}

window.addEventListener("scroll", runner2020);

// ------ 2021 -----------
function runner2021() {
  var show2021 = document.querySelectorAll("li.y2021+p");

  for (var i = 0; i < show2021.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = show2021[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      show2021[i].classList.add("y2021p"); 
    } else { 
      show2021[i].classList.remove("y2021p"); 
    }
  }
}

window.addEventListener("scroll", runner2021);

// ====== Land Animation ============================
// ------ H3 --------------
function reveal_landH3() {
  var landH3 = document.querySelectorAll(".land h3");

  for (var i = 0; i < landH3.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = landH3[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      landH3[i].classList.add("landH3Appear"); 
    } else { 
      landH3[i].classList.remove("landH3Appear"); 
    }
  }
}
window.addEventListener("scroll", reveal_landH3);

// ------ Span --------------
function reveal_landSpan() {
  var landSpan = document.querySelectorAll("h3>span");
  
  for (var i = 0; i < landSpan.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = landSpan[i].getBoundingClientRect().top; 
    var elementVisible = 50; 
    
    if (elementTop < windowHeight - elementVisible) { 
      landSpan[i].classList.add("landSpanColor"); 
    } else { 
      landSpan[i].classList.remove("landSpanColor"); 
    }
  }
}
window.addEventListener("scroll", reveal_landSpan);

// ------ Div --------------
function reveal_landDiv() {
  var landDiv = document.querySelectorAll(".land div");

  for (var i = 0; i < landDiv.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = landDiv[i].getBoundingClientRect().top; 
    var elementVisible = 50; 

    if (elementTop < windowHeight - elementVisible) { 
      landDiv[i].classList.add("landDivColor"); 
    } else { 
      landDiv[i].classList.remove("landDivColor"); 
    }
  }
}
window.addEventListener("scroll", reveal_landDiv);

// ====== Tech Animation =========================
// ------ H3 --------------
function reveal_techH3() {
  var techH3 = document.querySelectorAll(".tech h3");
  
  for (var i = 0; i < techH3.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = techH3[i].getBoundingClientRect().top; 
    var elementVisible = 50; 
    
    if (elementTop < windowHeight - elementVisible) { 
      techH3[i].classList.add("techH3ToAppear"); 
    } else { 
      techH3[i].classList.remove("techH3ToAppear"); 
    }
  }
}
window.addEventListener("scroll", reveal_techH3);

// ------ Paragraph --------------
function reveal_techP() {
  var techP = document.querySelectorAll(".tech p");
  
  for (var i = 0; i < techP.length; i++) {
    var windowHeight = window.innerHeight; 
    var elementTop = techP[i].getBoundingClientRect().top; 
    var elementVisible = 50; 
    
    if (elementTop < windowHeight - elementVisible) { 
      techP[i].classList.add("techPToAppear"); 
    } else { 
      techP[i].classList.remove("techPToAppear"); 
    }
  }
}
window.addEventListener("scroll", reveal_techP);