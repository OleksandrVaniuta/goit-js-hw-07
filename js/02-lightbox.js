import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemArr = makeGalleryItem(galleryItems);
const galleryParrentEL = document.querySelector(".gallery");

galleryParrentEL.insertAdjacentHTML("beforeend", galleryItemArr);

new SimpleLightbox(".gallery a", {
	captions: true,
	captionDelay: 250,
	captionSelector: "img",
	captionPosition: "bottom",
	captionsData: "alt",
});

const galleryLink = document.querySelectorAll(".gallery__item");
galleryLink.forEach(link => {
	link.addEventListener("click", event => {
		event.preventDefault();
	});
});

function makeGalleryItem(item) {
	return item
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
		})
		.join("");
}
