// Add imports above this line
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// ------------ створення та рендер розмітки -------------------
function createGalleryMurkup(galleryItemsArr) {
    return galleryItems.map(({ preview, original, description }) => {
      return  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join(''); 
};

const gallery = document.querySelector('.gallery');
const galleryMurkup = createGalleryMurkup(galleryItems);
gallery.insertAdjacentHTML("afterbegin", galleryMurkup);

// ---------------------- додавання слухача подій -----------------

gallery.addEventListener('click', onGalleryItemClick); 


// ----------------------- ініціалізація бібліотеки --------------------
const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    });


// ----------------------функція під час виконання події -----------------
function onGalleryItemClick(e) {
  e.preventDefault();

   
  const isGalleryLink = e.target.classList.contains("gallery__image");

  if (!isGalleryLink) {
    return;
  }

    lightbox.open(e.target.parentNode);

}
