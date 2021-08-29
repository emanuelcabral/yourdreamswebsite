$(function(){
	$slideshow = $(".gallery ul");
	$slideactive = $slideshow.find("li.each").first().addClass('active').show();
	$(".direction .next").click(function(){
	$slideactive = $slideshow.find("li.active").next();
		if(!$slideactive.size())
			$slideactive = $slideshow.find("li.each").first();		$slideshow.find("li.active").removeClass("active");
			$slideactive.addClass("active");
	});
    
    $(".direction2 .previo").click(function(){
	$slideactive = $slideshow.find("li.active").prev();
		if(!$slideactive.size())
			$slideactive = $slideshow.find("li.each").last();		$slideshow.find("li.active").removeClass("active");
			$slideactive.addClass("active");
	});
});



//almacenar slider en una variable
var slider = $('#slider');
//almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 5000);
}
siguiente.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();