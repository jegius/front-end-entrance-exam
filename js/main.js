'use strict';

import '../css/style.css';
import {fetchData, loadFromLocalStorage, saveData, saveToLocalStorage} from "./utils.js";
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
    let data = loadFromLocalStorage('cvData');

    if (!data) {
        try {
            const response = await fetchData();
            data = await response.json();
            saveToLocalStorage('cvData', data);
        } catch (error) {
            console.error(error);
        }
    }

    if (data) {
        renderSection('profile', [renderImage(), renderId(data.name, data.post), renderLanguages(data.languages)]);
        renderSection('skills', [renderExperiences(data.experience), renderTools(data.tools)]);
        renderSection('other', [renderEducation(data.education), renderRideSide(data.interests, data.email)]);
    }
};

const addAnimation = (element) => {
    element.classList.add('smooth-fade-in');
    element.addEventListener('animationend', () => {
        element.classList.remove('smooth-fade-in');
    }, { once: true });
};

document.addEventListener('DOMContentLoaded', async () => {
    await loadPage();

    document.querySelectorAll('[contenteditable="true"]').forEach(element => {
        element.addEventListener('blur', () => {
            addAnimation(element);
            saveData();
        });
    });
});
