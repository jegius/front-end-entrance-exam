import { jsPDF } from "jspdf";

export async function saveToPdf() {
  var element = document.querySelector(".page");

  const rect = element.getBoundingClientRect();

  const portrait = rect.width < rect.height;
  const doc = new jsPDF(portrait ? "p" : "l", "px", [rect.height, rect.width], true);
  doc.addFont("/Poppins-Regular.ttf", "Poppins", "normal");
  doc.setFont("Poppins");

  await doc.html(element, {
    callback: function (doc) {
      doc.deletePage(1);
      doc.save("cv.pdf");
    },
    format: [rect.height, rect.width],
    hotfixes: ["px_scaling"],
    autoPaging: false,
    image: "jpeg",
    marginsType: 0,
  });
}
