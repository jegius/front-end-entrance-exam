import { enableMaterialWave } from "./materialwawes";

export function renderMyLanguages(container) {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem("myLanguages"));
  } catch {
    saved = null;
  }
  if (
    !saved ||
    !Array.isArray(saved.languages) ||
    !Array.isArray(saved.levels)
  ) {
    saved = {
      languages: ["English", "Русский"],
      levels: ["90%", "100%"],
    };
  }

  container.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.style.width = "100%";
  wrapper.style.boxSizing = "border-box";
  wrapper.style.padding = "8px";

  const headerRow = document.createElement("div");
  headerRow.style.display = "flex";
  headerRow.style.justifyContent = "space-between";
  headerRow.style.alignItems = "center";
  headerRow.style.marginBottom = "8px";
  headerRow.style.flexWrap = "nowrap";
  headerRow.style.gap = "12px";

  const title = document.createElement("h2");
  title.textContent = "Languages";
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
  editBtn.style.transition = "background-color 0.3s ease";
  editBtn.style.whiteSpace = "nowrap";

  editBtn.addEventListener("mouseenter", () => {
    editBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  });
  editBtn.addEventListener("mouseleave", () => {
    editBtn.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
  });

  headerRow.append(title, editBtn);

  const list = document.createElement("div");
  list.style.display = "flex";
  list.style.flexDirection = "column";
  list.style.gap = "6px";
  list.style.maxHeight = "130px";
  list.style.overflowY = "auto";
  list.style.paddingRight = "18px"; 
  list.style.boxSizing = "content-box";

  saved.languages.forEach((lang, i) => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.gap = "8px";

    const span = document.createElement("span");
    span.textContent = lang;
    span.style.width = "90px";
    span.style.flexShrink = "0";
    span.style.fontSize = "clamp(12px,1vw,14px)";
    span.style.overflow = "hidden";
    span.style.textOverflow = "ellipsis";
    span.style.whiteSpace = "nowrap";

    const wrap = document.createElement("div");
    wrap.style.flex = "1";
    wrap.style.height = "16px";
    wrap.style.background = "#ddd";
    wrap.style.borderRadius = "6px";
    wrap.style.overflow = "hidden";

    const bar = document.createElement("div");
    bar.style.height = "100%";
    bar.style.width = saved.levels[i] || "0%";
    bar.style.background = "#28d979";
    bar.style.borderRadius = "6px 0 0 6px";

    wrap.appendChild(bar);
    row.append(span, wrap);
    list.appendChild(row);
  });

  const editor = document.createElement("div");
  editor.style.display = "none";
  editor.style.maxHeight = "130px";
  editor.style.overflowY = "auto";
  editor.style.paddingRight = "8px";
  editor.style.boxSizing = "content-box";
  editor.style.paddingBottom = "8px"; 

  wrapper.append(headerRow, list, editor);
  container.appendChild(wrapper);

  editBtn.onclick = () => {
    editBtn.classList.add("wave-active");
    setTimeout(() => {
      list.style.display = "none";
      editBtn.style.visibility = "hidden";
      editBtn.style.pointerEvents = "none";
      setupInlineLanguageEditor(
        editor,
        saved.languages,
        saved.levels,
        (newL, newLv) => {
          localStorage.setItem(
            "myLanguages",
            JSON.stringify({ languages: newL, levels: newLv })
          );
          renderMyLanguages(container);

          const btn = container.querySelector("button.wave-button");
          if (btn) {
            btn.style.visibility = "visible";
            btn.style.pointerEvents = "auto";
          }
        }
      );
      editor.style.display = "block";
    }, 400);
  };

  enableMaterialWave();
}

