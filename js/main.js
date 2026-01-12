const downloadBtn = document.querySelector('.downloadPdfBtn');

const mainContent = document.querySelector('main.bentoFlexbox');

downloadBtn.addEventListener('click', async function() {

  var opt = {
      margin: 1,
      filename: 'Резюме.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 2,
      },
      jsPDF: { 
        unit: 'in', 
        format: 'letter', 
        orientation: 'portrait'
      }
    };

  try {
      downloadBtn.disabled = true;
      downloadBtn.textContent = 'Generating PDF...';
      
      await html2pdf()
      .from(mainContent)
      .set(opt)
      .save()
      
    } catch (error) {
      console.error('PDF generation error:', error);
    } finally {
      downloadBtn.disabled = false;
      downloadBtn.textContent = 'Download';
    }
});


document.addEventListener("DOMContentLoaded", () => {
  const editablesElements = document.querySelectorAll("[contenteditable=true]");

  editablesElements.forEach(el => {
    const minHeight = parseFloat(getComputedStyle(el).minHeight);
    const maxHeight = parseFloat(getComputedStyle(el).maxHeight);

    el.addEventListener("input", () => {
      if (el.scrollHeight > maxHeight ) {
        el.textContent = el.textContent.slice(0, -1);
        el.classList.add("truncated");
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
      else if (el.clientHeight < minHeight) {
        el.textContent += " ";
      }
    });
});
});

// Сохранение изменений
// Генерируем для каждого элемента уникальный id
document.querySelectorAll('[contenteditable]').forEach((el, index) => {
  let key = `editable-${index}`;
  const savedText = localStorage.getItem(key);
  if (savedText !== null) {
    el.innerHTML = savedText;
  }

  el.addEventListener('input', () => {
    localStorage.setItem(key, el.innerHTML);
  });
});