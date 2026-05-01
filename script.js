// Массив фактов о команде
const facts = [
    "Денис коллекционирует ретро-приставки, у него их 7 штук.",
    "Настя может приготовить 10 видов пасты без рецепта.",
    "Никита играет на гитаре и пишет свои песни.",
    "Лиза однажды посмотрела 4 фильма за день на кинофестивале.",
    "Тимур написал рассказ, который опубликовали в городском альманахе.",
    "Наша команда собралась впервые за чашкой кофе и сразу придумала тему сайта.",
    "Все мы из разных городов: Москва, Казань, Новосибирск, Ростов и Санкт-Петербург."
];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factElement = document.getElementById("factDisplay");
    if (factElement) {
        factElement.textContent = facts[randomIndex];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("generateFactBtn");
    if (btn) {
        btn.addEventListener("click", displayRandomFact);
    }
    displayRandomFact();
});
