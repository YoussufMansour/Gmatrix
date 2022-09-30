let nav = document.querySelector("nav");
let toggleIcon = document.querySelector(".toggle-icon");
let menu = document.querySelector(".nav-list");
let close1 = document.querySelector(".close-icon");
let hashes = document.querySelectorAll(".nav-list li a");
let moreInfo = document.querySelectorAll(".box .face a");
let infoDiv = document.querySelectorAll(".more-info");
let sticky = nav.offsetTop;
let arrow = document.querySelectorAll(".face i");
let extended = document.getElementById("extended");

// Sticking the navbar after scroll
if (window.pageYOffset >= sticky) {
  nav.classList.add("sticky");
} else {
  nav.classList.remove("sticky");
}

//toggle menu in mobile media query (changing the toggle  to clos icon)
toggleIcon.addEventListener("click", openMenu);
close1.addEventListener("click", closeMenu);
hashes.forEach((n) => n.addEventListener("click", closeMenu));

function openMenu() {
  menu.classList.add("active");
  toggleIcon.classList.add("active");
  close1.classList.add("active");
}
function closeMenu() {
  menu.classList.remove("active");
  toggleIcon.classList.remove("active");
  close1.classList.remove("active");
}

// Managing the extended part of services for every card
moreInfo[0].addEventListener("click", function () {
  if (infoDiv[0].style.display == "block") {
    infoDiv[0].style.display = "none";
    arrow[0].classList.remove("fa-angles-up");
    arrow[0].classList.add("fa-angles-down");
  } else {
    infoDiv[0].style.display = "block";
    arrow[0].classList.remove("fa-angles-down");
    arrow[0].classList.add("fa-angles-up");
    extended.scrollIntoView();
  }
  infoDiv[1].style.display = "none";
  infoDiv[2].style.display = "none";
  infoDiv[3].style.display = "none";

  arrow.forEach((e, i) => {
    if (i != 0) {
      e.classList.remove("fa-angles-up");
      e.classList.add("fa-angles-down");
    }
  });
});
moreInfo[1].addEventListener("click", function () {
  if (infoDiv[1].style.display == "block") {
    infoDiv[1].style.display = "none";
    arrow[1].classList.remove("fa-angles-up");
    arrow[1].classList.add("fa-angles-down");
  } else {
    infoDiv[1].style.display = "block";
    arrow[1].classList.remove("fa-angles-down");
    arrow[1].classList.add("fa-angles-up");
    extended.scrollIntoView();
  }
  infoDiv[0].style.display = "none";
  infoDiv[2].style.display = "none";
  infoDiv[3].style.display = "none";

  arrow.forEach((e, i) => {
    if (i != 1) {
      e.classList.remove("fa-angles-up");
      e.classList.add("fa-angles-down");
    }
  });
});
moreInfo[2].addEventListener("click", function () {
  if (infoDiv[2].style.display == "block") {
    infoDiv[2].style.display = "none";
    arrow[2].classList.remove("fa-angles-up");
    arrow[2].classList.add("fa-angles-down");
  } else {
    infoDiv[2].style.display = "block";
    arrow[2].classList.remove("fa-angles-down");
    arrow[2].classList.add("fa-angles-up");
    extended.scrollIntoView();
  }
  infoDiv[0].style.display = "none";
  infoDiv[1].style.display = "none";
  infoDiv[3].style.display = "none";

  arrow.forEach((e, i) => {
    if (i != 2) {
      e.classList.remove("fa-angles-up");
      e.classList.add("fa-angles-down");
    }
  });
});
moreInfo[3].addEventListener("click", function () {
  if (infoDiv[3].style.display == "block") {
    infoDiv[3].style.display = "none";
    arrow[3].classList.remove("fa-angles-up");
    arrow[3].classList.add("fa-angles-down");
  } else {
    infoDiv[3].style.display = "block";
    arrow[3].classList.remove("fa-angles-down");
    arrow[3].classList.add("fa-angles-up");
    extended.scrollIntoView();
  }
  infoDiv[0].style.display = "none";
  infoDiv[1].style.display = "none";
  infoDiv[2].style.display = "none";

  arrow.forEach((e, i) => {
    if (i != 3) {
      e.classList.remove("fa-angles-up");
      e.classList.add("fa-angles-down");
    }
  });
});