function setupInlineLanguageEditor(container, languages, levels, onSave) {
  container.innerHTML = "";
  const langs = [...languages];
  const lvl = [...levels];

  const list = document.createElement("div");
  list.style.display = "flex";
  list.style.flexDirection = "column";
  list.style.gap = "10px";
  list.style.marginTop = "10px";

  function renderFields() {
    list.innerHTML = "";
    langs.forEach((l, idx) => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.gap = "6px";
      row.style.alignItems = "center";

      const inputLang = document.createElement("input");
      inputLang.value = l;
      inputLang.placeholder = "Язык";
      inputLang.style.flex = "1 1 auto";
      inputLang.style.minWidth = "60px";
      inputLang.style.padding = "6px 8px";
      inputLang.style.border = "1px solid #ccc";
      inputLang.style.borderRadius = "6px";
      inputLang.style.fontSize = "14px";
      inputLang.style.boxSizing = "border-box";

      const inputLevel = document.createElement("input");
      inputLevel.value = lvl[idx] || "";
      inputLevel.placeholder = "70%";
      inputLevel.style.width = "60px";
      inputLevel.style.minWidth = "50px";
      inputLevel.style.padding = "6px 8px";
      inputLevel.style.border = "1px solid #ccc";
      inputLevel.style.borderRadius = "6px";
      inputLevel.style.fontSize = "14px";
      inputLevel.style.textAlign = "center";
      inputLevel.style.boxSizing = "border-box";

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "×";
      removeBtn.classList.add("wave-button");
      removeBtn.style.backgroundColor = "rgba(220, 53, 69, 0.8)";
      removeBtn.style.color = "white";
      removeBtn.style.padding = "6px 10px";
      removeBtn.style.borderRadius = "50%";
      removeBtn.style.fontWeight = "bold";
      removeBtn.style.lineHeight = "1";
      removeBtn.style.flexShrink = "0";
      removeBtn.style.cursor = "pointer";
      removeBtn.title = "Удалить";

      removeBtn.addEventListener("mouseenter", () => {
        removeBtn.style.backgroundColor = "rgba(220, 53, 69, 1)";
      });
      removeBtn.addEventListener("mouseleave", () => {
        removeBtn.style.backgroundColor = "rgba(220, 53, 69, 0.8)";
      });

      removeBtn.onclick = () => {
        langs.splice(idx, 1);
        lvl.splice(idx, 1);
        renderFields();
      };

      row.append(inputLang, inputLevel, removeBtn);
      list.appendChild(row);
    });
  }

  renderFields();

  const btnsRow = document.createElement("div");
  btnsRow.style.marginTop = "12px";
  btnsRow.style.display = "flex";
  btnsRow.style.gap = "10px";
  btnsRow.style.flexWrap = "nowrap";

  const addBtn = document.createElement("button");
  addBtn.textContent = "+ Добавить";
  addBtn.classList.add("wave-button");
  addBtn.style.backgroundColor = "#0d6efd";
  addBtn.style.color = "#fff";
  addBtn.style.fontSize = "14px";
  addBtn.style.padding = "6px 14px";
  addBtn.style.borderRadius = "8px";
  addBtn.style.flexShrink = "0";
  addBtn.style.whiteSpace = "nowrap";

  addBtn.addEventListener("mouseenter", () => {
    addBtn.style.backgroundColor = "#0b5ed7";
  });
  addBtn.addEventListener("mouseleave", () => {
    addBtn.style.backgroundColor = "#0d6efd";
  });

  addBtn.onclick = () => {
    langs.push("");
    lvl.push("");
    renderFields();
  };

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Сохранить";
  saveBtn.classList.add("wave-button");
  saveBtn.style.backgroundColor = "#198754";
  saveBtn.style.color = "#fff";
  saveBtn.style.fontSize = "14px";
  saveBtn.style.padding = "6px 14px";
  saveBtn.style.borderRadius = "8px";
  saveBtn.style.flexShrink = "0";
  saveBtn.style.whiteSpace = "nowrap";

  saveBtn.addEventListener("mouseenter", () => {
    saveBtn.style.backgroundColor = "#146c43";
  });
  saveBtn.addEventListener("mouseleave", () => {
    saveBtn.style.backgroundColor = "#198754";
  });

  saveBtn.onclick = () => {
    saveBtn.classList.add("wave-active");
    setTimeout(() => {
      const inputs = list.querySelectorAll("input");
      const newL = [];
      const newLv = [];
      for (let i = 0; i < inputs.length; i += 2) {
        newL.push(inputs[i].value.trim());
        newLv.push(inputs[i + 1].value.trim() || "0%");
      }
      onSave(newL, newLv);
    }, 400);
  };

  btnsRow.append(addBtn, saveBtn);

  container.append(list, btnsRow);

  enableMaterialWave();
}
