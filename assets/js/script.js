// common header
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

// header sticky
  $(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) { // Change 100 to the height you want to trigger the effect
            $('.header-section ').addClass('is-sticky');
        } else {
            $('.header-section ').removeClass('is-sticky');
        }
    });
});

