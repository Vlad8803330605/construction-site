
const buyBtn = document.getElementById('buyBtn');
const buyBtn2 = document.getElementById('buyBtn2');
const buyBtn3 = document.getElementById('buyBtn3');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

buyBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
buyBtn2.addEventListener('click', () => {
    modal.style.display = 'block';
});
buyBtn3.addEventListener('click', () => {
    modal.style.display = 'block';
});



modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

  // Закрыть по клику вне окна
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});