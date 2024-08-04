export function saveViaHtml2pdf() {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper-save-pdf');
  wrapper.appendChild(header.cloneNode(true));
  wrapper.appendChild(main.cloneNode(true));

  // eslint-disable-next-line no-undef
  html2pdf().from(wrapper).save('resume.pdf');
}
