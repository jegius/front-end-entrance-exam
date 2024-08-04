/**
 * Получение данных из mockCv.json
 * @returns {Promise<Response>}
 */
export const fetchData = async () => {
    return await fetch('/mockCv.json');
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
};

/**
 * Получение списка src для каждого tool-tag
 * @param tags
 * @returns {*}
 */
export const getToolIconSrc = (tags) => {
    return tags.map((tag) => {
        switch (tag) {
            case 'figma':
                return '/tools/logoFigma.svg';
            case 'photoshop':
                return '/tools/logoPs.svg';
            case 'illustrator':
                return '/tools/logoLustra.svg';
            case 'premier':
                return '/tools/logoPremier.svg';
            case 'notion':
                return '/tools/logoNotion.svg';
            case 'meet':
                return '/tools/logoMeet.svg';
            case 'zapier':
                return '/tools/logoZapier.svg';
            case 'webflow':
                return '/tools/logoWebflow.svg';
            case 'framer':
                return '/tools/logoFramer.svg';
            case 'wordpress':
                return '/tools/logoWordpress.svg';
            case 'chatgpt':
                return '/tools/logoChatGPT.svg';
            case 'copilot':
                return '/tools/logoCopilot.svg';
            case 'midjourney':
                return '/tools/logoMidjourney.svg';
            default:
                return '';
        }
    });
};


export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};


export const saveData = () => {
    const updatedData = {
        name: document.querySelector('.profile__name').textContent,
        post: document.querySelector('.profile__post').textContent,
        languages: Array.from(document.querySelectorAll('.languages__name--item')).map((item, index) => ({
            name: item.textContent,
            level: document.querySelectorAll('.languages__progress--item')[index].style.width.replace('%', '')
        })),
        experience: Array.from(document.querySelectorAll('.experience__item')).map(item => ({
            period: item.querySelector('.experience__item--date').textContent,
            post: item.querySelector('.job__title').textContent,
            place: item.querySelector('.job__place').textContent,
            competitions: Array.from(item.querySelectorAll('.competitions__item')).map(comp => comp.textContent)
        })),
        tools: loadFromLocalStorage('cvData').tools, // Assuming tools do not change
        education: Array.from(document.querySelectorAll('.education__item')).map(item => ({
            period: item.querySelector('.education__date').textContent,
            title: item.querySelector('.education__title').textContent,
            tags: Array.from(item.querySelectorAll('.education__tags--item')).map(tag => tag.textContent),
            place: item.querySelector('.education__place').textContent
        })),
        interests: Array.from(document.querySelectorAll('.interests__item')).map(item => item.textContent),
        email: document.querySelector('.contact__email').textContent
    };
    saveToLocalStorage('cvData', updatedData);
}