'use strict';

import '../css/style.css';
import {fetchData} from "./utils.js";
import { renderId, renderImage, renderLanguages } from "./profile.js";
import { renderExperiences, renderTools } from "./skills.js";
import { renderEducation, renderRideSide } from "./other.js";

const root = document.querySelector('#root');

const renderSection = (className, elements) => {
    const section = document.createElement('section');
    section.classList.add(className, 'row');
    elements.forEach(element => section.appendChild(element));
    root.appendChild(section);
};

const loadPage = async () => {
    try {
        const response = await fetchData();
        const data = await response.json();
        renderSection('profile', [renderImage(), renderId(data.name, data.post), renderLanguages(data.languages)]);
        renderSection('skills', [renderExperiences(data.experience), renderTools(data.tools)]);
        renderSection('other', [renderEducation(data.education), renderRideSide(data.interests, data.email)]);
    } catch (error) {
        console.error(error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadPage();
});