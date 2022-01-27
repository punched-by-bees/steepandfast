function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(200, 0, 150);
	//line(0, height/2, 400, height/2);
	//line(width/2, 0, width/2, 400);
	triangle(90, 265, width/2 +15, 135, width/2 -25, 265);
	fill(51);
	triangle(310, 135, width/2 +25, 135, width/2 -15, 265);
	}