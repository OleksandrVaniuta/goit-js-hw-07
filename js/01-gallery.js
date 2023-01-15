import { galleryItems } from './gallery-items.js';
// Change code below this line

let modalDict = {};
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
  console.log(event.target.parentElement);

  const imgUrl = event.target.parentElement.href;

  if (!modalDict[imgUrl]) {
    modalDict[imgUrl] = basicLightbox.create(
      `
		<img src="${imgUrl}">
	`
    );
  }
  currentModalInstance = modalDict[imgUrl];
  modalDict[imgUrl].show();
});

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.key == 'Escape') {
    currentModalInstance.close();
  }
};

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
