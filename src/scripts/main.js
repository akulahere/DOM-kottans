'use strict';

const galleryList = document.querySelector('.gallery__list');
const bigImage = document.querySelector('#largeImg');
const title = document.querySelector('.heading');
galleryList.addEventListener('click', (event) => {
  event.preventDefault();
  bigImage.src = event.target.closest('.list-item__link').href;
  console.log(event.target.closest('.list-item__link').href);
  console.log(event.target.closest('.list-item__link').title);
  title.textContent = event.target.closest('.list-item__link').title;
});
