import turnOnRippleAnimation from './scripts/ripple-animation.js';
import { saveTextContent, loadTextContent } from './scripts/cv-store.js';
import { saveViaHtml2pdf } from './scripts/save-cv.js';

window.addEventListener('unload', saveTextContent);

document.addEventListener('DOMContentLoaded', loadTextContent);

const saveBtn = document.querySelector('.save-btn');
if (saveBtn) saveBtn.addEventListener('click', saveViaHtml2pdf);

turnOnRippleAnimation();
