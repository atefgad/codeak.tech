/*
* Template Name: codeak.tech
* Template URI: http://codeak.tech
* Description: Digital Agency
* Author: codeak.tech
* Author URL: https://codeak.tech
* Version: 1.0
*/

$(document).ready(function () {
  "use strict";

  /*======================================
    WOW Animation
    ======================================*/
  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
    }
    , scrollContainer: true // optional scroll container selector, otherwise use window
  }
  );
  wow.init();
  
  /*======================================
    Hamburger-icon
  ======================================*/
  $(".hamburger-icon").on("click", function () {
    $(this).toggleClass("open");
  })

  /*======================================
  Preloader
  ======================================*/
  $('#preloader').fadeOut('slow', function () {
      $(this).remove();
  });
  //   loader --------JS---------
  $(".loader-wrap").fadeOut(500, function () {
    $("#main").animate({
        opacity: "1"
    }, 700);
  });

});

/* =====================================
  Add smooth scrolling to all links
=====================================*/
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

/* window scroll */
$(window).scroll(function() {

  // Add Class "sticky" on ".header-area" when scrolldown
  if( $(this).scrollTop() > 100 ) {

      $('.header-area').addClass('sticky');

  } else { $('.header-area').removeClass('sticky');}

  // scroll back-to-top on click
  if ($(this).scrollTop() > 250) {
      $('#back-to-top').fadeIn(1500);
  } else {
      $('#back-to-top').fadeOut(500);
    }
  
    

});

/*======================================
Slides our works
======================================*/
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  // loop: true,
  // loopFillGroupWithBlank: true,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // navigation: {
  //     prevEl: '.swiper-button-prev',
  //     nextEl: '.swiper-button-next',
  // },
  history: {
    key: 'slide',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  }
});

