// Redirect to main page after 5 seconds
setTimeout(() => {
  window.location.href = 'main.html';
}, 5000);

// Generate flower animations
function createFlower(containerId) {
  const container = document.getElementById(containerId);
  const flowerEmojis = ['🌸', '💐', '🌷', '🌺', '🌼', '🌹'];
  setInterval(() => {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = 3 + Math.random() * 3 + 's';
    container.appendChild(flower);
    setTimeout(() => flower.remove(), 6000);
  }, 300);
}

createFlower('loading-flowers');
