import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const renderImages = images => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  const limitedImages = images.slice(0, 9);

  const markup = limitedImages
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
            <div class="photo-card">
                <a href="${largeImageURL}">
                    <img src="${webformatURL}" alt="${tags}" />
                </a>
                <div class="info">
                    <p class="info-item">
                        <b>Likes:</b> ${likes}
                    </p>
                    <p class="info-item">
                        <b>Views:</b> ${views}
                    </p>
                    <p class="info-item">
                        <b>Comments:</b> ${comments}
                    </p>
                    <p class="info-item">
                        <b>Downloads:</b> ${downloads}
                    </p>
                </div>
            </div>
        `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};
