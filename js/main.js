const downloadButton = document.querySelector('.download-button');
const resumeElements = document.querySelectorAll('[contenteditable="true"]');

// Сохранение данных в localStorage
function saveData() {
    const data = {};
    resumeElements.forEach(element => {
        data[element.className] = element.textContent;
    });
    localStorage.setItem('resumeData', JSON.stringify(data));
}

// Загрузка данных из localStorage
function loadData() {
    const savedData = JSON.parse(localStorage.getItem('resumeData'));
    if (savedData) {
        resumeElements.forEach(element => {
            element.textContent = savedData[element.className];
        });
    }
}

// Создание PDF (в этом примере просто подкладывается PDF)
function downloadPDF() {
    var element = document.getElementById('resume');
    html2pdf(element);
}

// Обработчики событий
resumeElements.forEach(element => {
    element.addEventListener('input', saveData);
});

downloadButton.addEventListener('click', downloadPDF);

// Загрузка данных при загрузке страницы
window.addEventListener('load', loadData);

// Добавьте Material Wave
document.querySelectorAll('.material-wave').forEach(element => {
    element.addEventListener('click', (event) => {
        const circle = document.createElement('span');
        circle.style.width = '0px';
        circle.style.height = '0px';
        circle.style.borderRadius = '50%';
        circle.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        circle.style.position = 'absolute';
        circle.style.opacity = '0';
        circle.style.transition = 'all 0.5s ease';
        circle.style.pointerEvents = 'none';

        const x = event.clientX - element.offsetLeft;
        const y = event.clientY - element.offsetTop;

        circle.style.left = x + 'px';
        circle.style.top = y + 'px';

        element.appendChild(circle);

        setTimeout(() => {
            circle.style.width = '100px';
            circle.style.height = '100px';
            circle.style.opacity = '1';
        }, 10);

        setTimeout(() => {
            circle.style.opacity = '0';
            setTimeout(() => {
                element.removeChild(circle);
            }, 500);
        }, 500);
    });
});