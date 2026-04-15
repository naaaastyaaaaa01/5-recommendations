// Массив фактов о команде
const facts = [
    "Анна однажды посмотрела 4 фильма за день на кинофестивале.",
    "Денис коллекционирует ретро-приставки, у него их 7 штук.",
    "Лев написал рассказ, который опубликовали в городском альманахе.",
    "Марина играет на укулеле и поёт в студенческом хоре.",
    "Саша может приготовить 10 видов пасты без рецепта.",
    "Наша команда собралась впервые за чашкой кофе и сразу придумала тему сайта.",
    "Все мы из разных городов: Казань, Москва, Новосибирск, Ростов и Санкт-Петербург."
];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factElement = document.getElementById("factDisplay");
    if (factElement) {
        factElement.textContent = facts[randomIndex];
    }
}

// Запускаем при загрузке и вешаем обработчик
document.addEventListener("DOMContentLoaded", () => {
    displayRandomFact();
    const btn = document.getElementById("newFactBtn");
    if (btn) {
        btn.addEventListener("click", displayRandomFact);
    }
});

// Параллакс для фона
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 20;
    const y = (e.clientY / window.innerHeight) * 20;
    document.body.style.backgroundPosition = `${x}% ${y}%`;
});