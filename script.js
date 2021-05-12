function randomPalette(){
	var palette = [];
	let TOTAL = 5;
	let sAndV = getRandomDouble(0.01, 1);
	var startingPoint = getRandomInt(1, 360-TOTAL);
	let difference =(360-startingPoint)/TOTAL;
	for(var i = 0; i < TOTAL; i++) {
		let color = hsvToRgb(startingPoint-1, sAndV, sAndV);
		palette.push(color);
		startingPoint += difference;
	}
	return palette;
}

function rgbToString(rgb) {
	return rgb[0].toFixed(0) + " , " + rgb[1].toFixed(0) + " , " + rgb[2].toFixed(0);
}

function generateRules(){
	let palette = randomPalette();
	for(var i = 0; i < palette.length; i++) {
		let color = palette[i];
		let red = color[0];
		let green = color[1];
		let blue = color[2];
		let selector = "#color" + (i+1);
		$(selector)
			.css({backgroundColor: "rgb(" + red + "," + green + "," + blue + ")"});
	}
	loadTextArea(palette);
}

function loadTextArea(palette) {
	$("#css-rules")
		.text("\n.website-background{ color: rgb(" + rgbToString(palette[0]) + "); }\n\n")
		.append(".element-text{ color: rgb(" + rgbToString(palette[1]) + "); }\n\n")
		.append(".element-border{ border-color: rgb(" + rgbToString(palette[2]) + "); }\n\n")
		.append(".element-background{ background-color: rgb(" + rgbToString(palette[3]) + "); }\n\n")
		.append(".header{ color: rgb(" + rgbToString(palette[4]) + "); }\n\n");
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDouble(min, max) {
	return Math.random() * (max - min) + min;
}

function clearArea() {
	$("#css-rules")
		.text("");
	for(var i = 0; i < 5; i++) {
		$("#color" + (i+1)).css({backgroundColor: "white"});
	}
}
