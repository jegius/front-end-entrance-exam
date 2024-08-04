import {createCvBlock} from "./utils.js";

const renderInterests = (interests) => {
    const content = `
        <h2 class="cv-block__title">Interests</h2>
        <ul class="interests__list">
            ${interests.map((interest) => `<li class="interests__item" contenteditable="true">${interest}</li>`).join('')}
        </ul>
    `;
    return createCvBlock('interests', content);
};

const renderEmail = (email) => {
    const content = `
        <h2 class="cv-block__title contact__text">Let´s chat! I´m ready to work on exciting projects</h2>
        <span class="contact__email" contenteditable="true">${email}</span>
    `;
    return createCvBlock('contact', content);
};

export const renderRideSide = (interests, email) => {
    const container = document.createElement('div');
    container.classList.add('container-column');
    container.appendChild(renderInterests(interests));
    container.appendChild(renderEmail(email));
    return container;
};

export const renderEducation = (education) => {
    const content = `
        <h2 class="cv-block__title">Education</h2>
        <ul class="education__list">
            ${education.map((item) => `
                <li class="education__item">
                    <span class="education__date" contenteditable="true">${item.period}</span>
                    <h3 class="education__title" contenteditable="true">${item.title}</h3>
                    <ul class="education__tags">
                        ${item.tags.map((tag) => `<li class="education__tags--item" contenteditable="true">${tag}</li>`).join('')}
                    </ul>
                    <span class="education__place" contenteditable="true">${item.place}</span>
                </li>`).join('')}
        </ul>
    `;
    return createCvBlock('education', content);
};
