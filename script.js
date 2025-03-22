function toggleContent(header) {
const content = header.nextElementSibling;
const arrow = header.querySelector('.arrow');
    
content.classList.toggle('visible');
    
arrow.classList.toggle('rotate');
}

document.addEventListener('copy', function(e) {
    e.preventDefault();  // Забороняє копіювання
});

let clickCount = 0;
const button = document.getElementById('hiddenButton');
const text = document.getElementById('showText');

button.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 3) {
        text.style.display = 'block';  // Показуємо текст після трьох натискань
    }
});