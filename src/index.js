const newsList = document.getElementById('newsList');
const pagList = document.querySelector('.pagination-list');
const loadMoreButton = document.getElementById('load');

// const fetchNews = async (sourse = 'techcrunch') => {
//   try {
//     console.log(sourse);
//     const newsData = await fetch(
//       `https://newsapi.org/v2/top-headlines?sources=${sourse}&apiKey=2667a6ad789c4db2a2e882b6e2781cbb`
//     );
//     const { articles } = await newsData.json();

//     makeHtml(articles);
//   } catch (error) {}
// };

// fetchNews();
// // document.addEventListener('DOMContentLoaded', fetchNews);

// function makeHtml(news) {
//   const markup = news
//     .map(news1 => {
//       return `<li class="news-item">
//     <h1>${news1.title}</h1>
//     <p>${news1.author}</p>
//     <p>${news1.content}</p>
//     </li>`;
//     })
//     .join();

//   // newsList.innerHTML = markup;
//   newsList.insertAdjacentHTML('beforeend', markup);
// }

// const pagination = async params => {
//   const sources = ['aftenposten', 'ars-technica', 'bbc-news', 'techcrunch'];
//   const randomSource = Math.floor(Math.random() * sources.length);
//   await fetchNews(sources[randomSource]);
// };
// loadMoreButton.addEventListener('click', pagination);

const url = 'https://rickandmortyapi.com/api';
let page = 2;

const fetchMovieCharacters = async (page = 1) => {
  try {
    const newsData = await fetch(`${url}/character?page=${page}`);
    const { results, info } = await newsData.json();
    makeHtml(results, info.pages);
  } catch (error) {}
};

function makePagination(countOfPages) {
  const numbers = [];
  for (let i = 1; i <= countOfPages; i++) {
    numbers.push(i);
  }
  renderPagination(numbers);
}

fetchMovieCharacters(page);

function renderPagination(numbers) {
  const markup = numbers
    .map(number => {
      return `<li class="pag-item">
    <a class="pag-link">${number}</a>
    </li>`;
    })
    .join();

  pagList.innerHTML = markup;
  // pagList.insertAdjacentHTML('beforeend', markup);
}

function makeHtml(characters, numberOfPages) {
  const markup = characters
    .map(character => {
      return `<li class="news-item">
    <img src="${character.image}" />
    <h1>${character.name}</h1>
    <p>${character.species}</p>
    <p>${character.status}</p>
    </li>`;
    })
    .join();
  makePagination(numberOfPages);

  newsList.innerHTML = markup;
  // newsList.insertAdjacentHTML('beforeend', markup);
}

loadMoreButton.addEventListener('click', async () => {
  page++;
  console.log(page);
  // page += 1;
  // page = page + 1;
  fetchMovieCharacters(page);
});

pagList.addEventListener('click', async e => {
  if (!e.target.classList.contains('pag-link')) return;
  page = Number(e.target.textContent);

  fetchMovieCharacters(page);
});
