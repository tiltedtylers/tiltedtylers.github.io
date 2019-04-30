$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    $(".owl-carousel").owlCarousel({
        // items: 3,
        loop: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            900 : {
                items: 2
            },
            // breakpoint from 768 up
            1400 : {
                items: 3
            }


        }
        
    });
  });
  