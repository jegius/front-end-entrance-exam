/**
 * Получение данных из mockCv.json
 * @returns {Promise<Response>}
 */
export const fetchData = async () => {
    return await fetch('/mockCv.json')
};

export const createCvBlock = (className, content) => {
    const cvBlock = document.createElement('div');
    cvBlock.classList.add(className, 'cv-block');
    cvBlock.innerHTML = content;
    return cvBlock;
}