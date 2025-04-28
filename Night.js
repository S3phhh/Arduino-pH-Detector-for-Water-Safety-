// Dark mode toggle
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Code Modal Logic
const modal = document.getElementById('codeModal');
const btn   = document.getElementById('openCodeModal');
const span  = modal.querySelector('.close');

btn.addEventListener('click', () => modal.style.display = 'block');
span.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
