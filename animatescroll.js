var $gif = $('.gif1');
var $win = $(window);

$win.on('scroll', function (){
    var top = $win.scrollTop() / 50;
    $gif.css('transform', 'transition(' + top + 'deg)');
});