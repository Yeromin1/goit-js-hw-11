import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const form = document.querySelector('#search-form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const queryInput = form.elements.query;
  const query = queryInput.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  queryInput.value = '';
  loader.classList.remove('hidden');

  fetchImages(query)
    .then(images => {
      renderImages(images);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images.',
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
});
