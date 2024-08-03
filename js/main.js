import "../css/style.css";
import { addRippleEffects } from "./animation";
import { initContacts } from "./components/contacts";
import { educationCard } from "./components/education-card";
import { experienceCard } from "./components/experience-card";
import { interestCard } from "./components/interest-card";
import { languageItem } from "./components/language-item";
import { initPersonal } from "./components/personal/personal";
import { listFill } from "./markup/fill-list";
import { fetchJSON } from "./service/fetch-json";
import { saveToPdf } from "./service/save-to-pdf";
import { clearStorage, readStorage, saveStorage, updateItem } from "./service/storage";

async function main() {
  const saveBtn = document.querySelector(".save-btn");
  const clearBtn = document.querySelector(".clear-btn");

  saveBtn.addEventListener("click", saveToPdf);
  clearBtn.addEventListener("click", clearStorage);

  const data = readStorage() || (await fetchJSON());
  saveStorage(data);

  const photo = document.querySelector(".header__image");
  const languageList = document.querySelector(".language__list");
  const experienceList = document.querySelector(".experience__list");
  const educationList = document.querySelector(".education__list");
  const interestsList = document.querySelector(".interests__tags");

  listFill(languageList, data.languages, languageItem);
  listFill(experienceList, data.experience, experienceCard);
  listFill(educationList, data.education, educationCard);
  listFill(interestsList, data.interests, interestCard);

  initPersonal(data.personal.data);
  initContacts(data.contacts);

  if (photo.src !== data.personal.data.photoURL) {
    photo.src = data.personal.data.photoURL;
  }
  photo.removeAttribute("width");
  photo.removeAttribute("height");

  addEditableText(data);

  const elements = document.querySelectorAll(".rippled");
  addRippleEffects(elements);
}

document.addEventListener("DOMContentLoaded", main);

function addEditableText() {
  const textItems = document.querySelectorAll("[data-text-item]");
  const toggleItems = document.querySelectorAll("[data-toggle]");
  addRippleEffects(textItems);

  textItems.forEach((item) => {
    item.addEventListener("blur", (event) => {
      updateItem(event.currentTarget.dataset.textItem, event.currentTarget.textContent);
    });
  });

  toggleItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      toggleItems.forEach((item) => {
        if (item.classList.contains(event.currentTarget.className)) {
          item !== event.currentTarget && item.classList.remove("active");
        }
      });
      event.currentTarget.classList.toggle("active");
      updateItem(event.currentTarget.dataset.toggle, event.currentTarget.classList.contains("active"));
    });
  });
}
