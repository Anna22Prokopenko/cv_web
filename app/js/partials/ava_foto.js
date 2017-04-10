$(document).ready(function() {
	console.log("ready");
	$("#rerun_animation").hover(function() {   
		var el = $(this),
		newone = el.clone(true);
		el.before(newone);
		$("." + el.attr("class") + ":last").remove();
	});
});