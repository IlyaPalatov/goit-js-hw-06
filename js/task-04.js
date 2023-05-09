let counterValue = 0;

const valueElem = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueElem.textContent = counterValue;
})
decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueElem.textContent = counterValue;
})
