const form = document.querySelector('#enquiry-form');
const service = document.querySelector('#service');
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => { service.value = link.dataset.service; });
});
const dateField = document.querySelector('#date');
const today = new Date();
dateField.min = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const name = fields.get('name').trim();
  if (!name) { document.querySelector('#name').focus(); return; }
  const date = fields.get('date');
  const message = fields.get('message').trim();
  const text = `Hi Khaista! I’m ${name}. I’d like to enquire about ${fields.get('service').toLowerCase()}.${date ? `\nPreferred date: ${date}` : ''}${message ? `\n${message}` : ''}\nPlease could you let me know availability and pricing?`;
  window.location.assign(`https://wa.me/447424315771?text=${encodeURIComponent(text)}`);
});
