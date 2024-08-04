const KEY_CV = 'resume';

export function saveTextContent() {
  const elements = document.querySelectorAll('[data-save-key]');
  const resume = {};
  elements.forEach((element) => {
    if (element.localName === 'input') {
      resume[element.dataset.saveKey] = element.value.trim();
    } else {
      resume[element.dataset.saveKey] = element.textContent.trim();
    }
  });

  localStorage.setItem(KEY_CV, JSON.stringify(resume));
}

export function loadTextContent() {
  const data = localStorage.getItem(KEY_CV);
  if (!data) return;

  let resume;
  try {
    resume = JSON.parse(data);
  } catch (error) {
    console.error('Error while parsing data:', error);
    return;
  }

  for (const key in resume) {
    if (Object.prototype.hasOwnProperty.call(resume, key)) {
      const element = document.querySelector(`[data-save-key="${key}"]`);
      if (!element) return;
      if (element.localName === 'input') {
        element.value = resume[key];
      } else {
        element.textContent = resume[key];
      }
    }
  }
}
