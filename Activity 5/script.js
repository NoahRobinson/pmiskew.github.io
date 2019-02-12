
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

function inputLength() {
	return input.value.length;
}

function clicked() {

	dropdown.value = "custom"; //Step 1 Change drop down

	//ensure something is in the box
	if (inputLength() > 0) {
		image = input.value; //set image value to input box value
		updatePage();
	}
}

function updatePage() {
	clearList();
	document.getElementById("picture").src = image; //set the picture image to the value in the box

}

function keypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		image = input.value; //set image value to input box value
		updatePage();
	}
}

function clickedprocess() {
	
	app.models.predict("bd367be194cf45149e75f01d59f77ba7",image).then(
    function(response) {
     	resp = response;
    },
    function(err) {
      // there was an error
    }
  );
	createListElement();

}

function clearList() {


	while (ul.getElementsByTagName("li").length > 0) {
		
		ul.removeChild(ul.childNodes[0])
	}
}

function createListElement() {

	clearList();
	
	len = 20;
	for (i = 0; i < len; i++) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(resp.outputs[0].data.concepts[i].name+" - "+(resp.outputs[0].data.concepts[i].value*100).toFixed(2)));
		ul.appendChild(li);
	}
}

function dropdownchange() {

	console.log(dropdown.value);
	ddval = dropdown.value;
	if (ddval == "ti1") {
		image = img1;
	} else if (ddval == "ti2") {
		image = img2;

	} else if (ddval == "ti3") {
		image = img3;
	} else if (ddval == "ti4") {
		image = img4;
	}
	else if (ddval == "ti5") {
		image = img5;
	}
	
	updatePage();
}

enterbtn.addEventListener("click", clicked);
processbtn.addEventListener("click", clickedprocess);
input.addEventListener("keypress", keypress);
dropdown.addEventListener("change", dropdownchange);

