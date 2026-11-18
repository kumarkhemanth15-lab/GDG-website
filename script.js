const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('joinForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const interest = document.getElementById('interest').value;
  document.getElementById('message').textContent = `Thanks, ${name}! Your interest in ${interest} has been noted in this demo. A backend is needed to store registrations.`;
  e.target.reset();
});
