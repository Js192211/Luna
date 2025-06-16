// Control de música
const btn = document.getElementById('toggleMusic');
const audio = document.getElementById('bg-music');

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = '⏸ Pausar música';
  } else {
    audio.pause();
    btn.textContent = '▶ Reproducir música';
  }
});

// Efecto parallax con el mouse (solo si existe #fondo)
const fondo = document.getElementById("fondo");
if (fondo) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 10;
    const y = (e.clientY / window.innerHeight) * 10;
    fondo.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  });
}

