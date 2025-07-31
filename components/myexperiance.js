import { enableMaterialWave } from "./materialwawes";

export function renderMyExperience(container) {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem("userExperience"));
  } catch {
    saved = null;
  }
  if (!saved || !Array.isArray(saved.jobs) || saved.jobs.length === 0) {
    saved = {
      jobs: [
        {
          mostRecent: true,
          period: "Jun. 2023 - Present",
          position: "Marketing Manager",
          company: "Pankayam  |  Full-time",
          description: "Strategy development and planning of campaigns that promote the business and generate genuine traffic \nSEO Content Creation for Blogs, Website, Social media",
        },
        {
          mostRecent: false,
          period: "2017 - Present",
          position: "Graphic / Web designer",
          company: "Freelance",
          description: "Development of internal projects from scratch, product design of brands\n Landing page, webapps and hybrid apps\nCoordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.",
        },
        {
          mostRecent: false,
          period: "Sep. 2021 - Jun. 2023",
          position: "Legal Assistant",
          company: "Startup Law Firm  |  Intern",
          description: "Provide administrative support to lawyer and enhance office effectiveness\nHandle communication with clients, witnesses etc.\nrepare case briefs and summarize depositions, interrogatories and testimony",
        },
      ],
    };
  }

  container.innerHTML = "";

  const headerRow = document.createElement("article");
  headerRow.style.display = "flex";
  headerRow.style.justifyContent = "space-between";
  headerRow.style.alignItems = "center";
  headerRow.style.marginBottom = "8px";
  headerRow.style.flexWrap = "nowrap";
  headerRow.style.gap = "12px";

  const title = document.createElement("h2");
  title.textContent = "Experience";
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
  container.appendChild(list);

  let isEditing = false;

  function saveData(jobs) {
    localStorage.setItem("userExperience", JSON.stringify({ jobs }));
  }

  function renderView(jobs) {
    list.innerHTML = "";
    jobs.forEach((job) => {
      const jobarticle = document.createElement("article");
      jobarticle.style.borderRadius = "8px";
      jobarticle.style.padding = "12px";
      jobarticle.style.marginBottom = "10px";
      jobarticle.style.backgroundColor = job.mostRecent ? "#28d979" : "#fff";
      jobarticle.style.color = job.mostRecent ? "#fff" : "#000";
      jobarticle.style.position = "relative";

      if (job.mostRecent) {
        const mostRecentBtn = document.createElement("button");
        mostRecentBtn.textContent = "Most Recent";
        mostRecentBtn.disabled = true;
        mostRecentBtn.style.position = "absolute";
        mostRecentBtn.style.top = "10px";
        mostRecentBtn.style.right = "10px";
        mostRecentBtn.style.fontSize = "12px";
        mostRecentBtn.style.borderRadius = "6px";
        mostRecentBtn.style.padding = "4px 10px";
        mostRecentBtn.style.backgroundColor = "rgba(126, 115, 18, 0.4)";
        mostRecentBtn.style.color = "#ddf163";
        mostRecentBtn.style.border = "none";
        jobarticle.appendChild(mostRecentBtn);
      }

      const row = document.createElement("article");
      row.style.display = "flex";
      row.style.gap = "16px";

      const leftCol = document.createElement("article");
      leftCol.style.flex = "0 0 200px";

      const periodSpan = document.createElement("p");
      periodSpan.textContent = job.period;

      const position = document.createElement("h3");
      position.textContent = job.position;

      const company = document.createElement("p");
      company.textContent = job.company;
      company.style.color = job.mostRecent ? "#ebf9f2" : "#3f3d3d";

      leftCol.append(periodSpan, position, company);

      const rightCol = document.createElement("ul");
      rightCol.style.flex = "1";
      rightCol.style.paddingLeft = "20px";
      rightCol.style.listStyleType = "disc";

      rightCol.style.cssText = `
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: clamp(8px, 1.2w, 12px);
        line-height:150%;  
        vertical-align: end;
      `;

      job.description
        .split('\n')
        .filter(line => line.trim() !== "")
        .forEach(line => {
          const li = document.createElement("li");
          li.textContent = line.trim();
          rightCol.appendChild(li);
        });

      row.append(leftCol, rightCol);
      jobarticle.appendChild(row);
      list.appendChild(jobarticle);
    });
  }

  function renderEditor(jobs) {
    list.innerHTML = "";
    const editorList = document.createElement("article");
    editorList.style.display = "flex";
    editorList.style.flexDirection = "column";
    editorList.style.gap = "12px";

    jobs.forEach((job, i) => {
      const jobEditor = document.createElement("article");
      jobEditor.style.border = "1px solid #aaa";
      jobEditor.style.borderRadius = "8px";
      jobEditor.style.padding = "10px";
      jobEditor.style.paddingTop = "4.5vh";
      jobEditor.style.backgroundColor = "#f9f9f9";
      jobEditor.style.position = "relative";

      const mostRecentBtn = document.createElement("button");
      mostRecentBtn.textContent = "Most Recent";
      mostRecentBtn.classList.add("wave-button");
      mostRecentBtn.style.position = "absolute";
      mostRecentBtn.style.top = "10px";
      mostRecentBtn.style.right = "10px";
      mostRecentBtn.style.fontSize = "12px";
      mostRecentBtn.style.borderRadius = "6px";
      mostRecentBtn.style.padding = "4px 10px";
      mostRecentBtn.style.cursor = "pointer";
      mostRecentBtn.style.backgroundColor = job.mostRecent ? "rgba(11, 101, 40, 1)" : "#ccc";
      mostRecentBtn.style.color = job.mostRecent ? "#fffS" : "#333";

      mostRecentBtn.onclick = () => {
        jobs.forEach((j, idx) => (j.mostRecent = idx === i));
        renderEditor(jobs);
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
        jobs.splice(i, 1);
        renderEditor(jobs);
      };

      const periodInput = document.createElement("input");
      periodInput.type = "text";
      periodInput.value = job.period;
      periodInput.placeholder = "Период";

      const positionInput = document.createElement("input");
      positionInput.type = "text";
      positionInput.value = job.position;
      positionInput.placeholder = "Должность";

      const companyInput = document.createElement("input");
      companyInput.type = "text";
      companyInput.value = job.company;
      companyInput.placeholder = "Компания";

      const descInput = document.createElement("textarea");
      descInput.value = job.description;
      descInput.placeholder = "Описание (каждая строка станет пунктом списка(При нажатии на enter))";

      [periodInput, positionInput, companyInput, descInput].forEach((el) => {
        el.style.width = "100%";
        el.style.marginTop = "6px";
        el.style.padding = "6px 8px";
        el.style.fontSize = "14px";
        el.style.border = "1px solid #ccc";
        el.style.borderRadius = "6px";
        el.style.boxSizing = "border-box";
      });

      descInput.style.minHeight = "60px";

      periodInput.oninput = () => (job.period = periodInput.value);
      positionInput.oninput = () => (job.position = positionInput.value);
      companyInput.oninput = () => (job.company = companyInput.value);
      descInput.oninput = () => (job.description = descInput.value);

      jobEditor.append(
        mostRecentBtn,
        periodInput,
        positionInput,
        companyInput,
        descInput,
        removeBtn
      );
      editorList.appendChild(jobEditor);
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
      jobs.push({
        mostRecent: false,
        period: "",
        position: "",
        company: "",
        description: "",
      });
      renderEditor(jobs);
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
        saveData(jobs);
        isEditing = false;
        editBtn.textContent = "Редактировать";
        renderView(jobs);
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
      isEditing ? renderEditor(saved.jobs) : renderView(saved.jobs);
    }, 400);
  };

  renderView(saved.jobs);
  enableMaterialWave(container);
}