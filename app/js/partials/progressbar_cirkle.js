'use strict';
var circle = document.getElementsByClassName('circle');
var fill1 = document.getElementById("fill1");
var fill2 = document.getElementById("fill2");
var fill_fix = document.getElementById("fill_fix");
var mask_full = document.getElementById("mask_full");
var transform_styles = ['webkitTransform', 'MozTransform', 'msTransform', 'OTransform', 'transform'];
var rotation = 140;
var fix_rotation = rotation * 2;
function myFunction() {
    fill1.style.webkitTransform = 'rotate(' + rotation + 'deg)';
	fill1.style.MozTransform = 'rotate(' + rotation + 'deg)';
	fill1.style.OTransform = 'rotate(' + rotation + 'deg)';
	fill1.style.msTransform = 'rotate(' + rotation + 'deg)';
	fill1.style.transform = 'rotate(' + rotation + 'deg)';
	//
	fill2.style.webkitTransform = 'rotate(' + rotation + 'deg)';
	fill2.style.MozTransform = 'rotate(' + rotation + 'deg)';
	fill2.style.OTransform = 'rotate(' + rotation + 'deg)';
	fill2.style.msTransform = 'rotate(' + rotation + 'deg)';
	fill2.style.transform = 'rotate(' + rotation + 'deg)';
	//
	mask_full.style.webkitTransform = 'rotate(' + rotation + 'deg)';
	mask_full.style.MozTransform = 'rotate(' + rotation + 'deg)';
	mask_full.style.OTransform = 'rotate(' + rotation + 'deg)';
	mask_full.style.msTransform = 'rotate(' + rotation + 'deg)';
	mask_full.style.transform = 'rotate(' + rotation + 'deg)';
	
	
	//fill2.style.transform = `rotate(rotation+deg)`;
	// fill2.style.webkitTransform = `rotate(rotationdeg)`;
	// fill2.style.MozTransform = `rotate(rotationdeg)`;
	// fill2.style.OTransform = `rotate(rotationdeg)`;
	// fill2.style.msTransform = `rotate(rotation+deg)`;
	 // for(var i = 0; i < transform_styles.length; i++) {
   // //fill1.style.transform_styles[i] = 'rotate(45deg)';
   // console.log(typeof(type));
 // }
	fill_fix.style.webkitTransform = 'rotate(' + fix_rotation + 'deg)';
	fill_fix.style.MozTransform = 'rotate(' + fix_rotation + 'deg)';
	fill_fix.style.msTransform = 'rotate(' + fix_rotation + 'deg)';
	fill_fix.style.OTransform = 'rotate(' + fix_rotation + 'deg)';
	fill_fix.style.transform = 'rotate(' + fix_rotation + 'deg)';
}
// element.style.webkitTransform = "";
// element.style.MozTransform = "";
// element.style.msTransform = "";
// element.style.OTransform = "";
// element.style.transform = "";
