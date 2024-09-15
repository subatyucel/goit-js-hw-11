import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const input = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const gallery = document.getElementById('gallery');

const lightbox = new SimpleLightbox('.gallery li > a', {
  captionsData: 'alt',
  captionDelay: 250,
});

async function searchImages() {
  const loader = document.getElementById('loader');
  const q = input.value;
  const apiKey = '45978686-70839b27c443bdf6e9ef42e3a';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    gallery.innerHTML = '';
    loader.classList.remove('hidden');
    const response = await fetch(url);
    const data = await response.json();

    if (data.hits.length === 0) {
      iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      displayImages(data.hits);
    }
  } catch (error) {
    console.error('Hata:', error);
  } finally {
    loader.classList.add('hidden');
  }
}

function displayImages(images) {
  const galleryHtml = images.map(image => {
    return `
    <li class="card">
  <a href="${image.largeImageURL}">
    <img src="${image.webformatURL}" alt="${image.tags}" />
  </a>
  <div class="info">
    <p class="info-text"><b>Likes</b> ${image.likes}</p>
    <p class="info-text"><b>Views</b> ${image.views}</p>
    <p class="info-text"><b>Comments</b> ${image.comments}</p>
    <p class="info-text"><b>Downloads</b> ${image.downloads}</p>
  </div>
</li>
    
    `;
  });

  gallery.innerHTML = galleryHtml.join('');
  lightbox.refresh();
}

searchBtn.addEventListener('click', e => {
  e.preventDefault();

  searchImages();
});
