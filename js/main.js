/*jshint esversion: 8, browser: true */
/*globals html2canvas, jspdf */

// Переменные для управления редактированием
let currentEditingElement = null;

// Получение модального окна и элементов
const modal = document.getElementById('editModal');
const closeModal = document.querySelector('.close-modal');
const saveBtn = document.getElementById('saveChanges');
const editInput = document.getElementById('editInput');

// Функция открытия модального окна
function openEditModal(element) {
    "use strict";
    currentEditingElement = element;
    editInput.value = element.textContent;
    modal.style.display = 'flex';
}

// Функция сохранения изменений
function saveChanges() {
    "use strict";
    if (currentEditingElement) {
        const newText = editInput.value.trim();
        if (newText) {
            // Сохраняем изменения в элементе
            currentEditingElement.textContent = newText;

            // Анимация обновления
            currentEditingElement.classList.add('text-updated');
            setTimeout(() => {
                currentEditingElement.classList.remove('text-updated');
            }, 1000);
        }
    }
    modal.style.display = 'none';
}

// Закрытие модального окна
closeModal.addEventListener('click', () => {
    "use strict";
    modal.style.display = 'none';
});

saveBtn.addEventListener('click', saveChanges);

// Закрытие модального окна при клике вне его
window.addEventListener('click', (e) => {
    "use strict";
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработка нажатия Enter в текстовом поле
editInput.addEventListener('keydown', (e) => {
    "use strict";
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        saveChanges();
    }
});

// Назначение обработчиков для редактируемых элементов
document.querySelectorAll('.editable').forEach((element) => {
    "use strict";
    element.addEventListener('dblclick', () => {
        openEditModal(element);
    });
});

// Функция скачивания PDF через html2canvas + jsPDF
document.getElementById('downloadBtn').addEventListener('click', () => {
    "use strict";
    const cv = document.getElementById('CV_V1');
    const downloadBtn = document.getElementById('downloadBtn');

    // Временно убираем opacity: 0 у #bentoFlexbox > *
    const bentoChildren = document.querySelectorAll('#bentoFlexbox > *');
    const prevOpacities = [];

    bentoChildren.forEach((el) => {
        prevOpacities.push(el.style.opacity);
        el.style.opacity = '1';
    });

    downloadBtn.disabled = true;
    downloadBtn.textContent = 'Генерация PDF...';

    html2canvas(cv, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#fff'
    }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // Используем jsPDF из глобального объекта
        const jsPDF = window.jspdf.jsPDF;
        const pdf = new jsPDF({
            orientation: imgWidth > imgHeight ? 'landscape' : 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
        const pdfWidth = imgWidth * ratio;
        const pdfHeight = imgHeight * ratio;
        const x = (pageWidth - pdfWidth) / 2;
        const y = (pageHeight - pdfHeight) / 2;

        pdf.addImage(imgData, 'PNG', x, y, pdfWidth, pdfHeight);
        pdf.save('cv.pdf');

        // Возвращаем opacity обратно
        bentoChildren.forEach((el, i) => {
            el.style.opacity = prevOpacities[i] || '';
        });

        downloadBtn.disabled = false;
        downloadBtn.textContent = 'Скачать PDF';
    }).catch((err) => {
        bentoChildren.forEach((el, i) => {
            el.style.opacity = prevOpacities[i] || '';
        });

        downloadBtn.disabled = false;
        downloadBtn.textContent = 'Скачать PDF';
        alert('Ошибка при генерации PDF. Подробности в консоли.');
        console.error('PDF generation error:', err);
    });
});