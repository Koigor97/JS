'use strict';

// Open and Close modal eliment
const modal = document.getElementById('modal');
const openBtn = document.querySelector('.open-info');
const closeBtn = document.querySelector('.close-info');

openBtn.addEventListener('click', () => {
    modal.showModal();
    modal.style.visibility = "visible";
});

closeBtn.addEventListener('click', () => {
    modal.style.visibility = "hidden";
    modal.close();
})