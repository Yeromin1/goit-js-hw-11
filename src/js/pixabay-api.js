const API_KEY = '46731834-56edab6cfae067b8e4143ec91';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error fetching images');
      }
      return response.json();
    })
    .then(data => data.hits);
};
