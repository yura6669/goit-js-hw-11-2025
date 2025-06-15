import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');

export function createGallery(images) {
  const markup = images.map(image => createImageMarkup(image)).join('');
  galleryContainer.innerHTML = markup;

  const lightbox = new simpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: false,
  });
  lightbox.refresh();

  return lightbox;
};

export function clearGallery() {
  galleryContainer.innerHTML = '';
  // const lightbox = simpleLightbox.instances[0];
  // if (lightbox) {
  //   lightbox.destroy();
  // }
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('hidden');
  }
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('hidden');
  }
}

function createImageMarkup({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${largeImageURL}">
      <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b> <span>${likes}</span>
          </p>
          <p class="info-item">
          <b>Views</b> <span>${views}</span>
          </p>
          <p class="info-item">
          <b>Comments</b> <span>${comments}</span>
          </p>
          <p class="info-item">
          <b>Downloads</b> <span>${downloads}</span>
          </p>
          </div>
          </li>`;
}