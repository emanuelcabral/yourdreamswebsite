// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.boton2').addClass('sticky');
    } else {
        $('.boton2').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.boton2').hasClass('open-nav')) {
        $('.boton2').removeClass('open-nav');
    } else {
        $('.boton2').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.boton2').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.boton2').removeClass('open-nav');
    }
});

// importante esto
// Navigation Scroll - ljepo radi materem
$('.boton2 a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});