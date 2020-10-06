
/*!
 * khedma v0.1
 * Copyright 2020.
 */


$(document).ready(function () {
    "use strict";

    

    new WOW().init();
});

$(window).scroll(function() {

    // Add Class "NavbarFixed" on Navbar
    if( $(this).scrollTop() > 100 ) {

        $('.header-area').addClass('sticky');

    } else { $('.header-area').removeClass('sticky');}

    

});