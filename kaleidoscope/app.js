let symmetry = 6;
let angle = 360/symmetry;
	
function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
	background(0);
	//translate(width/2, height/2);
	//stroke(255,0,0);
	//let angle = 360/symmetry;
	//for (let i = 0; i<symmetry; i++) {
		//	rotate(angle);
			//line(0,0,width,0);
	
	//}
}
	


function draw() {
	
	translate(width/2, height/2);
	
	let mx = mouseX - width/2;
	let my = mouseY - height/2;
	let pmx = pmouseX - width/2;
	let pmy = pmouseY - height/2;
	
	if(mouseIsPressed) {
		stroke(255);
		let angle = 360/symmetry;
		for (let i = 0; i<symmetry; i++) {
			
			rotate(angle);
			push();
		
			scale(-1,1);
			
			let d = dist(mx, my, pmx, pmy); //distance between the current mouse position and the previous one
			let sw = map(d, 0, 8, 8, 1); // stroke weight maps the distance (d) from not moving at all (0) up to 20 and then from 20 to 1 when it moves
			strokeWeight(sw);
			line(mx, my, pmx, pmy);
			pop();
		}
  }

}