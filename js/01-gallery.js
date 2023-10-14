import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, description, original }) => {
    return `<li class='gallery__item'><img class="gallery__image" src ="${preview}" alt='${description}' data-original='${original}'></li>`;
  })
  .join("");
list.insertAdjacentHTML("afterbegin", markup);

list.addEventListener("click", getBasicLightbox);

function getBasicLightbox(event) {
  basicLightbox
    .create(
      `<img src=${event.target.dataset.original}>`
    )
    .show();
}
