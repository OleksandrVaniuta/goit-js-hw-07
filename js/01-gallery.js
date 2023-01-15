import { galleryItems } from './gallery-items.js';
// Change code below this line

let currentModalInstance;

const galleryItemArr = makeGalleryItem(galleryItems);
const galleryParrentEL = document.querySelector('.gallery');

galleryParrentEL.insertAdjacentHTML('beforeend', galleryItemArr);
const galleryLink = document.querySelectorAll('.gallery__link');
galleryLink.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

galleryParrentEL.addEventListener('click', (event) => {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const imgUrl = event.target.parentElement.href;

  currentModalInstance = basicLightbox.create(
    `
		<img src="${imgUrl}">
	`
  );
  currentModalInstance.show();
});

document.addEventListener('keydown', (event) => {
  if (event.key == 'Escape') {
    currentModalInstance.close();
  }
});

function makeGalleryItem(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="large-image.jpg"
                        alt="${description}"
                    />
                 </a>
            </div>`;
    })
    .join('');
}
