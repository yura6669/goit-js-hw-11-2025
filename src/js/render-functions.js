import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');

export function createGallery(images, isUpdate = false) {
  const markup = images.map(image => createImageMarkup(image)).join('');
  if (isUpdate) {
    galleryContainer.insertAdjacentHTML('beforeend', markup);
  } else {
    galleryContainer.innerHTML = markup;
  }

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

export function showLoadMoreButton() {
  const loadMoreButton = document.querySelector('.load-more');
  if (loadMoreButton) {
    loadMoreButton.classList.remove('hidden');
  }
}

export function hideLoadMoreButton() {
  const loadMoreButton = document.querySelector('.load-more');
  if (loadMoreButton) {
    loadMoreButton.classList.add('hidden');
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