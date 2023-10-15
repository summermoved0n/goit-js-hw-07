import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, description, original }) => {
    return `<li class='gallery__item'><a class="gallery__link" href="${original}"><img class="gallery__image" src ="${preview}" alt='${description}'> </a></li>`;
  })
  .join("");

list.insertAdjacentHTML("afterbegin", markup);

list.addEventListener("click", getSimpleLightbox);

function getSimpleLightbox(event) {
  event.preventDefault();
  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

  gallery.on("show.simplelightbox", function () {
  });
}