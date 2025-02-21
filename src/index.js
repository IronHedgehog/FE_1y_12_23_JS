// import { comments } from './js/coments';
import Handlebars from 'handlebars';
import { data } from './js/data';
import { heroes } from './js/heroes';

// const template = document.querySelector('#template').innerHTML.trim();
// const newTemplate = document.getElementById('temp').innerHTML.trim();

// const object = {
//   title: 'qweqwe',
//   text: 'asdasd',
// };

// console.log(template);

// const shablon = Handlebars.compile(template);
// console.log(shablon(object));

// document.body.insertAdjacentHTML('beforeend', shablon(object));

// const newShablon = Handlebars.compile(newTemplate);

// document.body.insertAdjacentHTML(
//   'beforeend',
//   newShablon({ comments: comments })
// );

const template = document.getElementById('data').innerHTML.trim();

console.log(template);

const dataTemplate = Handlebars.compile(template);

console.log(dataTemplate);
console.log(data);
console.log(dataTemplate({ data: data }));

// document.body.insertAdjacentHTML('beforeend', dataTemplate({ data: data }));

const heroesTempalte = document.getElementById('heroes').innerHTML.trim();

console.log(heroesTempalte);

const heroesShablon = Handlebars.compile(heroesTempalte);
console.log(heroes);
console.log(heroesShablon({ heroes }));

document.body.insertAdjacentHTML('beforeend', heroesShablon({ heroes }));
