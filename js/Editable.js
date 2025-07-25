import {
  CLICK_ANIMATION_CLASS,
  STORAGE_KEY,
  DEFAULT_DELAY,
} from './constants.js';

export class Editable {
  constructor() {
    this.editableElements = Array.from(
      document.querySelectorAll('[contenteditable][data-key]')
    );
  }

  loadSavedContent() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return;
    }

    let data;
    try {
      data = JSON.parse(saved);
    } catch {
      return;
    }

    for (const { selector, content } of data) {
      const el = document.querySelector(`[data-key=${selector}]`);
      if (el) {
        el.innerHTML = content;
      }
    }
  }

  saveContent() {
    const data = this.editableElements.map((element) => {
      return {
        selector: element.dataset.key,
        content: element ? element.textContent.trim() : '',
      };
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  initEditableElements() {
    this.editableElements.forEach((elem) => {
      if (!elem) {
        return;
      }

      elem.contentEditable = 'true';
      elem.spellcheck = false;

      elem.addEventListener('blur', () => {
        this.saveContent();
      });

      elem.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
          e.preventDefault();
          e.stopPropagation();
          this.saveContent();
        }
      });

      elem.addEventListener('click', (e) => {
        this.applyClickAnimation(e, e.currentTarget);
      });
    });
  }

  applyClickAnimation(event, element) {
    if (!element) {
      return;
    }

    element.classList.add(CLICK_ANIMATION_CLASS);

    setTimeout(() => {
      element.classList.remove(CLICK_ANIMATION_CLASS);
    }, DEFAULT_DELAY);

    const wave = document.createElement('span');
    wave.className = 'material-wave';

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    wave.style.top = `${y}px`;
    wave.style.left = `${x}px`;

    element.appendChild(wave);

    setTimeout(() => {
      wave.remove();
    }, DEFAULT_DELAY);
  }
}
