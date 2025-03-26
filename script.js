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
        e.preventDefault();
        this.textContent = '🤡 Забудь, ти раб 🤡';
        
        setTimeout(() => {
            const rect = button.getBoundingClientRect();
            for (let i = 0; i < 30; i++) {
                let particle = document.createElement('div');
                particle.classList.add('particle');
                document.body.appendChild(particle);
                
                particle.style.left = `${rect.left + rect.width / 2}px`;
                particle.style.top = `${rect.top + rect.height / 2}px`;
                particle.style.setProperty('--x', `${(Math.random() - 0.5) * 200}px`);
                particle.style.setProperty('--y', `${(Math.random() - 0.5) * 200}px`);
                
                setTimeout(() => particle.remove(), 1000);
            }
            button.style.visibility = 'hidden';
        }, 1500);
    });
});
