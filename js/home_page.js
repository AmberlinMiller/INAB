// ====== Scroll Animation =====================================================
function revealMain() {
    var mainAppear = document.querySelectorAll("main");
  
    for (var i = 0; i < mainAppear.length; i++) {
      var windowHeight = window.innerHeight; 
      var elementTop = mainAppear[i].getBoundingClientRect().top; 
      var elementVisible = 150; 
  
      if (elementTop < windowHeight - elementVisible) { 
        mainAppear[i].classList.add("mainAppear"); 
      } else { 
        mainAppear[i].classList.remove("mainAppear"); 
      }
    }
  }
  
  window.addEventListener("scroll", revealMain);