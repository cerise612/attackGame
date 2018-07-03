// JSBouncingKittenSimple.js
window.onload = init;

// Constants to define the battleArena dimensions
const MIN_X = 20;
const MIN_Y = 80;
const WIDTH = 1000;
const HEIGHT = 700;
const MAX_X = MIN_X + WIDTH - 1;
const MAX_Y = MIN_Y + HEIGHT - 1;

// kitten
var kittenImageRadius = 100;
var kittenImageSize = kittenImageRadius * 4 + 1;
// Randomly place the initial kitten within the battleArena, slightly off from border
var kittenImageCenterX = (WIDTH - 2 * kittenImageSize) * Math.random() + (MIN_X + kittenImageSize);
var kittenImageCenterY = (HEIGHT - 2 * kittenImageSize) * Math.random() + (MIN_Y + kittenImageSize);
// Initial speed
var kittenImageSpeedX = 8;
var kittenImageSpeedY = 6;


function init() {
    var battleArena = document.getElementById("battleArena");
    // Position the battleArena absolutely via CSS style
    battleArena.style.left = (MIN_X - 5) + "px";  // unit in px (pixels)
    battleArena.style.top = (MIN_Y - 5) + "px";
    battleArena.style.width = WIDTH + "px";
    battleArena.style.height = HEIGHT + "px";

    var player = document.getElementsByClassName("kittenImage");
    // Position the kitten image absolutely via CSS style
    player[0].style.left = (kittenImageCenterX - kittenImageRadius) + "px";
    player[0].style.top = (kittenImageCenterY - kittenImageRadius) + "px";
    player[0].style.width = kittenImageSize + "px";
    player[0].style.height = kittenImageSize + "px";

    moveOneStep();
}



function moveOneStep() {
    // Calculate the kitten's new position
    kittenImageCenterX += kittenImageSpeedX;
    kittenImageCenterY += kittenImageSpeedY;
    // Check if the kitten moves over the bounds
    // If so, adjust the position and speed.
    if (kittenImageCenterX - kittenImageRadius < MIN_X) {
        kittenImageSpeedX = -kittenImageSpeedX; // Reflect along normal
        kittenImageCenterX = MIN_X + kittenImageRadius; // Re-position the kitten at the edge
    } else if (kittenImageCenterX + kittenImageRadius > MAX_X) {
        kittenImageSpeedX = -kittenImageSpeedX;
        kittenImageCenterX = MAX_X - kittenImageRadius;
    }
    // May cross both x and y bounds
    if (kittenImageCenterY - kittenImageRadius < MIN_Y) {
        kittenImageSpeedY = -kittenImageSpeedY;
        kittenImageCenterY = MIN_Y + kittenImageRadius;
    } else if (kittenImageCenterY + kittenImageRadius > MAX_Y) {
        kittenImageSpeedY = -kittenImageSpeedY;
        kittenImageCenterY = MAX_Y - kittenImageRadius;
    }

    var player = document.getElementsByClassName("kittenImage");
    player[0].style.left = (kittenImageCenterX - kittenImageRadius) + "px";
    player[0].style.top = (kittenImageCenterY - kittenImageRadius) + "px";

    // Recursively call move after the specified msec
    setTimeout("moveOneStep()", 60);
}
