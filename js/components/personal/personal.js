export function initPersonal(data) {
  const personal = document.querySelector(".header__person");
  personal.innerHTML = `
  <p class="person__greet">Hello 👋 I’m</p>
  <h1 class="person__name" contenteditable data-text-item="personal.data.name">${data.name}</h1>
  <p class="person__position" contenteditable data-text-item="personal.data.post">${data.post}</p>`;
}
