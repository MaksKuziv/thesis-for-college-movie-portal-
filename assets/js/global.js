/**
 * Додавання події для декількох елементів
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (const elem of elements) elem.addEventListener(eventType, callback);
}

/**
 * Перемикання поля пошуку на мобільному пристрої || на маленькому екрані
 */

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function () {
    searchBox.classList.toggle("active");
});

/**
 * зберігати movieId у «localStorage», коли ви натискаєте на будь-яку картку фільму
 */

const getMovieDetail = function(movieId) {
    window.localStorage.setItem("movieId", String(movieId));
}


const getMovieList = function(urlParam, genreName) {
    window.localStorage.setItem("urlParam", urlParam);
    window.localStorage.setItem("genreName", genreName);
}