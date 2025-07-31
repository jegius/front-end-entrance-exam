import { enableMaterialWave } from "./materialwawes.js";

export function myPhoto(defaultImgSrc) {
  const container = document.createElement("div");
  container.style.cssText = `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 90vw;
    max-height: 80vh;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0 auto;
    padding: 10px;
  `;

  const savedPhoto = localStorage.getItem("userPhoto");
  const img = document.createElement("img");
  img.src = savedPhoto || defaultImgSrc;
  img.alt = "User photo";
  img.style.cssText = `
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
    transition: width 0.3s ease, height 0.3s ease;
  `;
  container.appendChild(img);

  img.onload = () => {
    const naturalW = img.naturalWidth;
    const naturalH = img.naturalHeight;

    const MIN_WIDTH = 120;
    const MIN_HEIGHT = 120;

    if (naturalW < MIN_WIDTH || naturalH < MIN_HEIGHT) {
      if (naturalW / naturalH > MIN_WIDTH / MIN_HEIGHT) {
        img.style.width = MIN_WIDTH + "px";
        img.style.height = "auto";
      } else {
        img.style.height = MIN_HEIGHT + "px";
        img.style.width = "auto";
      }
    } else {
      img.style.width = "auto";
      img.style.height = "auto";
    }
  };


  const button = document.createElement("button");
  button.textContent = "Изменить фото";
  button.classList.add("no-print", "wave-button");
  button.style.cssText = `
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 6px 12px;
    border: none;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: clamp(10px, 1.2vw, 14px);
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 2;
  `;
  button.addEventListener("mouseover", () => button.style.backgroundColor = "rgba(0,0,0,0.5)");
  button.addEventListener("mouseout", () => button.style.backgroundColor = "rgba(0,0,0,0.25)");


  const styleNoPrint = document.createElement("style");
  styleNoPrint.textContent = `
    @media print { .no-print { display: none !important; } }
  `;
  if (!document.head.querySelector(".no-print-style")) {
    styleNoPrint.classList.add("no-print-style");
    document.head.appendChild(styleNoPrint);
  }

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      img.src = ev.target.result;
      localStorage.setItem("userPhoto", img.src);
    };
    reader.readAsDataURL(file);
  });

  button.addEventListener("click", () => {
    button.classList.add("wave-active");
    setTimeout(() => {
      fileInput.click();
    }, 400);
  });

  container.appendChild(button);
  container.appendChild(fileInput);

  window.addEventListener("resize", () => {
    container.style.maxWidth = window.innerWidth * 0.9 + "px";
    container.style.maxHeight = window.innerHeight * 0.8 + "px";
  });

  enableMaterialWave();

  return container;
}
