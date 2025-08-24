



$(document).ready(function(){
	$("#start").click(function(){
		var myAnimate = $("#anim");
		myAnimate.animate({width:'250px'});
		myAnimate.animate({height:'250px'});
		myAnimate.animate({width:'300px'});
		myAnimate.animate({height:'300px'});
		myAnimate.animate({width:'350px'});
		myAnimate.animate({height:'350px'});
		myAnimate.animate({width:'400px'});
		myAnimate.animate({height:'400px'});
	});
	$("#stop").click(function(){
		$("#anim").stop(true);
	});
});