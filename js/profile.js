import {createCvBlock} from "./utils.js";

export const renderId = (name, post) => {
    const profileId = createCvBlock('profile__id');
    profileId.innerHTML = `
        <span class="profile__hello">
            Hello 👋🏻 I’m
          </span>
          <h2 class="profile__name">
            ${name}
          </h2>
          <p class="profile__post">
            ${post}
          </p>
    `
    return profileId;
};

export const renderImage = () => {
    const image = document.createElement('img');
    image.src = '/profileImg.png';
    image.alt = 'profile image';
    image.classList.add('profile__avatar');

    return image;
}

export const renderLanguages = (languages) => {
    const profileLanguages = createCvBlock('profile__languages');
    profileLanguages.innerHTML = `
      <h2 class="cv-block__title">
          Languages
      </h2>
      <div class="profile__languages--container languages">
          <ul class="languages__name--list">
              ${languages.map((language) => `<li class="languages__name--item">${language.name}</li>`).join('')}
          </ul>
          <ul class="languages__progress--list">
              ${languages.map((language) => `
                  <li class="languages__progress--item" style="width: ${language.level}%">
                      <div class="progress-bar"></div>
                  </li>`
              ).join('')}
          </ul>
      </div>`

    return profileLanguages;
};