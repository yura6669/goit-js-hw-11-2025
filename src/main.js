import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');

let page = 1;
let query = '';
let totalHits = 0;
let hits = [];

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  query = searchForm.elements["search-text"].value;
  if (!query) {
    showError('Please enter a search query.');
    return;
  }

  page = 1;
  totalHits = 0;
  hideLoadMoreButton();

  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(query);
    totalHits = data.totalHits;
    hits = data.hits;
    if (hits.length === 0) {
      showError('Sorry, there are no images matching your search query. Please try again!');
      hideLoader();
      event.target.reset();
      return;
    }

    createGallery(hits);
    if (totalHits > 15) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    showError('An error occurred while fetching images. Please try again later.');
  } finally {
    hideLoader();
  }

  event.target.reset();
});

loadMoreButton.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    if (data.hits.length === 0) {
      showError('No more images found.');
      hideLoadMoreButton();
      return;
    }

    hits = [...hits, ...data.hits];

    createGallery(hits);

    let card = document.querySelector('.gallery__item');
    let rect = card.getBoundingClientRect();
    window.scrollBy({
      top: rect.height * 2,
      behavior: 'smooth'
    });

    if (page * 15 >= totalHits) {
      hideLoadMoreButton();
      showMessage("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    showError('An error occurred while loading more images. Please try again later.');
  } finally {
    hideLoader();
  }
});

function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
    timeout: 3000,
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
    close: true,
    color: '#EF4040',
    titleColor: '#FAFAFB',
    messageColor: '#FAFAFB',
    iconColor: '#FAFAFB',
  });
}

function showMessage(message) {
  iziToast.info({
    title: 'Info',
    message: message,
    position: 'topRight',
    timeout: 3000,
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
    close: true,
    color: '#4CAF50',
    titleColor: '#FAFAFB',
    messageColor: '#FAFAFB',
    iconColor: '#FAFAFB',
  });
}