import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, description, original }) => {
    return `<li class='gallery__item'><a class="gallery__link" href="${original}"><img class="gallery__image" src ="${preview}" alt='${description}' data-source='${original}'> </a></li>`;
  })
  .join("");

list.insertAdjacentHTML("afterbegin", markup);

list.addEventListener("click", getBasicLightbox);

function getBasicLightbox(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    basicLightbox.create(`<img src=${event.target.dataset.source}>`).show();
  }
  return;
}
