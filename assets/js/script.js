// Fetch and inject the header content
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    // Insert the header content into the page
    document.getElementById("header").innerHTML = data;

    // Call the function to add the active class after the header is loaded
    addActiveClass();
  })
  .catch((error) => {
    console.error("Error loading the header:", error);
  });

// Function to add 'active' class to the current page link
function addActiveClass() {
  // Get the current page path
  const currentPath = window.location.pathname.toLowerCase();
  console.log("Current Path:", currentPath); // Debug: Log the current path

  // Get all navigation links
  const navLinks = document.querySelectorAll(".head-nav-link");

  // Loop through each link and check if its href matches the current path
  navLinks.forEach((link) => {
    let linkPath = link.getAttribute("href").toLowerCase();
    linkPath = linkPath.replace(/\/$/, ""); // Remove trailing slashes for comparison

    console.log("Checking link path:", linkPath); // Debug: Log each link path

    // If the current path matches the link, add the 'active' class to the parent <li>
    if (currentPath === linkPath) {
      console.log("Match found for:", linkPath); // Log when a match is found
      const navItem = link.closest(".nav-item"); // Get the parent <li> element
      if (navItem) {
        navItem.classList.add("active"); // Add the 'active' class
        console.log("Active class added to:", navItem); // Log where the active class is added
      }
    }
  });
}

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


// 

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.toLowerCase(); // Get the current path
  console.log("Current Path:", currentPath); // Debug: Log current path
  
  // Get all links with class 'head-nav-link'
  const navLinks = document.querySelectorAll(".head-nav-link");

  navLinks.forEach(link => {
    let linkPath = link.getAttribute("href").toLowerCase(); // Get the href attribute (link path)
    linkPath = linkPath.replace(/\/$/, ""); // Remove trailing slashes for comparison
    console.log("Checking link path:", linkPath); // Debug: Log each link path

    if (currentPath === linkPath) { // Exact match of the current path and link href
      console.log("Match found for:", linkPath); // Debug: Log when a match is found
      const navItem = link.closest(".nav-item"); // Find the parent <li> of the link
      if (navItem) {
        navItem.classList.add("active"); // Add the 'active' class to the <li> element
        console.log("Active class added to:", navItem); // Debug: Log when class is added
      }
    }
  });
});



  window.addEventListener("load", function () {
    const loader = document.getElementById("page-loader");
    const content = document.getElementById("main-content");

    // Minimum time loader should stay visible (in ms)
    const MIN_LOAD_TIME = 1000;

    const start = Date.now();

    // Wait for either 2 seconds or page load — whichever is longer
    const showContent = () => {
      const elapsed = Date.now() - start;
      const delay = Math.max(0, MIN_LOAD_TIME - elapsed);

      setTimeout(() => {
        loader.style.opacity = 0;

        setTimeout(() => {
          loader.style.display = "none";
          content.style.display = "block";
          
          // Initialize AOS after the loader disappears
          AOS.init();
        }, 400); // Match fade-out transition
      }, delay);
    };

    showContent();
  });


  window.addEventListener('resize', function() {
    AOS.refresh();
  });
  