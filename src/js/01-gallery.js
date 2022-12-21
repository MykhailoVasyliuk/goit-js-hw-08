// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <a href="${original}" class="gallery__item">
                <img
                    class="gallery__image" 
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        `;
    }).join("");
 
}
new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionPosition: "bottom",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});