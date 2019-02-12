var enterbtn = document.getElementById("enter");
var input = document.getElementById("userinput");
var processbtn = document.getElementById("process");
var dropdown = document.getElementById("dropdown");
var ul = document.querySelector("ul");

var resp = "";


// You can also use the SDK by adding this script to your HTML:
var img1 = "http://farm1.static.flickr.com/228/499181350_b01a280789.jpg";
var img2 = "https://amp.businessinsider.com/images/579a123add0895fb558b4972-750-751.png"
var img3 = "https://clarifai.com/cms-assets/20180320212157/food-001.jpg"
var img4 = "https://community.clarifai.com/uploads/default/original/1X/f78720b7d2233009c39d30974f0c4d0f1e4ed5a6.jpg"
var img5 = "https://image.shutterstock.com/display_pic_with_logo/136306/722718082/stock-photo-healthy-food-clean-eating-selection-fruit-vegetable-seeds-superfood-cereals-leaf-vegetable-on-722718082.jpg"

var image = img1;

const app = new Clarifai.App({apiKey: '25dd403977044f108b994b4fb8a5c7c0'});
	
function clickedEnter() {

	console.log("clickedButton function called");

}

function clickedProcess () {

	console.log("clickedProcess function called");
	processImage();
}

function keyPressed(event) {
	console.log("keyPressed function called");
	console.log(event.keyCode); //gives the code associated with the key pressed.
	console.log(event.key); //The actual key and case
	
}

function dropdownChange() {

	console.log("dropdownChange function called");
}


function processImage() {
	console.log("Proces Image Called");

	app.models.predict("bd367be194cf45149e75f01d59f77ba7", "https://samples.clarifai.com/food.jpg").then( 
    function(response) { 
        resp = response;
        console.log(response);
    },
    function(err) { 
        // there was an error 
    } 
);
}




enterbtn.addEventListener("click", clickedEnter);
processbtn.addEventListener("click", clickedProcess);
input.addEventListener("keypress", keyPressed);
dropdown.addEventListener("change", dropdownChange);