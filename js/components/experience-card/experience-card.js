import "./experience-card.css";
export function experienceCard(props, path = "") {
  const { mostRecent = false, dates = "", postTitle = "", postDescription = "", responsibilities = [] } = props;
  let className = "experience__item card br-10";

  return `
  <li class="${className}">
    <div class="tag-most-recent${mostRecent ? " active" : ""}" data-toggle="experience.${path}.mostRecent">most recent</div>
      <div class="dates" contenteditable data-text-item="experience.${path}.dates">${dates}</div>
      <div class="post">
        <h3 class="post__title" contenteditable data-text-item="experience.${path}.postTitle">${postTitle}</h3>
        <p class="post__description" contenteditable data-text-item="experience.${path}.postDescription">${postDescription}</p>
      </div>
      <ul class="responsibilities">
        ${responsibilities
          .map(
            (item, index) => `
          <li>
          <div class="responsibility"
            contenteditable data-text-item="experience.${path}.responsibilities.${index}">
            ${item}
          </div>
          </li>`,
          )
          .join("")}
      </ul>
  </li>
    `;
}
