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

document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL path (without the domain and query parameters)
  const currentPage = window.location.pathname;

  // Log the current path in the console
  console.log("Current Path:", currentPage);

  // Define the links with their respective paths
  const links = {
    "/index.html": "home-link",
    "/aboutus.html": "aboutus-link",
    "/destination.html": "destination-link",
    "/test-preparation.html": "testprep-link",
    "/services-we-offer.html": "services-link",
    "/contactus.html": "contact-link",
  };

  // Loop through each link to check if it matches the current page
  for (const path in links) {
    const linkId = links[path];
    const linkElement = document.getElementById(linkId);

    // If the current page URL matches the link's path, add 'active' class
    if (currentPage === path) {
      linkElement.classList.add("active");
    } else {
      linkElement.classList.remove("active");
    }
  }
});

