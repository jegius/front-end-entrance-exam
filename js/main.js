import "../css/style.css";
import Photo from "/photo.jpg";
import Heard from "/Vector.svg"

import Figma from "/logoFigma.svg";
import Adobe_CC from "/logoCreativeCloud.svg";
import Miro from "/logoMiro.svg";
import Notion from "/logoNotion.svg";
import Meet from "/logoMeet.svg";
import Analytics from "/logoanalytics.svg";
import Zapier from "/logoZapier.svg";
import Webflow from "/logoWebflow.svg";
import Framer from "/logoFramer.svg";
import WordPress from "/logoWordpress.svg";
import ChatGPT from "/logoChatGPT.svg";
import Copilot from "/logoCopilot.svg";
import Midjourney from "/logoMidjourney.svg";

import {exportToPdf} from "./downloadsFile.js";

document.querySelector("#app").innerHTML =`<div>
    <div class="controls">
        <button id="download-btn">Скачать PDF</button>
    </div>

    <main class="main">
        <img src="${Photo}" alt="userImg" class="photo"/>
        <section class="name-container">
            <div class="hello">
                <p contenteditable="true" data-editable="hello-text" id="hello-text">Hello 👋🏻 I’m</p>
            </div>
            <div class="name">
                <h6 contenteditable="true" data-editable="name-title" id="name-title">Pavel Sh</h6>
                <p contenteditable="true" data-editable="name-subtitle" id="name-subtitle">Brand/Logo Designer</p>
            </div>
        </section>
        <section class="languages">
            <h3 contenteditable="true" data-editable="languages-title" id="languages-title">Languages</h3>
            <div class="language-list">
                <div class="language-item">
                    <p contenteditable="true" data-editable="lang-english" id="lang-english">English</p>
                    <div class="progress-bar-wrapper">
                        <div class="progress-bar" style="width: 100%;"></div>
                    </div>
                </div>
                <div class="language-item">
                    <p contenteditable="true" data-editable="lang-spanish" id="lang-spanish">Spanish</p>
                    <div class="progress-bar-wrapper">
                        <div class="progress-bar" style="width: 85%;"></div>
                    </div>
                </div>
                <div class="language-item">
                    <p contenteditable="true" data-editable="lang-french" id="lang-french">French</p>
                    <div class="progress-bar-wrapper">
                        <div class="progress-bar" style="width: 70%;"></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="education">
            <h3 contenteditable="true" data-editable="education-title" id="education-title">education</h3>
            <div class="edu-containers">
                <div class="edu-items ">

                    <div class="edu-item">
                        <div class="name-edu-container">
                            <h4 contenteditable="true" data-editable="edu-2024-year" id="edu-2024-year">2024</h4>
                            <img src="${Heard}" alt="Heard"/>
                        </div>
                        <div class="info">
                            <div class="main-info">
                                <h5 contenteditable="true" data-editable="edu-2024-title" id="edu-2024-title">UX/UI</h5>
                                <h6 contenteditable="true" data-editable="edu-2024-tags" id="edu-2024-tags">
                                    #UX #UI #research
                                    #DesignSystem #Agile
                                    #wireframing #figma
                                    #IA
                                </h6>
                            </div>
                            <p contenteditable="true" data-editable="edu-2024-inst" id="edu-2024-inst">Neoland</p>
                        </div>
                    </div>

                    <div class="edu-item two">
                        <div class="name-edu-container">
                            <h4 contenteditable="true" data-editable="edu-2017-year" id="edu-2017-year">2017-2021</h4>
                        </div>
                        <div class="info">
                            <div class="main-info">
                                <h5 contenteditable="true" data-editable="edu-2017-title" id="edu-2017-title">Graphic
                                    design</h5>
                                <h6 contenteditable="true" data-editable="edu-2017-tags" id="edu-2017-tags">
                                    #branding
                                    #web
                                    #illustration
                                    #adobe
                                </h6>
                            </div>
                            <p contenteditable="true" data-editable="edu-2017-inst" id="edu-2017-inst">Cali Institute of
                                the Arts</p>
                        </div>
                    </div>
                </div>

                <div class="edu-item2 three">
                    <div class="name-edu-container">
                        <h4 contenteditable="true" data-editable="edu-2022-year" id="edu-2022-year">2022</h4>
                    </div>
                    <div class="info">
                        <div class="main-info">
                            <h5 contenteditable="true" data-editable="edu-2022-title" id="edu-2022-title">Product
                                designer</h5>
                            <h6 contenteditable="true" data-editable="edu-2022-tags" id="edu-2022-tags">
                                #analytics
                                #research
                                #prototype
                                #wireframes
                            </h6>
                        </div>
                        <p contenteditable="true" data-editable="edu-2022-inst" id="edu-2022-inst">Coursera</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="interests">
            <div class="interest-container">
                <h3 contenteditable="true" data-editable="interests-1" id="interests">interests</h3>
                <div class="interests-items">
                    <div contenteditable="true" data-editable="interests-2" id="interests-item1" class="interest-item">
                        branding
                    </div>
                    <div contenteditable="true" data-editable="interests-3" id="interests-item2" class="interest-item">
                        brand identity
                    </div>
                    <div contenteditable="true" data-editable="interests-4" id="interests-item3" class="interest-item">
                        logo
                    </div>
                    <div contenteditable="true" data-editable="interests-5" id="interests-item4" class="interest-item">
                        typography
                    </div>
                    <div contenteditable="true" data-editable="interests-6" id="interests-item5" class="interest-item">
                        photography
                    </div>
                    <div contenteditable="true" data-editable="interests-7" id="interests-item6" class="interest-item">
                        designing
                    </div>
                    <div contenteditable="true" data-editable="interests-8" id="interests-item7" class="interest-item">
                        poster design
                    </div>
                    <div contenteditable="true" data-editable="interests-9" id="interests-item8" class="interest-item">
                        research
                    </div>
                    <div contenteditable="true" data-editable="interests-10" id="interests-item9" class="interest-item">
                        social networks
                    </div>
                    <div contenteditable="true" data-editable="interests-11" id="interests-item10"
                         class="interest-item">illustration
                    </div>
                </div>
            </div>
            <div class="my-info-card">
                <h3 contenteditable="true" data-editable="card-1" id="card-1" >Let´s chat! I´m
                    ready to work on excinting projects</h3>
                <div class="mail">
                    <p contenteditable="true" data-editable="card-2" id="card-2">shehonin.pavel@list.ru</p>
                    <p contenteditable="true" data-editable="card-3" id="card-3">|</p>
                    <p contenteditable="true" data-editable="card-4" id="card-4">+7 904 203 96 56</p>
                </div>
            </div>
        </section>
        <section class="tools">
            <h3 contenteditable="true" data-editable="tools-1" id="tools-1">Tools</h3>
            <div class="tools-category">
                <div class="tool-container">
                    <p contenteditable="true" data-editable="tools-2" id="tools-2">design</p>
                    <div class="tools-item">
                        <img src="${Figma}" alt="figma"/>
                        <img src="${Adobe_CC}" alt="figma"/>
                        <img src="${Miro}" alt="figma"/>
                        <img src="${Notion}" alt="figma"/>
                        <img src="${Meet}" alt="figma"/>
                        <img src="${Analytics}" alt="figma"/>
                    </div>
                </div>
                <div class="tool-container">
                    <p contenteditable="true" data-editable="tools-3" id="tools-3">no-code</p>
                    <div class="tools-item">
                        <img src="${Zapier}" alt="figma"/>
                        <img src="${Webflow}" alt="figma"/>
                        <img src="${WordPress}" alt="figma"/>
                        <img src="${Framer}" alt="figma"/>
                    </div>
                </div>
                <div class="tool-container">
                    <p contenteditable="true" data-editable="tools-4" id="tools-4">artoficial intelligence</p>
                    <div class="tools-item">
                        <img src="${ChatGPT}" alt="figma"/>
                        <img src="${Copilot}" alt="figma"/>
                        <img src="${Midjourney}" alt="figma"/>
                    </div>
                </div>
            </div>
        </section>
        <section class="experience">
            <h3 contenteditable="true" data-editable="experience-title" id="experience-title">Experience</h3>
            <div class="job-container">
                <div class="job most-recent">
                    <div class="job-header">
                        <p contenteditable="true" data-editable="job-2023-date" id="job-2023-date" class="date">Jul.
                            2023 - Ago. 2023</p>
                        <span class="tag">most recent</span>
                    </div>
                    <div class="job-main">
                        <div class="job-main-name">
                            <h4 contenteditable="true" data-editable="job-2023-title" id="job-2023-title">Senior Graphic
                                Designer</h4>
                            <div class="company">
                                <p contenteditable="true" data-editable="job-2023-company" id="job-2023-company">
                                    Pinnacle</p>
                                <p contenteditable="true" data-editable="job-2023-type1-" id="job-2023-type-1">|</p>
                                <p contenteditable="true" data-editable="job-2023-type" id="job-2023-type">Full-time</p>
                            </div>
                        </div>
                        <ul>
                            <li contenteditable="true" data-editable="job-2023-task1" id="job-2023-task1">Research and
                                brainstorm various design ideas
                                for content and marketing.
                            </li>
                            <li contenteditable="true" data-editable="job-2023-task2" id="job-2023-task2">Review the
                                work submitted by Junior Designers and sharing feedback.
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="job">
                    <div class="job-header">
                        <p contenteditable="true" data-editable="job-1" id="job-1" class="date">Ene. 2021 - Jul. 2023</p>
                    </div>
                    <div class="job-main">
                        <div class="job-main-name">
                            <h4 contenteditable="true" data-editable="job-2" id="job-2">Graphic / Web designer</h4>
                            <div class="company">
                                <p contenteditable="true" data-editable="job-3" id="job-3">Double Square</p>
                                <p contenteditable="true" data-editable="job-4" id="job-4">|</p>
                                <p contenteditable="true" data-editable="job-5" id="job-5">Full-time</p>
                            </div>
                        </div>
                        <ul>
                            <li contenteditable="true" data-editable="job-6" id="job-6">Development of internal projects from scratch, product design of brands.</li>
                            <li contenteditable="true" data-editable="job-7" id="job-7">Landing page, webapps and hybrid apps</li>
                            <li contenteditable="true" data-editable="job-8" id="job-8">Taking decisions with stakeholders for the future of products such as Beagle labs,
                                myur...
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="job">
                    <div class="job-header">
                        <p contenteditable="true" data-editable="job-9" id="job-9" class="date">Feb. 2021 - Jul. 2023</p>
                    </div>
                    <div class="job-main">
                        <div class="job-main-name">
                            <h4 contenteditable="true" data-editable="job-10" id="job-10">Graphic Designer</h4>
                            <div class="company">
                                <p contenteditable="true" data-editable="job-11" id="job-11">Freelance</p>
                            </div>
                        </div>
                        <ul>
                            <li contenteditable="true" data-editable="job-12" id="job-12">Visual design for Events, Brands and Products.</li>
                            <li contenteditable="true" data-editable="job-13" id="job-13">Product design, Packaging Design</li>
                            <li contenteditable="true" data-editable="job-14" id="job-14">Logo Design</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
`;


const editableElements = document.querySelectorAll('[data-editable]');

editableElements.forEach(element => {
  const id = element.id;
  const savedContent = localStorage.getItem(id);
  if (savedContent) {
    element.textContent = savedContent;
  }
  element.addEventListener('focus', () => {
    element.classList.add('editing');
  });

  element.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      element.blur();
    }
  });

  element.addEventListener('blur', () => {
    element.classList.remove('editing');
    localStorage.setItem(id, element.textContent.trim());
    element.classList.add('updated');
    setTimeout(() => {
      element.classList.remove('updated');
    }, 800);
  });
});
const downloadButton = document.getElementById('download-btn');
const resumeElement = document.querySelector('.main')

downloadButton.addEventListener('click', () => {
  exportToPdf(resumeElement, downloadButton);
});