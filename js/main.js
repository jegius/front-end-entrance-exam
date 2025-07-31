import '../css/style.css';
import html2pdf from 'html2pdf.js';

function saveData() {
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach((input) => {
    localStorage.setItem(input.id, input.value);
  });
}

function loadData() {
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach((input) => {
    const savedValue = localStorage.getItem(input.id);
    if (savedValue) {
      input.value = savedValue;
    }
  });
}

function createPdf() {
  saveData();

  const element = document.querySelector('.content');
  const button = document.getElementById('downloadCV');

  button.style.display = 'none';

  const opt = {
    margin: 1,
    filename: 'CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  html2pdf()
    .from(element)
    .set(opt)
    .save()
    .then(() => {
      button.style.display = 'block';
    });
}

document.getElementById('downloadCV').addEventListener('click', createPdf);

window.addEventListener('load', loadData);

document.addEventListener('DOMContentLoaded', () => {
  const editableElements = document.querySelectorAll(
    '.header-info-greeting, .header-info-name, .header-info-role, ' +
      '.header-languages-title, .header-languages-name,' +
      '.experience-position, .experience-place, .experience-featuredPoints-point, .experience-title,' +
      '.experience-item-time, .tools-title, .tools-item-title-text, ' +
      '.education-title, .education-item-year, .education-item-title, .education-tags li, .education-item-footer,' +
      '.interests-title, .interests-tag, .contacts-text, .contacts-title, .contacts-text'
  );

  let currentEditableElement = null;

  function makeEditable(element) {
    element.setAttribute('contenteditable', true);
    element.classList.add('editable');
    currentEditableElement = element;
  }

  function saveChanges(element) {
    element.setAttribute('contenteditable', false);
    element.classList.remove('editable');
    element.classList.add('saved');
    currentEditableElement = null;
    localStorage.setItem(element.dataset.id, element.innerHTML);
    setTimeout(() => {
      element.classList.remove('saved');
    }, 500);
  }

  function cancelEditing(element) {
    element.setAttribute('contenteditable', false);
    element.classList.remove('editable');
    currentEditableElement = null;
  }

  editableElements.forEach((element, index) => {
    element.dataset.id = `editableElement-${index}`;

    const savedContent = localStorage.getItem(element.dataset.id);
    if (savedContent) {
      element.innerHTML = savedContent;
    }

    element.addEventListener('dblclick', () => {
      makeEditable(element);
      element.focus();
    });

    element.addEventListener('blur', () => {
      saveChanges(element);
    });

    element.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        saveChanges(element);
        element.blur();
      } else if (event.key === 'Escape') {
        cancelEditing(element);
        element.blur();
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (currentEditableElement && !currentEditableElement.contains(event.target)) {
      cancelEditing(currentEditableElement);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const rippleElements = document.querySelectorAll(
    '.header-photo, .header-info, .header-languages, ' +
      '.experience, .tools, .education, .interests, .contacts'
  );

  rippleElements.forEach((element) => {
    element.classList.add('ripple');

    element.addEventListener('click', (event) => {
      const rect = element.getBoundingClientRect();
      const rippleElement = document.createElement('div');
      const size = Math.max(rect.width, rect.height);
      const left = event.clientX - rect.left - size / 2;
      const top = event.clientY - rect.top - size / 2;

      rippleElement.style.width = `${size}px`;
      rippleElement.style.height = `${size}px`;
      rippleElement.style.left = `${left}px`;
      rippleElement.style.top = `${top}px`;
      rippleElement.classList.add('ripple-effect');

      element.appendChild(rippleElement);

      rippleElement.addEventListener('animationend', () => {
        rippleElement.remove();
      });
    });
  });
});
