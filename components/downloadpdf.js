export function setupDownloadPdf(buttonId) {
  const button = document.getElementById(buttonId);
  if (!button) return;

  button.addEventListener("click", async () => {
    try {
      const content = document.getElementById("app").cloneNode(true);
      content.style.width = "210mm";
      content.style.height = "auto";
      content.style.padding = "15mm";
      content.style.boxSizing = "border-box";
      content.style.visibility = "hidden";
      content.style.position = "absolute";
      content.style.left = "-9999px";
      content.id = "pdf-export-content";
      document.body.appendChild(content);

      const canvas = await htmlToCanvas(content);

      const pdf = createPdfFromCanvas(canvas);

      const fileName = `resume_${new Date().toISOString().slice(0, 10)}.pdf`;
      pdf.save(fileName);

      document.body.removeChild(content);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Ошибка при создании PDF. Попробуйте снова.");
    }
  });

  function htmlToCanvas(element) {
    return new Promise((resolve, reject) => {
      html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
        onclone: (clonedDoc) => {
          const clone = clonedDoc.getElementById("pdf-export-content");
          clone.style.visibility = "visible";
          clone.style.position = "static";
          clone.style.width = "210mm";
          clone.style.padding = "15mm";
          clone.style.boxSizing = "border-box";
          clone.style.backgroundColor = "#fff";

          const style = clonedDoc.createElement("style");
          style.textContent = `
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
            }
          `;
          clonedDoc.head.appendChild(style);
        },
      })
        .then(resolve)
        .catch(reject);
    });
  }

  function createPdfFromCanvas(canvas) {
    const imgData = canvas.toDataURL("image/jpeg", 0.95);
    const pdf = new jspdf.jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

 
    const scale = pageWidth / imgWidth;
    const imgHeightMm = imgHeight * scale;

    let position = 0;

    while (position < imgHeightMm) {
      if (position > 0) {
        pdf.addPage();
      }
      pdf.addImage(
        imgData,
        "JPEG",
        0,
        -position,
        pageWidth,
        imgHeightMm
      );
      position += pageHeight;
    }

    return pdf;
  }
}

