import "./interest-card.css";
export function interestCard(item, path) {
  const className = "interests__tag";

  return `<li class="${className}" contenteditable data-text-item="interests.${path}.name">${item.name}</li>`;
}
