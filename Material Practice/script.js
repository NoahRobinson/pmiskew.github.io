function onload() {
	console.log("LOADING. . .");
	console.log(x);
}

function reverseString(str) {

	newStr = "";

	for (i = str.length - 1; i > -1; i--) {
		newStr = newStr + str[i];
	}
	return newStr;
}