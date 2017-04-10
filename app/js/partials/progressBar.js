$( document ).ready(function() {
	console.log( "ready!" );
	// $(window).resize(function(){   Блок всегда по центру
		// $('.radial-progress').css({
		   // position:'absolute',
		   // left: ($(window).width() - $('.radial-progress').outerWidth())/2,
		   // top: ($(window).height() - $('.radial-progress').outerHeight())/2
		// });
// });
// // Для запуска функции при загрузке окна:
// $(window).resize();
// $('head style[type="text/css"]').attr('type', 'text/css');
// css.refreshStyles();
//var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];
window.randomize = function() {
	// var rotation = Math.floor(Math.random() * 180);
	// var fill_rotation = rotation;
	// var fix_rotation = rotation * 2;
	// for(i in transform_styles) {
		// $('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
		// $('.circle .fill.fix').css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
	// }
	$('.radial-progress1').attr('data-progress', Math.floor(93));
	$('.radial-progress2').attr('data-progress', Math.floor(82));
	$('.radial-progress3').attr('data-progress', Math.floor(65));
	$('.radial-progress4').attr('data-progress', Math.floor(75));
	$('.radial-progress5').attr('data-progress', Math.floor(53));
}
//setTimeout(window.randomize, 200);
$('.progressBar_cnt').hover(window.randomize);
});
