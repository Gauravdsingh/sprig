// Get canvas element from HTML
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Define apple properties
let x = 50;
let y = canvas.height - 50;
let velocity = 0;
const jumpVelocity = -10;
const gravity = 0.5;

// Draw apple on canvas
ctx.fillStyle = '#FF0000';
ctx.fillRect(x, y, 10, 10);

// Listen for space bar press
document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    velocity = jumpVelocity;
  }
});

// Update apple position and redraw on canvas
function update() {
  velocity += gravity;
  y += velocity;
  if (y > canvas.height - 50) {
    y = canvas.height - 50;
    velocity = 0;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(x, y, 10, 10);
  requestAnimationFrame(update);
}

update();
