import axios from 'axios';
import debounce from 'debounce';
// async - ця функція буде асинхронною
const getImgs = async valueFromSearchInput => {
  // const img = fetch(
  //   'https://pixabay.com/api/?key=37133631-8f51e9c6f744fc90bf0fea549&q=yellow+flowers&image_type=photo'
  // );
  // console.log(img);
  // img
  //   .then(value => {
  //     return value.json();
  //   })
  //   .then(date => {
  //     console.log(date);
  //   });
  // async await
  // try catch
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?key=37133631-8f51e9c6f744fc90bf0fea549&q=${valueFromSearchInput}&image_type=photo`
    );

    makeHtml(data.hits);
  } catch (error) {
    console.log(error);
  }
};

const searchInput = document.getElementById('query');
const imgsList = document.querySelector('.imgs-list');

searchInput.addEventListener('input', debounce(searchPhotos, 250));

function searchPhotos(e) {
  const value = searchInput.value;
  getImgs(value);
}

function makeHtml(imgs) {
  const markup = imgs
    .map(img => {
      return `<li class="imgs-item">
    <img class="img" src="${img.webformatURL}"/>
    </li>`;
    })
    .join();
  imgsList.innerHTML = markup;
  // imgsList.insertAdjacentHTML('beforeend', markup);
}

{
  collections: 545;
  comments: 61;
  downloads: 56825;
  id: 5339659;
  imageHeight: 5821;
  imageSize: 3762562;
  imageWidth: 3873;
  likes: 377;
  previewHeight: 150;
  previewWidth: 100;
  tags: 'church window, monastery, window, stained glass, middle ages, stained glass window, church window, window, window, window, window, window, stained glass';
  type: 'photo';
  user: 'Paul_Henri';
  user_id: 6735189;
  views: 78873;
  webformatHeight: 640;
  webformatURL: 'https://pixabay.com/get/g36fcf0a526fe4f25957a1a53c50cd751ce0a0815d4ca169b43c0c8593591a7a52e520b0469e136da1a4d33cf0e7e41fd02044689f4e236df9f00e0c0064e43cd_640.jpg';
  webformatWidth: 426;
}
