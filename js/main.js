import { myPhoto } from "../components/myphoto.js";
import { myName } from "../components/myname.js";
import { renderMyLanguages } from "../components/mylanguages.js";
import { renderMyExperience } from "../components/myexperiance.js";
import { createContentFigure } from "../components/mytools.js";
import { renderMyEducation } from "../components/myeducation.js";
import { renderMySkills } from "../components/myskills.js";
import { renderLetsChat } from "../components/letschat.js";
import { setupDownloadPdf } from "../components/downloadpdf.js";
import { setupPreviewVideo } from "../components/setupdownloadvideo.js";
import {setupPaletteSwitcher } from "../components/setuppalitra.js";
import defaultImage from "../public/profileImg.svg";
import img1 from '../public/tools/design/logoFigma.svg';
import img2 from '../public/tools/design/photoshop_.svg';
import img3 from '../public/tools/design/illustrator_.svg';
import img4 from '../public/tools/design/premiere_.svg';
import img5 from '../public/tools/design/logoNotion.svg';
import img6 from '../public/tools/design/logoMeet.svg';
import img11 from '../public/tools/no-code/img1.svg';
import img12 from '../public/tools/no-code/img2.svg';
import img13 from '../public/tools/no-code/img3.svg';
import img14 from '../public/tools/no-code/img4.svg';
import img21 from '../public/tools/artoficial/img1.svg';
import img22 from '../public/tools/artoficial/img2.svg';
import img23 from '../public/tools/artoficial/img3.svg';
import img24 from '../public/tools/artoficial/img4.svg';



const images = [img1, img2, img3, img4, img5, img6];
const images2 = [img11, img12, img13, img14];
const images3 = [img21, img22, img23, img24];

const app = document.getElementById("app");
app.innerHTML = "";

document.body.style.margin = "0";
document.body.style.padding = "0";
document.documentElement.style.margin = "0";
document.documentElement.style.padding = "0";


app.style.margin = "0";
app.style.padding = "0";
app.style.width = "100%";
app.style.boxSizing = "border-box";


const header = document.createElement("header");
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.gap = "20px";
header.style.background = "#f8f8f8";
header.style.borderBottom = "1px solid #e0e0e0";
header.style.flexWrap = "wrap";
header.style.margin = "0";
header.style.padding = "15px";
header.style.width = "100%";
header.style.boxSizing = "border-box";

const createHeaderButton = (text) => {
    const button = document.createElement("button");
    button.textContent = text;
    

    button.style.padding = "10px 20px";
    button.style.background = "#ffffff";
    button.style.border = "1px solid #d0d0d0";
    button.style.borderRadius = "6px";
    button.style.cursor = "pointer";
    button.style.fontSize = "16px";
    button.style.transition = "all 0.2s";
    button.style.minWidth = "120px";
    button.style.fontWeight = "500";
    button.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    button.style.boxSizing = "border-box";
    
 
    button.addEventListener("mouseenter", () => {
        button.style.background = "#eaeaea";
        button.style.transform = "translateY(-2px)";
        button.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
    });
    

    button.addEventListener("mouseleave", () => {
        button.style.background = "#ffffff";
        button.style.transform = "translateY(0)";
        button.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    });
    

    button.addEventListener("mousedown", () => {
        button.style.transform = "translateY(1px)";
        button.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";
    });
    
    button.addEventListener("mouseup", () => {
        button.style.transform = "translateY(-2px)";
        button.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
    });
    
    return button;
};


const button1 = createHeaderButton("Нажать перед работой с сайтом");
button1.id = "preview-btn";
const button2 = createHeaderButton("Настройка Палитры");
button2.id = "palette-switch-btn";
const downloadButton = createHeaderButton("Скачать резюме в PDF");
downloadButton.id = "download-pdf-btn";


header.appendChild(button1);
header.appendChild(button2);
header.appendChild(downloadButton);




app.appendChild(header);

setupPreviewVideo('preview-btn', '../public/video.mp4');


setupDownloadPdf("download-pdf-btn");

setupPaletteSwitcher("palette-switch-btn");

const main = document.createElement("main");
main.style.cssText = `
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding: 10px;
  box-sizing: border-box;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;


const topSection = document.createElement("section");
topSection.style.cssText = `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 1vw;
  box-sizing: border-box;
  height: auto;
  position: relative;
`;

const topBlocks = [];
for (let i = 1; i <= 3; i++) {
  const article = document.createElement("article");
  article.style.cssText = `
    background: ${i === 1 ? "transparent" : "#f0f0f0"};
    padding: ${i === 1 ? "0" : "12px"};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vh;
    box-sizing: border-box;
    flex-grow: ${i === 1 ? 0 : 1};
    flex-basis: ${i === 1 ? "auto" : "30%"};
    min-width: 280px;
  `;
  topSection.appendChild(article);
  topBlocks.push(article);
}

const savedImage = localStorage.getItem("userPhoto");
const imageSrc = savedImage || defaultImage;
topBlocks[0].appendChild(myPhoto(imageSrc));


topBlocks[1].appendChild(myName());

renderMyLanguages(topBlocks[2]);

const middleSection = document.createElement("section");
middleSection.style.cssText = `
  display: flex;
  gap: 2vw;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const middleBlock1 = document.createElement("article");
