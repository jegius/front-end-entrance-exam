import { enableMaterialWave } from "./materialwawes";

export function myName() {
  const container = document.createElement("div");
  container.style.cssText = `
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
    padding: clamp(16px, 3vw, 32px);
    gap: clamp(8px, 1.5vw, 16px);
    overflow: hidden;
  `;

  const p = document.createElement("p");
  p.textContent = localStorage.getItem("userMainText") || "Hello 👋🏻 I’m";
  p.contentEditable = false;
  p.style.cssText = `
    margin: 0;
    outline: none;
    overflow-wrap: break-word;
    white-space: normal;
    user-select: none;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: clamp(10px, 1.2vw, 14px);
    line-height: 150%;
    color: #000;
  `;

  const article = document.createElement("article");
  article.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: clamp(4px, 0.8vw, 8px);
    margin-top: auto;
  `;

  const h3 = document.createElement("h3");
  h3.textContent = localStorage.getItem("userName") || "Karthik SR";
  h3.contentEditable = false;
  h3.style.cssText = `
    margin: 0;
    outline: none;
    user-select: none;
    word-break: break-word;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: clamp(14px, 1.8vw, 20px);
    line-height: 104%;
    color: #000;
  `;

  const span = document.createElement("span");
  span.textContent = localStorage.getItem("userSpanishText") || "UX/UI Designer";
  span.contentEditable = false;
  span.style.cssText = `
    margin: 0;
    outline: none;
    user-select: none;
    word-break: break-word;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: clamp(12px, 1.5vw, 16px);
    line-height: 150%;
    color: #5c5c5c;
  `;

  article.appendChild(h3);
  article.appendChild(span);
  container.appendChild(p);
  container.appendChild(article);

  const btnContainer = document.createElement("div");
  btnContainer.style.cssText = `
    position: absolute;
    bottom: clamp(10px, 1.5vw, 20px);
    right: clamp(10px, 1.5vw, 20px);
    display: flex;
    gap: clamp(6px, 1vw, 12px);
  `;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Изменить текст";
  editBtn.classList.add("wave-button");
  editBtn.style.cssText = `
    padding: clamp(4px, 0.8vw, 8px) clamp(8px, 1.6vw, 12px);
    border: none;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.25);
    color: white;
    font-size: clamp(10px, 1.2vw, 14px);
    cursor: pointer;
    transition: background-color 0.3s;
    display: inline-block;
  `;
  editBtn.addEventListener("mouseover", () => editBtn.style.backgroundColor = "rgba(0,0,0,0.5)");
  editBtn.addEventListener("mouseout", () => editBtn.style.backgroundColor = "rgba(0,0,0,0.25)");

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Сохранить";
  saveBtn.classList.add("wave-button");
  saveBtn.style.cssText = `
    padding: clamp(4px, 0.8vw, 8px) clamp(8px, 1.6vw, 12px);
    border: none;
    border-radius: 8px;
    background-color: #28d979;
    color: white;
    font-size: clamp(10px, 1.2vw, 14px);
    cursor: pointer;
    transition: background-color 0.3s;
    display: none;
  `;
  saveBtn.addEventListener("mouseover", () => saveBtn.style.backgroundColor = "rgba(0,128,0,1)");
  saveBtn.addEventListener("mouseout", () => saveBtn.style.backgroundColor = "rgba(0,128,0,0.7)");

  editBtn.addEventListener("click", () => {
    editBtn.classList.add("wave-active");
    setTimeout(() => {
      p.contentEditable = "true";
      h3.contentEditable = "true";
      span.contentEditable = "true";
      p.style.userSelect = "text";
      h3.style.userSelect = "text";
      span.style.userSelect = "text";
      p.focus();
      editBtn.style.display = "none";
      saveBtn.style.display = "inline-block";
    }, 400);
  });

  saveBtn.addEventListener("click", () => {
    saveBtn.classList.add("wave-active");
    setTimeout(() => {
      p.contentEditable = "false";
      h3.contentEditable = "false";
      span.contentEditable = "false";
      p.style.userSelect = "none";
      h3.style.userSelect = "none";
      span.style.userSelect = "none";
      localStorage.setItem("userMainText", p.textContent);
      localStorage.setItem("userName", h3.textContent);
      localStorage.setItem("userSpanishText", span.textContent);
      saveBtn.style.display = "none";
      editBtn.style.display = "inline-block";
    }, 400);
  });

  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(saveBtn);
  container.appendChild(btnContainer);

  enableMaterialWave();
  return container;
}
