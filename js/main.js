import '../css/style.css'
import {fetchData} from "./utils.js";
import {renderId, renderImage, renderLanguages} from "./profile.js";

const root = document.querySelector('#root');

const renderProfileSection = (image, id, languages) => {
    const profileSection = document.createElement('section');
    profileSection.classList.add('profile', 'row');
    profileSection.appendChild(image);
    profileSection.appendChild(id);
    profileSection.appendChild(languages)
    root.appendChild(profileSection);
}

await fetchData()
    .then((response) => response.json())
    .then((data) => {
        renderProfileSection(renderImage(), renderId(data.name, data.post), renderLanguages(data.languages));
    });


