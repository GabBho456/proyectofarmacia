const qs  = s => document.querySelector(s);
const qsa = s => document.querySelectorAll(s);
const paymentButtons = qs('#paymentButtons');
const typeBtns  = qsa('.type-btn');
const sections  = qsa('.section');
const metodoInp = document.createElement("input");
metodoInp.type = "hidden";
metodoInp.name = "metodo_pago";
qs("#pagoForm").appendChild(metodoInp);
let current = 'card';

function setActive(type){
  current = type;
  metodoInp.value = type;
  typeBtns.forEach(b=> b.classList.toggle('active', b.dataset.type===type));
  sections.forEach(s=>{
    const active = s.id === type;
    s.classList.toggle('active', active);
    s.querySelectorAll('input, select, textarea').forEach(el=>{
      el.disabled = !active;
    });
  });
}
paymentButtons.addEventListener('click', e=>{
  const btn = e.target.closest('.type-btn');
  if(!btn) return;
  setActive(btn.dataset.type);
});
setActive('card');

function mostrarAlerta(texto, esExito) {
  const alerta = document.getElementById('alerta');
  alerta.textContent = texto;
  alerta.classList.toggle('error', !esExito);
  alerta.classList.add('mostrar');
  setTimeout(() => { alerta.classList.remove('mostrar'); }, 3000);
}

const form = qs('#pagoForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch('guardar_pago.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(text => {
    console.log("Respuesta cruda:", text);
    try {
      const data = JSON.parse(text);
      mostrarAlerta(data.mensaje, data.exito);
      if (data.exito) form.reset();
    } catch (err) {
      mostrarAlerta("Respuesta inválida del servidor", false);
    }
  })
  .catch(err => {
    mostrarAlerta("Error: " + err.message, false);
  });
});