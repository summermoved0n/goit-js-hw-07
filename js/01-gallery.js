import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

const items = galleryItems.map(({ preview, description }) => {
  return `<li class='item'><img class="gallery__item" src ="${preview}" alt='${description}' width='300'></li>`;
}).join('');
list.insertAdjacentHTML("afterbegin", items);