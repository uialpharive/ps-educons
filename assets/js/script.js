// common header
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });
// common header
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

// header sticky
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header-section ").addClass("is-sticky");
    } else {
      $(".header-section").removeClass("is-sticky");
    }
  });
});

const navLinks = document.querySelectorAll(".head-nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
  });
});
