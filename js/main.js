import '../css/style.css'
import {fetchData} from "./utils.js";
import {renderId, renderImage, renderLanguages} from "./profile.js";
import {renderExperiences, renderTools} from "./skills.js";

const root = document.querySelector('#root');

const renderProfileSection = (image, id, languages) => {
    const profileSection = document.createElement('section');
    profileSection.classList.add('profile', 'row');
    profileSection.appendChild(image);
    profileSection.appendChild(id);
    profileSection.appendChild(languages)
    root.appendChild(profileSection);
}

const renderSkillsSection = (experience, tools) => {
    const skillsSection = document.createElement('section');
    skillsSection.classList.add('skills', 'row');
    skillsSection.appendChild(experience);
    skillsSection.appendChild(tools);
    root.appendChild(skillsSection);

}

await fetchData()
    .then((response) => response.json())
    .then((data) => {
        renderProfileSection(renderImage(), renderId(data.name, data.post), renderLanguages(data.languages));
        renderSkillsSection(renderExperiences(data.experience), renderTools(data.tools));
    });


