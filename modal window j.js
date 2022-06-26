'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function() {
overlay.classList.remove('hidden');
modal.classList.remove('hidden');};

const closeModal = function() {
overlay.classList.add('hidden');
modal.classList.add('hidden');
};

for (let i=0; i < btnsOpenModal.length; i++ )
btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
if(e.key === 'Escape' && !modal.classList.contains('hidden') ) 
closeModal();
});