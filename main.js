function menu() {
    var a = document.getElementById("hambargarmenu");
    a.style.display = "flex";
    a.style.transform = "translateX(-100%)";
    setTimeout(function () {
      a.style.transition = "transform 0.5s ease";
      a.style.transform = "translateX(0)";
    }, 10);
  }
  
  function closemenu() {
    var b = document.getElementById("hambargarmenu");
    b.animate(
      { transform: 'translateX(-100%)' },
      {
        duration: 500,
        fill: 'backwards'
      });
    setTimeout(function () {
      b.style.display = "none";
    }, 500);
  }
  
