function toggleContent(header) {
const content = header.nextElementSibling;
const arrow = header.querySelector('.arrow');
    
content.classList.toggle('visible');
    
arrow.classList.toggle('rotate');
}

function toggleContent(header) {
    let block = header.parentElement;
    block.classList.toggle("open");
}

// Автоматично відкриваємо потрібний блок, якщо в URL є його ID
window.onload = function () {
    let hash = window.location.hash; // Отримуємо #id з URL

    if (hash) {
        let block = document.querySelector(hash + " .toggle-block"); // Шукаємо відповідний елемент
        if (block) {
            block.classList.add("open");
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    button.addEventListener('click', function(e) {
      e.preventDefault(); // запобігає переходу за посиланням
      this.textContent = '🤡 Забудь, ти раб 🤡';
    });
  });
