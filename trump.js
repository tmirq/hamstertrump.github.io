let count = 0; // Счетчик нажатий
const tapButton = document.getElementById('tapButton');
const counterDisplay = document.getElementById('counter');

tapButton.addEventListener('click', () => {
    count++; // Увеличиваем счетчик
    counterDisplay.textContent = 'Trumps: ' + count; // Обновляем текст счетчика
});