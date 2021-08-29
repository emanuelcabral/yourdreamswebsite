// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.menu').addClass('sticky');
    } else {
        $('.menu').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.menu').hasClass('open-nav')) {
        $('.menu').removeClass('open-nav');
    } else {
        $('.menu').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.menu').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.menu').removeClass('open-nav');
    }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});