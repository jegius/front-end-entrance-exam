import {createCvBlock} from "./utils.js";

export const renderId = (name, post) => {
    const content = `
        <span class="profile__hello">Hello 👋🏻 I’m</span>
        <h2 class="profile__name" contenteditable="true">${name}</h2>
        <p class="profile__post" contenteditable="true">${post}</p>
    `;
    return createCvBlock('profile__id', content);
};

export const renderImage = () => {
    const image = document.createElement('img');
    image.src = '/profileImg.png';
    image.alt = 'profile image';
    image.classList.add('profile__avatar');
    return image;
};

export const renderLanguages = (languages) => {
    const content = `
        <h2 class="cv-block__title">Languages</h2>
        <div class="profile__languages--container languages">
            <ul class="languages__name--list">
                ${languages.map((language) => `<li class="languages__name--item" contenteditable="true">${language.name}</li>`).join('')}
            </ul>
            <ul class="languages__progress--list">
                ${languages.map((language) => `
                    <li class="languages__progress--item" style="width: ${language.level}%">
                        <div class="progress-bar"></div>
                    </li>`).join('')}
            </ul>
        </div>
    `;
    return createCvBlock('profile__languages', content);
};
