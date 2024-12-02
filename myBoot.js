
document.querySelectorAll('.modal-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
        const targetModal = document.querySelector(btn.dataset.target);
        targetModal.classList.toggle('is-active');
    });
});


document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function () {
        btn.closest('.modal').classList.remove('is-active');
    });
}); 




document.querySelector('.modal-trigger').addEventListener('click', async () => {
    const { openModal } = await import('./modal.js');
    openModal();
}); 