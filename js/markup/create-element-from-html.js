export function createElementFromHTML(html) {
  const innerHTML = html.trim();

  const template = document.createElement("template");
  template.innerHTML = innerHTML;
  const result = template.content.children;
  return result;
}
