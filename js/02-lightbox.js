// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого 
// шаблону елемента галереї. Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно 
// додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. 


// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і 
// «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень 
// з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після 
// відкриття зображення.




// // **********************************
import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from "simplelightbox";
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";


const imgEl= galleryItems
  .map(({preview, original, description}) => 
  `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
  `)
  .join("");

// console.log(imgEl)

  const newGallery = document.querySelector('.gallery');
//   console.log(gallery)
  newGallery.insertAdjacentHTML("beforeend", imgEl);


  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });



// // **********************************



// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const gallery = document.querySelector('.gallery');

// gallery.innerHTML = galleryItems
//   .map(({ preview, original, description }) => {
//     return `
//       <a class="gallery__item" href="${original}">
//         <img class="gallery__image" src="${preview}" alt="${description}" />
//       </a>
//     `;
//   })
//   .join('');

//  new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// console.log(galleryItems);




















// intance via constructor and selector
// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });
// console.log(lightbox)

// intance via constructor and elements
// var lightbox = new SimpleLightbox({
//     elements: document.querySelectorAll('.gallery a')
// });

// // Using jQuery plugin interface
// $('.gallery a').simpleLightbox();

// // Run via plugin facade and get instance
// var lightbox = $('.gallery a').simpleLightbox(options).data('simpleLightbox');

// // run directly
// var lightbox = new SimpleLightbox({
//     $items: $('.gallery a')
// });

// // when images are in code
// var lightbox = SimpleLightbox.open({
//     items: ['img1-large.jpg', 'img2-large.jpg', 'img3-large.jpg']
// });











