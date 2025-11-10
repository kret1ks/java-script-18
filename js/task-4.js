// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

const decrementEl = document.querySelector('[data-action="decrement"]')
const valueEl = document.querySelector("#value")
const incrementEl = document.querySelector('[data-action="increment"]')

let counterValue = 0;


function increment() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}


function decrement() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

decrementEl.addEventListener('click', decrement);
incrementEl.addEventListener('click', increment);