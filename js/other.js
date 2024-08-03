import {createCvBlock} from "./utils.js";

const renderInterests = (interests) => {
    const content = `
        <h2 class="cv-block__title">
          Interests
        </h2>
        <ul class="interests__list">
            ${interests.map((interest) => `<li class="interests__item">${interest}</li>`).join('')}
        </ul>
    `

    return createCvBlock('interests', content);
}

const renderEmail = (email) => {
    const content = `
        <h2 class="cv-block__title contact__text">
          Let´s chat! I´m ready to work on excinting projects
        </h2>
        <span class="contact__email">
          ${email}
        </span>
    `

    return createCvBlock('contact', content);
};

export const renderRideSide = (interests, email) => {
    console.log('интересы', interests);
    const container = document.createElement('div');
    container.classList.add('container-column');
    container.appendChild(renderInterests(interests));
    container.appendChild(renderEmail(email));

    return container;
};

export const renderEducation = (education) => {
    const content = `
        <h2 class="cv-block__title">
            Education
          </h2>

          <ul class="education__list">
            ${education.map((item) => {
                return `
                    <li class="education__item">
                        <span class="education__date">
                            ${item.period}
                        </span>
                        <h3 class="education__title">
                            ${item.title}
                        </h3>
                        <ul class="education__tags">
                            ${item.tags.map((tag) => {
                                return `<li class="education__tags--item">${tag}</li>`
                            }).join('')}
                        </ul>
                        <span class="education__place">
                            ${item.place}
                        </span>
                   </li>`
            }).join('')} 
        </ul>
    `

    return createCvBlock('education', content);
}