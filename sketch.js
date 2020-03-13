// You could have multiple flags like: start, launch to indicate the state of the game.
var ground;

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(400,400);
    ground = new Ground (0,380,60,20);
}

function draw() {
// Remember to update the Matter Engine and set the background.
Engine.update(engine);
strokeWeight(4);
ground.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}