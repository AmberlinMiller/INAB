"use strict"

// ====== Scroll Animation =======
function reveal() { // 設計一個叫 reveal 的 function
    var reveals = document.querySelectorAll(".reveal"); // 將所有帶有 .reveal 的物件找出來裝在 reveals 裡
  
    for (var i = 0; i < reveals.length; i++) { // 用 reveals 的陣列長度來跑回圈
      var windowHeight = window.innerHeight; // 將視窗的內部高度裝在 windowHeight 裡
      var elementTop = reveals[i].getBoundingClientRect().top; // 找出第 i 個 reveal 的大小與其在視窗上的位子, 然後裝在 elementTop 裡
      var elementVisible = 150; // 應該是視窗內層上緣與動畫物件的距離, 數字越小滑動距離越短就能引發動畫
  
      if (elementTop < windowHeight - elementVisible) { // 如果 reveal的大小與位置 < 視窗高度 - 上緣與物件的距離
        reveals[i].classList.add("active"); // 那麼就引發動畫
      } else { // 要是沒有小於
        reveals[i].classList.remove("active"); // 那就不會出現動畫
      }
    }
  }
  
window.addEventListener("scroll", reveal); // 建立事件聆聽, 在捲動時呼叫並執行 function reveal