middleBlock1.style.cssText = `
  background: #f0f0f0;
  padding: 12px;
  border-radius: 12px;
  flex-grow: 3;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const middleBlock2 = document.createElement("article");
middleBlock2.style.cssText = `
  background: #f0f0f0;
  padding: 12px;
  border-radius: 12px;
  flex-grow: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

middleSection.append(middleBlock1, middleBlock2);

const wrapperMiddleBlock2 = document.createElement("article");
wrapperMiddleBlock2.style.cssText = `
  display: flex;
  flex-direction: column;
  gap: 1vh;
  box-sizing: border-box;
`;

middleBlock2.appendChild(wrapperMiddleBlock2);


renderMyExperience(middleBlock1);
const tools = document.createElement("h3");
tools.textContent = "Tools";
wrapperMiddleBlock2.appendChild(tools);

const wrapperMiddleBlock2Images = document.createElement("article");

wrapperMiddleBlock2Images.style.cssText = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
`;  

wrapperMiddleBlock2.appendChild(wrapperMiddleBlock2Images);

createContentFigure(wrapperMiddleBlock2Images, images, 'content',  76, 112);
createContentFigure(wrapperMiddleBlock2Images, images2, 'no-code', 76, 86);
createContentFigure(wrapperMiddleBlock2Images, images3, 'artoficial intelligence', 76, 86);

const bottomSection = document.createElement("section");
bottomSection.style.cssText = `
  display: flex;
  gap: 2vw;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const bottomCol1 = document.createElement("div");
bottomCol1.style.cssText = `
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
`;

const bottomCol2 = document.createElement("div");
bottomCol2.style.cssText = `
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const bottomBlock1 = document.createElement("article");
bottomBlock1.style.cssText = `
  background: #f0f0f0;
  padding: 12px;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: flex-start;
  gap: 1vh;
`;

const bottomBlock2 = document.createElement("article");
const bottomBlock3 = bottomBlock2.cloneNode(true);

bottomBlock2.style.cssText = bottomBlock3.style.cssText = `
  background: #f0f0f0;
  padding: 12px;
  border-radius: 12px;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  align-items: start;
  box-sizing: border-box;
  min-height: 50px;
`;

bottomBlock3.style.cssText += `
  background: #000;
`

renderMyEducation(bottomBlock1);
renderMySkills(bottomBlock2);
renderLetsChat(bottomBlock3);

bottomCol1.appendChild(bottomBlock1);
bottomCol2.append(bottomBlock2, bottomBlock3);
bottomSection.append(bottomCol1, bottomCol2);


main.append(topSection, middleSection, bottomSection);
app.appendChild(main);


function applyResponsiveLayout() {
  const width = window.innerWidth;
  if (width < 480) {
    topBlocks.forEach(block => {
      block.style.flex = "1 1 100%";
      block.style.minWidth = "auto";
    });
    
    middleBlock1.style.minWidth = "300px";
    middleBlock2.style.minWidth = "1000px"
    bottomCol1.style.flex = "1 1 100%";
    bottomCol2.style.flex = "1 1 100%";
  } else if (width < 768) {
    topBlocks[0].style.flex = "0 0 auto";
    topBlocks[1].style.flex = "1 1 48%";
    topBlocks[2].style.flex = "1 1 48%";
    middleBlock1.style.flex = "1 1 100%";
    middleBlock1.style.minWidth = "auto";
    middleBlock2.style.flex = "1 1 100%";
    middleBlock2.style.minWidth = "auto";
    bottomCol1.style.flex = "1 1 50%";
    bottomCol2.style.flex = "1 1 45%";
  } else {
    topBlocks[0].style.flex = "0 0 auto";
    topBlocks[1].style.flex = "1 0 30%";
    topBlocks[2].style.flex = "1 0 30%";
    middleBlock1.style.flex = "3 1 70%";
    middleBlock2.style.flex = "1 1 25%";
    bottomCol1.style.flex = "1 1 50%";
    bottomCol2.style.flex = "1 1 45%";
  }
}

function syncTopHeights() {
  const heights = topBlocks.map(block => block.offsetHeight);
  const maxHeight = Math.max(...heights);
  topBlocks.forEach(block => {
    block.style.height = `${maxHeight}px`;
  });
}

window.addEventListener("resize", () => {
  applyResponsiveLayout();
  setTimeout(syncTopHeights, 100);
});

window.addEventListener("load", () => {
  applyResponsiveLayout();
  setTimeout(syncTopHeights, 100);
});