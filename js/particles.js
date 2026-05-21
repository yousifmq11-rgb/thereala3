/* Particle Text Effect — 3A Service Oy
   Converted from React/TS to vanilla JS.
   Usage: initParticles('canvas-id', ['WORD1','WORD2'], optionalOpts)
*/
window.initParticles = function(canvasId, words, options) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const opts = Object.assign({
    colors: [
      { r: 232, g: 137, b: 10  },  // brand orange
      { r: 255, g: 255, b: 255 },  // white
      { r: 254, g: 200, b: 100 },  // light orange
    ],
    wordInterval: 210,
    pixelSteps: 6,
    drawAsPoints: true,
    backgroundAlpha: 0.13,
  }, options || {});

  const ctx = canvas.getContext('2d');
  let particles = [];
  let frameCount = 0;
  let wordIndex = 0;

  class Particle {
    constructor() {
      this.pos = { x: 0, y: 0 };
      this.vel = { x: 0, y: 0 };
      this.acc = { x: 0, y: 0 };
      this.target = { x: 0, y: 0 };
      this.closeEnoughTarget = 100;
      this.maxSpeed = 1.0;
      this.maxForce = 0.1;
      this.isKilled = false;
      this.startColor = { r: 0, g: 0, b: 0 };
      this.targetColor = { r: 0, g: 0, b: 0 };
      this.colorWeight = 0;
      this.colorBlendRate = 0.01;
    }

    move() {
      const dx = this.pos.x - this.target.x;
      const dy = this.pos.y - this.target.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const pm = dist < this.closeEnoughTarget ? dist / this.closeEnoughTarget : 1;

      const tx = this.target.x - this.pos.x;
      const ty = this.target.y - this.pos.y;
      const tm = Math.sqrt(tx * tx + ty * ty);
      let tvx = 0, tvy = 0;
      if (tm > 0) { tvx = (tx / tm) * this.maxSpeed * pm; tvy = (ty / tm) * this.maxSpeed * pm; }

      let sx = tvx - this.vel.x;
      let sy = tvy - this.vel.y;
      const sm = Math.sqrt(sx * sx + sy * sy);
      if (sm > 0) { sx = (sx / sm) * this.maxForce; sy = (sy / sm) * this.maxForce; }

      this.acc.x += sx; this.acc.y += sy;
      this.vel.x += this.acc.x; this.vel.y += this.acc.y;
      this.pos.x += this.vel.x; this.pos.y += this.vel.y;
      this.acc.x = 0; this.acc.y = 0;
    }

    draw(ctx) {
      if (this.colorWeight < 1) this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1);
      const r = Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight);
      const g = Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight);
      const b = Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      if (opts.drawAsPoints) {
        ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
      } else {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    kill(w, h) {
      if (!this.isKilled) {
        const cx = w / 2, cy = h / 2, mag = (w + h) / 2;
        const rx = Math.random() * w, ry = Math.random() * h;
        const ddx = rx - cx, ddy = ry - cy;
        const dm = Math.sqrt(ddx * ddx + ddy * ddy);
        this.target.x = dm > 0 ? cx + (ddx / dm) * mag : cx;
        this.target.y = dm > 0 ? cy + (ddy / dm) * mag : cy;
        this.startColor = {
          r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
          g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
          b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
        };
        this.targetColor = { r: 0, g: 0, b: 0 };
        this.colorWeight = 0;
        this.isKilled = true;
      }
    }
  }

  function rndPos(cx, cy, mag) {
    const rx = Math.random() * canvas.width;
    const ry = Math.random() * canvas.height;
    const dx = rx - cx, dy = ry - cy;
    const dm = Math.sqrt(dx * dx + dy * dy);
    return dm > 0 ? { x: cx + (dx / dm) * mag, y: cy + (dy / dm) * mag } : { x: cx, y: cy };
  }

  function resize() {
    const w = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
    const h = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
    canvas.width  = w || window.innerWidth;
    canvas.height = h || 520;
  }

  function nextWord(word) {
    const off = document.createElement('canvas');
    off.width = canvas.width;
    off.height = canvas.height;
    const octx = off.getContext('2d');

    let fs = Math.min(canvas.height * 0.48, 130);
    octx.font = `900 ${fs}px Arial, sans-serif`;
    while (octx.measureText(word).width > canvas.width * 0.88 && fs > 18) {
      fs -= 2;
      octx.font = `900 ${fs}px Arial, sans-serif`;
    }
    octx.fillStyle = 'white';
    octx.textAlign = 'center';
    octx.textBaseline = 'middle';
    octx.fillText(word, canvas.width / 2, canvas.height / 2);

    const data = octx.getImageData(0, 0, canvas.width, canvas.height).data;
    const newColor = opts.colors[wordIndex % opts.colors.length];

    let pi = 0;
    const idxs = [];
    for (let i = 0; i < data.length; i += opts.pixelSteps * 4) idxs.push(i);
    for (let i = idxs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
    }

    for (const ci of idxs) {
      if (data[ci + 3] > 0) {
        const x = (ci / 4) % canvas.width;
        const y = Math.floor(ci / 4 / canvas.width);
        let p;
        if (pi < particles.length) {
          p = particles[pi]; p.isKilled = false; pi++;
        } else {
          p = new Particle();
          const rp = rndPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2);
          p.pos.x = rp.x; p.pos.y = rp.y;
          p.maxSpeed = Math.random() * 6 + 4;
          p.maxForce = p.maxSpeed * 0.05;
          p.colorBlendRate = Math.random() * 0.027 + 0.003;
          particles.push(p);
        }
        p.startColor = {
          r: p.startColor.r + (p.targetColor.r - p.startColor.r) * p.colorWeight,
          g: p.startColor.g + (p.targetColor.g - p.startColor.g) * p.colorWeight,
          b: p.startColor.b + (p.targetColor.b - p.startColor.b) * p.colorWeight,
        };
        p.targetColor = newColor;
        p.colorWeight = 0;
        p.target.x = x; p.target.y = y;
      }
    }
    for (let i = pi; i < particles.length; i++) particles[i].kill(canvas.width, canvas.height);
  }

  function animate() {
    ctx.fillStyle = `rgba(10,10,10,${opts.backgroundAlpha})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.move(); p.draw(ctx);
      if (p.isKilled && (p.pos.x < -100 || p.pos.x > canvas.width + 100 || p.pos.y < -100 || p.pos.y > canvas.height + 100)) {
        particles.splice(i, 1);
      }
    }
    frameCount++;
    if (frameCount % opts.wordInterval === 0) {
      wordIndex = (wordIndex + 1) % words.length;
      nextWord(words[wordIndex]);
    }
    requestAnimationFrame(animate);
  }

  resize();
  nextWord(words[0]);
  animate();

  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { resize(); nextWord(words[wordIndex]); }, 250);
  });
};
