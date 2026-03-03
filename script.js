// Minimal JS: mobile nav + demo form handling
const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
if (btn && nav){
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = JSON.stringify(data, null, 2);
    navigator.clipboard?.writeText(payload);
    alert('Formulario enviado (demo).\n\nCopiamos el mensaje al portapapeles.');
    form.reset();
  });
}


// Note: el formulario se envía por Netlify Forms (sin backend).
// Si querés mostrar confirmación, usá la página /gracias/.

