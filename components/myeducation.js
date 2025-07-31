import { enableMaterialWave } from "./materialwawes";

export function renderMyEducation(container) {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem("userEducation"));
  } catch {
    saved = null;
  }
  if (!saved || !Array.isArray(saved.studies) || saved.studies.length === 0) {
    saved = {
      studies: [
        {
          mostHeart: true,
          period: "2023",
          position: " UI/UX",
          hashtags:
            "#UX\n#UI\n#research\n#DesignSystem\n#DesignSystem\n#wireframing\n#figma\n#Ux",
          company: "Coursera",
        },
        {
          mostHeart: false,
          period: "2017 - 2022",
          position: "Law",
          hashtags: "#law\n#legalStudies\n#contracts\n#internationalLaws",
          company: "University of Kerala",
        },
        {
          mostHeart: false,
          period: "2017",
          position: "Graphic design",
          hashtags: "#branding\n#branding\n#illustration\n#adobe",
          company: "Coursrea",
        },
      ],
    };
  }

  container.innerHTML = "";

  const headerRow = document.createElement("article");
  headerRow.style.display = "flex";
  headerRow.style.justifyContent = "space-between";
  headerRow.style.alignItems = "center";
  headerRow.style.gap = "12px";
  headerRow.style.alignItems = "center";
  headerRow.style.boxSizing = "border-box";
  headerRow.style.marginBottom = "8px";
  headerRow.style.flexWrap = "nowrap";

  const title = document.createElement("h2");
  title.textContent = "Education";
  title.style.margin = "0";
  title.style.flexShrink = "1";
  title.style.fontSize = "clamp(16px, 2vw, 20px)";
  title.style.whiteSpace = "nowrap";
  title.style.overflow = "hidden";
  title.style.textOverflow = "ellipsis";
  title.style.maxWidth = "calc(100% - 120px)";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Редактировать";
  editBtn.classList.add("wave-button");
  editBtn.style.padding = "6px 12px";
  editBtn.style.borderRadius = "8px";
  editBtn.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
  editBtn.style.color = "#fff";
  editBtn.style.fontSize = "clamp(10px,1.1vw,14px)";
  editBtn.style.flexShrink = "0";
  editBtn.style.whiteSpace = "nowrap";

  headerRow.append(title, editBtn);
  container.appendChild(headerRow);

  const list = document.createElement("article");
  list.style.display = "flex";
  list.style.justifyContent = "center";
  list.style.flexWrap = "wrap";
  list.style.gap = "16px";
  container.appendChild(list);

  let isEditing = false;

  function saveData(studies) {
    localStorage.setItem("userEducation", JSON.stringify({ studies }));
  }

  function renderView(studies) {
    list.innerHTML = "";
    studies.forEach((study) => {
      const studyarticle = document.createElement("article");
      studyarticle.style.borderRadius = "8px";
      studyarticle.style.padding = "12px";
      studyarticle.style.marginBottom = "10px";
      studyarticle.style.backgroundColor = study.mostHeart ? "#28d979" : "#fff";
      studyarticle.style.color = study.mostHeart ? "#fff" : "#000";
      studyarticle.style.position = "relative";

      if (study.mostHeart) {
        const mostHeartBtnwrap = document.createElement("button");
        
        const mostHeartBtn = document.createElement("img");
        mostHeartBtn.src = "../public/heart.svg"
        mostHeartBtn.alt = "Heart";
        mostHeartBtn.style.width = "clamp(16px, 1.4vw, 20px)",
        mostHeartBtnwrap.style.height = "clamp(16px, 1.4vw, 20px)"
        mostHeartBtn.disabled = true;
        mostHeartBtn.style.position = "absolute";
        mostHeartBtn.style.top = "3vh";
        mostHeartBtn.style.right = "10px";
        mostHeartBtn.style.fontSize = "12px";
        mostHeartBtn.style.borderRadius = "6px";
        mostHeartBtn.style.padding = "4px 10px";
        mostHeartBtn.style.backgroundColor = "#28d979",
        mostHeartBtn.style.border = "none";
        studyarticle.appendChild(mostHeartBtn);
      }

      const row = document.createElement("article");
      row.style.display = "flex";
      row.style.gap = "16px";

      const leftCol = document.createElement("article");
      leftCol.style.flex = "0 0 200px";

      const periodSpan = document.createElement("p");
      periodSpan.textContent = study.period;

      const position = document.createElement("p");
      position.textContent = study.position;

      const hashtags = document.createElement("span");
      hashtags.textContent = study.hashtags;
      hashtags.style.color = study.mostHeart ? "#ebf9f2" :"#149063";

      const desc = document.createElement("p");
      desc.textContent = study.company;


      leftCol.append(periodSpan, position, hashtags, desc);


      

      row.append(leftCol);
      studyarticle.appendChild(row);
      list.appendChild(studyarticle);
    });
  }

  function renderEditor(studies) {
    list.innerHTML = "";
    const editorList = document.createElement("article");
    editorList.style.display = "flex";
    editorList.style.flexDirection = "column";
    editorList.style.gap = "12px";

    studies.forEach((study, i) => {
      const studyEditor = document.createElement("article");
      studyEditor.style.border = "1px solid #aaa";
      studyEditor.style.borderRadius = "8px";
      studyEditor.style.padding = "10px";
      studyEditor.style.paddingTop = "4.5vh";
      studyEditor.style.backgroundColor = "#f9f9f9";
      studyEditor.style.position = "relative";

      const mostHeartBtn = document.createElement("button");
      mostHeartBtn.textContent = "♡";
      mostHeartBtn.classList.add("wave-button");
      mostHeartBtn.style.position = "absolute";
      mostHeartBtn.style.top = "10px";
      mostHeartBtn.style.right = "10px";
      mostHeartBtn.style.fontSize = "12px";
      mostHeartBtn.style.borderRadius = "6px";
      mostHeartBtn.style.padding = "4px 10px";
      mostHeartBtn.style.cursor = "pointer";
      mostHeartBtn.style.backgroundColor = study.mostHeart
        ? "rgba(11, 101, 40, 1)"
        : "#ccc";
      mostHeartBtn.style.color = study.mostHeart ? "#fffS" : "#333";

      mostHeartBtn.onclick = () => {
        studies.forEach((j, idx) => (j.mostHeart = idx === i));
        renderEditor(studies);
      };

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Удалить";
      removeBtn.classList.add("wave-button");
      removeBtn.style.marginTop = "10px";
      removeBtn.style.backgroundColor = "#dc3545";
      removeBtn.style.color = "#fff";
      removeBtn.style.padding = "4px 10px";
      removeBtn.style.borderRadius = "6px";
      removeBtn.style.border = "none";
      removeBtn.style.fontSize = "12px";
      removeBtn.style.cursor = "pointer";

      removeBtn.onclick = () => {
        studies.splice(i, 1);
        renderEditor(studies);
      };

      const periodInput = document.createElement("input");
      periodInput.type = "text";
      periodInput.value = study.period;
      periodInput.placeholder = "Период";

      const positionInput = document.createElement("input");
      positionInput.type = "text";
      positionInput.value = study.position;
      positionInput.placeholder = "Должность";

      const hashtagsInput = document.createElement("textarea");
      hashtagsInput.value = study.hashtags;
      hashtagsInput.placeholder = "Теги(Вводить по отдельности. Пример: #ux #ui #frontend #design)";

      const descInput = document.createElement("input");
      descInput.type = "text";
      descInput.value = study.company;
      descInput.placeholder =
        "Компания";

      [periodInput, positionInput, hashtagsInput, descInput].forEach((el) => {
        el.style.width = "100%";
        el.style.marginTop = "6px";
        el.style.padding = "6px 8px";
        el.style.fontSize = "14px";
        el.style.border = "1px solid #ccc";
        el.style.borderRadius = "6px";
        el.style.boxSizing = "border-box";
      });

      descInput.style.minHeight = "60px";

      periodInput.oninput = () => (study.period = periodInput.value);
      positionInput.oninput = () => (study.position = positionInput.value);
      hashtagsInput.oninput = () => (study.hashtags = hashtagsInput.value);
      descInput.oninput = () => (study.company = descInput.value);

      studyEditor.append(
        mostHeartBtn,
        periodInput,
        positionInput,
        hashtagsInput,
        descInput,
        removeBtn
      );
      editorList.appendChild(studyEditor);
    });

    list.appendChild(editorList);

    const btnRow = document.createElement("article");
    btnRow.style.display = "flex";
    btnRow.style.justifyContent = "flex-end";
    btnRow.style.gap = "10px";
    btnRow.style.marginTop = "10px";

    const addBtn = document.createElement("button");
    addBtn.textContent = "+ Добавить";
    addBtn.classList.add("wave-button"); 
    addBtn.style.backgroundColor = "#0d6efd";
    addBtn.style.color = "#fff";
    addBtn.style.padding = "6px 12px";
    addBtn.style.borderRadius = "8px";
    addBtn.onclick = () => {
      studies.push({
        mostHeart: false,
        period: "",
        position: "",
        hashtags: "",
        company: "",
      });
      renderEditor(studies);
    };

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Сохранить";
    saveBtn.classList.add("wave-button");
    saveBtn.style.backgroundColor = "#198754";
    saveBtn.style.color = "#fff";
    saveBtn.style.padding = "6px 12px";
    saveBtn.style.borderRadius = "8px";
    saveBtn.onclick = () => {
      saveBtn.classList.add("wave-active");
      setTimeout(() => {
        saveData(studies);
        isEditing = false;
        editBtn.textContent = "Редактировать";
        renderView(studies);
      }, 400);
    };

    btnRow.append(addBtn, saveBtn);
    list.appendChild(btnRow);

    enableMaterialWave(list);
  }

  editBtn.onclick = () => {
    editBtn.classList.add("wave-active");
    setTimeout(() => {
      isEditing = !isEditing;
      editBtn.textContent = isEditing ? "Отмена" : "Редактировать";
      isEditing ? renderEditor(saved.studies) : renderView(saved.studies);
    }, 400);
  };

  renderView(saved.studies);
  enableMaterialWave(container);
}
