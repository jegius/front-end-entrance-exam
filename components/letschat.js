export function renderLetsChat(container) {
  const mainWrapper = document.createElement("div");
  mainWrapper.style.display = "flex";
  mainWrapper.style.flexDirection = "column";
  mainWrapper.style.justifyContent = "space-between";
  mainWrapper.style.gap = "20px";
  mainWrapper.style.padding = "20px";
  container.appendChild(mainWrapper);

  
  const header = document.createElement("h2");
  header.textContent = "Let's Chat, I'm ready to work on exciting projects.";
  header.style.cssText = `
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: sharp(14px, 1.2vw, 18px);
    line-height: 150%;
    color: #fff;
  `;
  mainWrapper.appendChild(header);

  
  const emailWrapper = document.createElement("div");
  emailWrapper.style.display = "flex";
  emailWrapper.style.flexDirection = "column";
  emailWrapper.style.gap = "10px";
  mainWrapper.appendChild(emailWrapper);

  
  let email = localStorage.getItem('userEmail') || "srkarthik.designscape@gmail.com";

  
  const emailSpan = document.createElement("span");
  emailSpan.textContent = email;
  emailSpan.style.cssText = `
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: sharp(10px, 1.2vw, 14px);
    line-height: 150%;
    color: #ddd;
  `;
  emailWrapper.appendChild(emailSpan);

  
  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.style.display = "flex";
  buttonsWrapper.style.justifyContent = "space-between";
  buttonsWrapper.style.gap = "10px"; 
  emailWrapper.appendChild(buttonsWrapper);


  const editButton = document.createElement("button");
  editButton.textContent = "Изменить почту";
  editButton.classList.add('wave-button');  
  editButton.style.padding = "6px 12px";
  editButton.style.backgroundColor = "#28a745";
  editButton.style.color = "#fff";
  editButton.style.border = "none";
  editButton.style.borderRadius = "8px";
  editButton.style.fontSize = "sharp(10px, 1.2vw, 14px)";
  editButton.style.cursor = "pointer";
  buttonsWrapper.appendChild(editButton);

 
  const copyButton = document.createElement("button");
  copyButton.textContent = "Копировать почту";
  copyButton.classList.add('wave-button');  
  copyButton.style.padding = "6px 12px";
  copyButton.style.backgroundColor = "#007bff";
  copyButton.style.color = "#fff";
  copyButton.style.border = "none";
  copyButton.style.borderRadius = "8px";
  copyButton.style.fontSize = "sharp(10px, 1.2vw, 14px)";
  copyButton.style.cursor = "pointer";
  buttonsWrapper.appendChild(copyButton);


  editButton.onclick = () => {
    const newEmail = prompt("Введите новую почту:", emailSpan.textContent);
    if (newEmail) {
      emailSpan.textContent = newEmail;
      localStorage.setItem('userEmail', newEmail); 
    }
  };

 
  copyButton.onclick = () => {
    const textToCopy = emailSpan.textContent;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Почта скопирована!");
      })
      .catch(err => {
        console.error("Не удалось скопировать почту: ", err);
      });
  };
}
