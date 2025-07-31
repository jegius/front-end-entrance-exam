import html2pdf from 'html2pdf.js';


export function exportToPdf(elementToExport, buttonToHide) {
  const options = {
    margin: 0,
    filename: 'Pavel_Sh_Resume.pdf',
    image: {type: 'jpeg', quality: 0.98},
    html2canvas: {
      scale: 4,
      useCORS: true,
      width: 600,
      height: 830,
    },
    jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'}
  };

  if (buttonToHide) {
    buttonToHide.style.display = 'none';
  }

  html2pdf().from(elementToExport).set(options).save()
    .then(() => {
      if (buttonToHide) {
        buttonToHide.style.display = 'block';
      }
    })
    .catch(err => {
      console.error("Ошибка при создании PDF:", err);
      if (buttonToHide) {
        buttonToHide.style.display = 'block';
      }
    })
    .finally(() => {
      if (buttonToHide) {
        buttonToHide.style.display = 'block';
      }
    });
}
