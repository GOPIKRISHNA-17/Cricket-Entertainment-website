
// PRESENTATION PAGE FOR 4 SEC
document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById("splashScreen");
    const mainPage = document.getElementById("mainPage");
  
    // Show splash screen for 4 seconds
    setTimeout(function () {
      splashScreen.style.opacity = "0";
      setTimeout(function () {
        splashScreen.style.display = "none";
        mainPage.style.display = "flex";
        window.location.href = "cw2.html";
      }, 500); // Delay the removal of splash screen to match the CSS transition
    }, 4000);
  });
  



