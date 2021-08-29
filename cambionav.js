$(document).on("scroll",function(){
if($(document).scrollTop()>100){
$("header").removeClass("header1").addClass("menu-cambio");

} else{
$("header").removeClass("menu-cambio").addClass("header1");

}
});