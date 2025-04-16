const newsList = document.getElementById('newsList');
const loadMoreButton = document.getElementById('load');

const fetchNews = async (sourse = 'techcrunch') => {
  try {
    console.log(sourse);
    const newsData = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=${sourse}&apiKey=2667a6ad789c4db2a2e882b6e2781cbb`
    );
    const { articles } = await newsData.json();

    makeHtml(articles);
  } catch (error) {}
};

fetchNews();
// document.addEventListener('DOMContentLoaded', fetchNews);

function makeHtml(news) {
  const markup = news
    .map(news1 => {
      return `<li class="news-item">
    <h1>${news1.title}</h1>
    <p>${news1.author}</p>
    <p>${news1.content}</p>
    </li>`;
    })
    .join();

  // newsList.innerHTML = markup;
  newsList.insertAdjacentHTML('beforeend', markup);
}

const pagination = async params => {
  const sources = ['aftenposten', 'ars-technica', 'bbc-news', 'techcrunch'];
  const randomSource = Math.floor(Math.random() * sources.length);
  await fetchNews(sources[randomSource]);
};
loadMoreButton.addEventListener('click', pagination);
