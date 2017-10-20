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
 
//excercise 3
var bounds;
var finish;

window.onload = function() {
 
     bounds = document.querySelectorAll(".boundary");
	 finish = document.getElementById("end");
	 finish.onmouseover = winner;
	 
     for (var x = 0; x < bounds.length; x++) {
 		bounds[x].onmouseover = loser;
 	}
}

function loser(){

		for (var x = 0; x < bounds.length; x++) {
			bounds[x].className = "boundary youlose";
		}
}
		
 
function winner(){
		alert("You Win!");
}