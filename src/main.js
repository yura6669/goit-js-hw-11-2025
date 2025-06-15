import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = searchForm.elements["search-text"].value;
  if (!query) {
    showError('Please enter a search query.');
    return;
  }

  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      showError('Sorry, there are no images matching your search query. Please try again!');
      hideLoader();
      event.target.reset();
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    showError('An error occurred while fetching images. Please try again later.');
  } finally {
    hideLoader();
  }

  event.target.reset();
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