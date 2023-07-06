const timer = document.getElementById('timer');
let counter = setInterval(() => {
    if (timer.textContent == 0) {
        clearInterval(counter);
        alert('Вы победили в конкурсе');
    } else timer.textContent = Number(timer.textContent) - 1;
}, 1000);