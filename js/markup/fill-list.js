import { createElementFromHTML } from "./create-element-from-html";

export function listFill(listElem, data, componentCreator) {
  listElem.innerHTML = "";

  if (data.length === 0) {
    return;
  }

  data.forEach((item, index) => {
    try {
      const card = createElementFromHTML(componentCreator(item, index))[0];
      listElem.append(card);
    } catch (e) {
      console.error(e);
    }
  });
}
