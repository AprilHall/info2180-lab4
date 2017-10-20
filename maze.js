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

//execercise 4
var bounds;
var begin;
var finish;

window.onload = function() {
 
     bounds = document.querySelectorAll(".boundary");
	 finish = document.getElementById("end");
	 finish.onmouseover = winner;
	 
	 begin = document.getElementById("start");
     begin.onclick = restart;
	 
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

function restart(){
	for (var x = 0; x < bounds.length; x++) {
		bounds[x].className = "boundary";
	}
}


//excercise 5
var bounds;
var begin;
var result;
var finish;
var limit = false;
var complete = false;


window.onload = function() {

		bounds = document.querySelectorAll(".boundary");
		begin = document.getElementById("start");
		result = document.getElementById("status");
		finish = document.getElementById("end");

		begin.onclick = restart;
		
		finish.onmouseover = winner;
		
		for (var x = 0; x < bounds.length; x++) { 
			bounds[x].onmouseover = loser;
		}
}

function loser(){ 

	if (!complete){ 
		if(!limit)
		{
			limit = true;
			
			result.innerText = 'Sorry, you lose! Click on "S" to restart game.';
			
			for (var x = 0; x < bounds.length; x++) {
				bounds[x].className = "boundary youlose";
			}
		}
	}
}

function winner(){
	
		if(!limit){ 
			complete = true;
			
			result.innerText = 'Yay, you won! Click on "S" to restart game.';
		}

}

function restart(){
	
	    limit = false;
		
		complete = false;
		
		result.innerText = 'Move your mouse over the "S" to start game.';	
		
		for (var x = 0; x < bounds.length; x++) {
			bounds[x].className = "boundary";
	}
}