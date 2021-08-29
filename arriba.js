$(document).ready(function(){
 
	$('.btn-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 4000);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.btn-arriba').slideDown(300);
		} else {
			$('.btn-arriba').slideUp(300);
		}
	});
 
});