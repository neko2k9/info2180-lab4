lose = null;

window.onload = function(){
	var begin = document.getElementById("start").addEventListener('click', restartmaze);
	var overBoundary = document.getElementById("maze").addEventListener('mouseleave', failure);
	var finish = document.getElementById("end").addEventListener('mouseover', success);
	var boundaries = document.querySelectorAll("#maze div.boundary");
	
	for(var i=0; i<boundaries.length; i++){
		boundaries[i].onmouseover = failure;
	}
};

function success(){
	if(lose=true){
		document.getElementById("status").innerHTML = "Congratulations, you win! Click S to restart.";
	}
}

function failure(){
	lose = true;
	var boundaries = document.querySelectorAll("#maze div.boundary");
	for (var i=0; i<boundaries.length; i++){
		boundaries[i].classList.add("youlose");
	document.getElementById("status").innerHTML = "You lose, please try again.";
	}

}

function restartmaze(){
	lose = false;
	var boundaries = document.querySelectorAll("#maze div.boundary");
	for (var i=0; i<boundaries.length; i++){
		boundaries[i].classList.remove("youlose");
	}
}