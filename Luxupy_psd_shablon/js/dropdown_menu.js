$(document).ready(function(){
$('#bootom-menu li ul').css({
	display:"none",
	left:"auto"
});
$('bootom-menu li').hover(function(){
	$(this)
		.find('ul')
		.stop(true, true)
		.slideDown('fast');
}, function(){
	$(this)
		find('ul')
		.stop(true, true)
		.fadeOut('fast');

});
});