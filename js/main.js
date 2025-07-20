document.addEventListener('DOMContentLoaded', function() {
      // Функция для генерации уникальных ID элементов
      function generateElementId(el) {
        if (!el.id) {
          const path = [];
          let current = el;
          while (current.parentNode) {
            path.unshift(Array.from(current.parentNode.children).indexOf(current));
            current = current.parentNode;
          }
          return 'el-' + path.join('-');
        }
        return el.id;
      }

      // Обработка тегов
      function processTags() {
        document.querySelectorAll('[data-tags]').forEach(tagContainer => {
          // Сохраняем оригинальное содержимое как placeholder
          if (!tagContainer.dataset.original) {
            tagContainer.dataset.original = tagContainer.textContent.trim();
          }
          
          // Форматируем теги при потере фокуса
          tagContainer.addEventListener('blur', function() {
            let tags = this.textContent.trim();
            if (!tags) {
              tags = this.dataset.original;
            }
            
            // Форматируем теги (удаляем лишние пробелы, добавляем # где нужно)
            tags = tags.split(/\s+/)
              .map(tag => tag.startsWith('#') ? tag : `#${tag}`)
              .join(' ');
              
            this.textContent = tags;
          });
        });
      }

      // Улучшенная система сохранения данных
      function saveResumeData() {
        const resumeData = {};
        const elementsToSave = document.querySelectorAll('[contenteditable="true"]');
        
        elementsToSave.forEach(el => {
          const id = generateElementId(el);
          resumeData[id] = el.innerHTML;
        });
        
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        return resumeData;
      }

      // Улучшенная система загрузки данных
      function loadResumeData() {
        const savedData = localStorage.getItem('resumeData');
        if (savedData) {
          const resumeData = JSON.parse(savedData);
          const elementsToLoad = document.querySelectorAll('[contenteditable="true"]');
          
          elementsToLoad.forEach(el => {
            const id = generateElementId(el);
            if (resumeData[id]) {
              el.innerHTML = resumeData[id];
            }
          });
          return true;
        }
        return false;
      }

      // Инициализация
      processTags();
      loadResumeData();

  // Флаг для отслеживания изменений
  let hasUnsavedChanges = false;

  // Загружаем сохраненные данные при загрузке страницы
  loadResumeData();

  // Отслеживаем изменения в редактируемых полях
  document.querySelectorAll('[contenteditable="true"]').forEach(el => {
    el.addEventListener('input', function() {
      hasUnsavedChanges = true;
    });
  });

  // Добавить рипл эффекты к кнопкам
  const buttons = document.querySelectorAll('.ripple');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Сохранить функционал
  const saveBtn = document.getElementById('saveBtn');
  saveBtn.addEventListener('click', function() {
    if (hasUnsavedChanges) {
      saveResumeData();
      hasUnsavedChanges = false;
      this.textContent = 'Сохранено!';
      setTimeout(() => {
        this.textContent = 'Сохранить изменения';
      }, 2000);
    }
  });

  // Загрузить как PDF
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', function() {
    const element = document.querySelector('.resume-container');
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'resume.pdf',
      image: { 
        type: 'jpeg', 
        quality: 0.98 
      },
      html2canvas: { 
        scale: 2,
        logging: true,
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      },
      pagebreak: { 
        mode: ['avoid-all', 'css', 'legacy'] 
      }
    };
    
    this.textContent = 'Генерация PDF...';
    this.disabled = true;
    
    const clone = element.cloneNode(true);
    document.body.appendChild(clone);
    
    clone.querySelectorAll('[contenteditable="true"]').forEach(el => {
      el.removeAttribute('contenteditable');
    });
    
    const actions = clone.querySelector('.actions');
    if (actions) actions.remove();
    
    html2pdf()
      .set(opt)
      .from(clone)
      .save()
      .then(() => {
        this.textContent = 'Скачать PDF';
        this.disabled = false;
        document.body.removeChild(clone);
      })
      .catch(err => {
        console.error('PDF generation error:', err);
        this.textContent = 'Ошибка! Попробуйте снова';
        this.disabled = false;
        document.body.removeChild(clone);
      });
  });

  // Добавить анимацию ко всем секциям
  const sections = document.querySelectorAll('.resume-section');
  sections.forEach(section => {
    section.addEventListener('click', function() {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
    });
  });

  // Предупреждение при попытке уйти со страницы с несохраненными изменениями
  window.addEventListener('beforeunload', function(e) {
    if (hasUnsavedChanges) {
      e.preventDefault();
      e.returnValue = 'У вас есть несохраненные изменения. Вы уверены, что хотите уйти?';
      return e.returnValue;
    }
  });
});