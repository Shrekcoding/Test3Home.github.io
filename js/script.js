let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBTN = document.querySelector(".close-btn");


menuBtn.addEventListener("click", function () {
    menus.classList.add("active");
})

closeBTN.addEventListener("click", function () {
    menus.classList.remove("active");
})

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
