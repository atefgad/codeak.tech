
/*!
 * atef v0.1
 * Copyright 2019.
 */


$(document).ready(function () {
    "use strict";
    // Typed Js
    $("#typed").typed({
        stringsElement: $(".typed-strings"),
        typeSpeed: 30,
        backDelay: 500,
        startDelay: 500,
        loop: true,
        contentType: "html"
    })


    var headHeight = $('.navbar').innerHeight();
    $('.main-tex').css('paddingTop', headHeight * 2);

    new WOW().init();
});

$(window).scroll(function() {

    // Add Class "NavbarFixed" on Navbar
    if( $(this).scrollTop() > 100 ) {

        $('.navbar').addClass('NavbarFixed');

    } else { $('.navbar').removeClass('NavbarFixed');}

    

});