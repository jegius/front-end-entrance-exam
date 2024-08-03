import "./education-card.css";
export function educationCard(props, subpath) {
  const { favourite = false, dates = "", title = "", tags = [], organization = "" } = props;
  let className = "education__card card";
  className = favourite ? className + " favourite" : className;

  const path = `education.${subpath}`;

  return `
  <li class="${className}">
    <div class="favourite-marker${favourite ? " active" : ""}" data-toggle="${path}.favourite">
      <img src="/png/heart.png" alt="favourite" />
    </div>    
    
    <div class="education__dates">
      <div class="date_start" contenteditable data-text-item="${path}.dates">${dates}</div>
    </div>

    <h3 class="education__title" contenteditable data-text-item="${path}.title">
      ${title}
    </h3>
    <ul class="education__tags">
    ${tags
      .map(
        (tag, index) =>
          `<li class="education__tag" data-text-item="${path}.tags.${index}">
          <span class="education__link" contenteditable >${tag}</span>
        </li>`,
      )
      .join("")}
    </ul>

    <p class="education__school-name" contenteditable data-text-item="${path}.organization">${organization}</p>
  </li>`;
}
