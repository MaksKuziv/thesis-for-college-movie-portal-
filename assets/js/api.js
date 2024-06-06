const api_key = '';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

/**
 * отримує дані з сервера за `url` і передає
 * результат у форматі JSON у функцію `callback`,
 * разом з необов'язковим параметром if, що має значення `optionalParam`.
 */

const fetchDataFromServer = function(url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };

