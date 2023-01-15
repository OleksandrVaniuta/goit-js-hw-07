import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
let modalDict = {};
let currentModalInstance;

const galleryItemArr = makeGalleryItem(galleryItems);
const galleryParrentEL = document.querySelector('.gallery');

galleryParrentEL.insertAdjacentHTML('beforeend', galleryItemArr);

let gallery = new SimpleLightbox('.gallery a', {
  additionalHtml: '<div class="alt-txt"></div>',
});

const galleryLink = document.querySelectorAll('.gallery__item');
galleryLink.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

gallery.on('shown.simplelightbox', function (eve) {
  setTimeout(function () {
    document.querySelector('.alt-txt').innerHTML =
      eve.target.querySelector('img').alt;
  }, 200);
});

function makeGalleryItem(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
