/**
 * Получение данных из mockCv.json
 * @returns {Promise<Response>}
 */
export const fetchData = async () => {
    return await fetch('/mockCv.json')
};


/**
 * Создание блока резюме
 * @param className
 * @param content
 * @returns {HTMLDivElement}
 */
export const createCvBlock = (className, content) => {
    const cvBlock = document.createElement('div');
    cvBlock.classList.add(className, 'cv-block');
    cvBlock.innerHTML = content;
    return cvBlock;
}

/**
 * Получеине списка src для каждого tool-tag
 * @param tags
 * @returns {*}
 */
export const getToolIconSrc = (tags) => {
    return tags.map((tag) => {
        switch (tag) {
            case 'figma':
                return '/public/tools/logoFigma.svg';
            case 'photoshop':
                return '/public/tools/logoPs.svg';
            case 'illustrator':
                return '/public/tools/logoLustra.svg';
            case 'premier':
                return '/public/tools/logoPremier.svg';
            case 'notion':
                return '/public/tools/logoNotion.svg';
            case 'meet':
                return '/public/tools/logoMeet.svg';
            case 'zapier':
                return '/public/tools/logoZapier.svg';
            case 'webflow':
                return '/public/tools/logoWebflow.svg';
            case 'framer':
                return '/public/tools/logoFramer.svg';
            case 'wordpress':
                return '/public/tools/logoWordpress.svg';
            case 'chatgpt':
                return '/public/tools/logoChatGPT.svg';
            case 'copilot':
                return '/public/tools/logoCopilot.svg';
            case 'midjourney':
                return '/public/tools/logoMidjourney.svg';
        }
    });
}