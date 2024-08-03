/**
 * Получение данных из mockCv.json
 * @returns {Promise<Response>}
 */
export const fetchData = async () => {
    return await fetch('/mockCv.json')
};