'use strict';

import { Editable } from './Editable.js';

document.addEventListener('DOMContentLoaded', () => {
  const editable = new Editable();

  editable.loadSavedContent();
  editable.initEditableElements();
});
