function enableTextEditing() {
    const textElements = document.querySelectorAll("p, b, h2, h3, li");

    textElements.forEach(el => {
        el.contentEditable = true;
        el.style.border = '2px dashed red';
    });
}

function muteElement(el) {
    el.contentEditable = false;
    el.style.border = 'none';
    updateElement(el);
}

function updateElement(el) {
    if (el.tagName.match(/^H[1-6]$/i)) el.textContent = el.textContent.trim();
    if (el.classList.contains('percent')) {
        let w = Number(el.textContent);
        el.style.color = "black";
        if (!isNaN(w) && 0 <= w && w <= 100) el.nextElementSibling.nextElementSibling.style.width = `${w}%`;
        else el.style.color = "red";
    }
}

function update() {
    document.querySelectorAll("p, b, h2, h3, li").forEach(updateElement);
}

function disableTextEditing() {
    document.querySelectorAll('[contenteditable="true"]').forEach(muteElement);
}

let isEditable = false;

document.getElementById("edit").addEventListener('click', () => {
    if (isEditable) disableTextEditing();
    else enableTextEditing();
    isEditable = !isEditable;
})

document.getElementById("save").addEventListener('click', () => {
    window.print();
});

document.getElementById("clear").addEventListener('click', () => {
    localStorage.setItem("savedPageData", null);
    window.removeEventListener('beforeunload', savePageData);
    location.reload();
    window.addEventListener('beforeunload', savePageData);
})

function savePageData() {
    const allTextElements = document.querySelectorAll("p, b, h2, h3, li");
    const dataToSave = [];

    allTextElements.forEach((el, index) => {
        dataToSave.push(el.value || el.textContent);
    });

    localStorage.setItem('savedPageData', JSON.stringify(dataToSave));
}

function restorePageData() {
    const savedData = localStorage.getItem('savedPageData');
    if (!savedData) return;
    const parsedData = JSON.parse(savedData);
    const it = document.querySelectorAll("p, b, h2, h3, li")[Symbol.iterator]();
    for (let s of parsedData) {
        let result = it.next();
        if (result.done) break;
        result.value.textContent = s;
    }
}

window.addEventListener('DOMContentLoaded', restorePageData);
window.addEventListener('DOMContentLoaded', update);

window.addEventListener('beforeunload', savePageData);