var enterbtn = document.getElementById("enter");
var input = document.getElementById("userinput");
var processbtn = document.getElementById("process");
var dropdown = document.getElementById("dropdown");
var ul = document.querySelector("ul");


function clickedEnter() {

	console.log("clickedButton function called");

}

function clickedProcess () {

	console.log("clickedProcess function called");

}

function keyPressed(event) {
	console.log("keyPressed function called");
	console.log(event.keyCode);
}

function dropdownChange() {

	console.log("dropdownChange function called");
}

function processImage() {
	console.log("processImage function called");

}



enterbtn.addEventListener("click", clickedEnter);
processbtn.addEventListener("click", clickedProcess);
input.addEventListener("keypress", keyPressed);
dropdown.addEventListener("change", dropdownChange);