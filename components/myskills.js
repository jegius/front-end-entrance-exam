import { enableMaterialWave } from "./materialwawes";

export function renderMySkills(container) {
  let interests = JSON.parse(localStorage.getItem('interests')) || [
    "Programming",
    "Gaming",
    "Reading",
    "Music",
    "Traveling"
  ];

  container.innerHTML = "";


  const mainWrapper = document.createElement("article");
  mainWrapper.style.display = "flex";
  mainWrapper.style.flexDirection = "column";
  mainWrapper.style.gap = "8px"; 
  container.appendChild(mainWrapper);

  const title = document.createElement("h2");
  title.textContent = "Interests";
  title.style.cssText = `
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: sharp(14px, 1.2vw, 20px);
    line-height: 150%;
    color: #000;
  `
  mainWrapper.appendChild(title);

  const interestsWrapper = document.createElement("article");
  interestsWrapper.style.display = "flex";
  interestsWrapper.style.flexWrap = "wrap";
  interestsWrapper.style.gap = "12px"; 
  mainWrapper.appendChild(interestsWrapper);

  
  let isRemoving = false;

  function renderButtons() {
    interestsWrapper.innerHTML = ""; 

    interests.forEach((interest, index) => {
      const button = document.createElement("button");
      button.textContent = interest;
      button.classList.add('wave-button'); 
     button.style.cssText = `
        font-family: "Poppins", sans-serif;
        border-radius: 40px;
        padding: 4px 10px;
        background: #fff;
        font-weight: 400;
        font-size: sharp(10px, 1.2vw, 14px);
        line-height: 150%;
        text-align: center;
        color: #000;
     `
      button.style.cursor = "pointer";

      if (isRemoving) {
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.classList.add('wave-button'); 
        removeBtn.style.marginLeft = "8px";
        removeBtn.style.padding = "6px 10px";
        removeBtn.style.backgroundColor = "#dc3545";
        removeBtn.style.color = "#fff";
        removeBtn.style.border = "none";
        removeBtn.style.borderRadius = "50%";
        removeBtn.style.fontSize = "12px";
        removeBtn.style.cursor = "pointer";
        removeBtn.onclick = (e) => {
          e.stopPropagation();
          interests.splice(index, 1); 
          localStorage.setItem('interests', JSON.stringify(interests)); 
          renderButtons(); 
        };
        button.appendChild(removeBtn);
      }

      interestsWrapper.appendChild(button);
    });
  }

 
  const addButton = document.createElement("button");
  addButton.textContent = "Добавить интерес";
  addButton.classList.add('wave-button'); 
  addButton.style.padding = "8px 16px";
  addButton.style.backgroundColor = "#28a745";
  addButton.style.color = "#fff";
  addButton.style.border = "none";
  addButton.style.borderRadius = "8px";
  addButton.style.fontSize = "14px";
  addButton.style.cursor = "pointer";
  addButton.style.marginTop = "12px";
  addButton.onclick = () => {
    const newInterest = prompt("Введите новый интерес:");
    if (newInterest) {
      interests.push(newInterest); 
      localStorage.setItem('interests', JSON.stringify(interests)); 
      renderButtons(); 
    }
  };

  const controlWrapper = document.createElement("article");
  controlWrapper.style.display = "flex";
  controlWrapper.style.gap = "8px"; 
  controlWrapper.style.marginTop = "12px";
  mainWrapper.appendChild(controlWrapper);

  const removeModeButton = document.createElement("button");
  removeModeButton.textContent = "Убрать интерес";
  removeModeButton.classList.add('wave-button'); 
  removeModeButton.style.padding = "8px 16px";
  removeModeButton.style.backgroundColor = "#ffa007ff";
  removeModeButton.style.color = "#fff";
  removeModeButton.style.border = "none";
  removeModeButton.style.borderRadius = "8px";
  removeModeButton.style.fontSize = "14px";
  removeModeButton.style.cursor = "pointer";
  removeModeButton.style.marginTop = "12px";
  removeModeButton.onclick = () => {
    isRemoving = !isRemoving;
    removeModeButton.textContent = isRemoving ? "Отменить" : "Убрать интерес";
    renderButtons(); 
  };

  controlWrapper.appendChild(addButton);

  controlWrapper.appendChild(removeModeButton);
  

  renderButtons();

  enableMaterialWave();
}
