// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a href="" class="gallery__link">
                <img
                    class="gallery__image" 
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    }).join("");
 
}

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();

    const isImageEl = evt.target.classList.contains("gallery__image");
    if (!isImageEl) {
        return;
    }

    const selectedImage = evt.target.dataset.source;
    

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="1200" height="800">`)
    instance.show()
    
    galleryContainer.addEventListener("keydown",onModalWindowClose)
    
    function onModalWindowClose(evt) {
        if (evt.code === "Escape") {
            instance.close()
            evt.currentTarget.removeEventListener("keydown",onModalWindowClose)
        }
    }
}