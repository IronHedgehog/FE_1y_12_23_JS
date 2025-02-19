import Handlebars from 'handlebars';
import { comments } from './js/coments';

const template = document.querySelector('#template').innerHTML.trim();
const newTemplate = document.getElementById('temp').innerHTML.trim();

const object = {
  title: 'qweqwe',
  text: 'asdasd',
};

console.log(template);

const shablon = Handlebars.compile(template);
console.log(shablon(object));

document.body.insertAdjacentHTML('beforeend', shablon(object));

const newShablon = Handlebars.compile(newTemplate);

document.body.insertAdjacentHTML(
  'beforeend',
  newShablon({ comments: comments })
);
