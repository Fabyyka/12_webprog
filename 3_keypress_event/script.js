const demo = document.querySelector('#demo');
const area = document.querySelector('#area');

area.addEventListener('keypress', (event) => {
    demo.textContent = event.key;
});