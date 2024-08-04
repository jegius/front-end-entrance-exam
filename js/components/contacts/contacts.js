export function initContacts(data) {
  const contacts = document.querySelector(".contact");
  contacts.innerHTML = `<h2 class="contact__text" contenteditable data-text-item="contacts.message.text">${data.message.text}</h2>
<a class="contact__link" contenteditable data-text-item="contacts.mail.text" href="mailto:${data.mail.text}">${data.mail.text}</a
>`;
}
