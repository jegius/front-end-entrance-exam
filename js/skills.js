import {createCvBlock, getToolIconSrc} from "./utils.js";

export const renderExperiences = (experiences) => {
    const content = `
        <h2 class="cv-block__title">
            Experience
          </h2>
        <ul class="experience__list">
            ${experiences.map((experience) => {
                return `
                    <li class="experience__item">
                        <div class="experience__item--container">
                            <div class="experience__item--head">
                                <span class="experience__item--date">
                                    ${experience.period}
                                    </span>
                            </div>
                            <div class="experience__item--body">
                                <div class="job">
                                    <h3 class="job__title">
                                        ${experience.post}
                                    </h3>
                                    <span class="job__place">
                                        ${experience.place}
                                    </span>
                                </div>
                                <div class="competitions">
                                    <ul class="competitions__list">
                                        ${experience.competitions.map((competition) => {
                                            return `<li class="competitions__item">${competition}</li>`
                                        }).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>`    
                }).join('')}`

    return createCvBlock('experience', content);
};

export const renderTools = (tools) => {
    const content = `
        <div class="tools">
            <h2 class="cv-block__title">
                Tools
            </h2>
            <ul class="tools__categories">
                ${tools.map((tool) => {
                    return `
                        <li class="tools__category">
                            <h3 class="tools__category--title">
                              design
                            </h3>
                            <ul class="tools__category--list">
                                ${getToolIconSrc(tool.tags).map((src) => {
                                    return `<li class="tools__category--item">
                                        <img src="${src}" alt="${tool}">
                                    </li>`;
                                }).join('')}
                              
                            </ul>
                        </li>`
                }).join('')}
            </ul>
        </div>`;

    return createCvBlock('tools', content);
}