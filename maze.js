//excercise 1
window.onload = function() {

var bound = document.getElementById("boundary1");

	bound.onmouseover = function(){
		bound.className = "boundary youlose";
		
		
	}
	
}

//excercise 2
var bounds;

window.onload = function() {

		bounds = document.querySelectorAll(".boundary");
		for (var i = 0; i < bounds.length; i++) {
		bounds[i].onmouseover = changeBounds;
		}
}
 
function changeBounds(){

		for (var i = 0; i < bounds.length; i++) {
		bounds[i].className = "boundary youlose";
		}
 }