// ТЗ
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. 
// Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону 
// елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй 
// CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з 
// документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>


import { galleryItems } from './gallery-items.js';

const imgEl= galleryItems
  .map(({preview, original, description}) => `<div class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} data-source=${original} alt=${description} /></a></div>`)
  .join("");

  
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML("beforeend", imgEl);


gallery.addEventListener('click', onLinkClick);



function onLinkClick(event) {
  event.preventDefault();

  if (event.target.classList.contains("gallery")) {
    return;
  }

  const closeModal = (event) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
  
  let instance = basicLightbox.create(`
  <img width="100%" height="100%" src=${event.target.dataset.source}>`, {
    onShow: (instance) => {
        window.addEventListener('keydown', closeModal);
    },
    onClose: (instance) => {window.removeEventListener('keydown', closeModal)}
})

instance.show()
}
























