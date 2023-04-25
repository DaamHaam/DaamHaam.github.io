let particles = [];
let particleColor;

function setup() {
  let canvas = createCanvas(800, 200);
  canvas.parent("canvas-container");
  particleColor = color(255, 250, 0);
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(240);
  for (let p of particles) {
    p.update();
    p.show();
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.particleColor = particleColor;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // rebond = inverse la vitesse verticale ou horiz
    if (this.x < 0 || this.x > width) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > height) {
      this.vy = -this.vy;
    }
  }

  show() {
    fill(this.particleColor);
    ellipse(this.x, this.y, 10);
  }
}

document.getElementById("color-form").addEventListener("submit", (event) => {
  event.preventDefault();
  particleColor = color(document.getElementById("color").value);
  for (let p of particles) {
    p.particleColor = particleColor;
  }
});
