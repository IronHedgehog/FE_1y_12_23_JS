// const form = document.getElementById;

import debounce from 'debounce';
import { loadFromLocalStorage, save } from './localStorageModule';

const KEY_FOR_VALUES = 'KEYs';

// const form = document.getElementsByClassName('form')[0];
const form = document.querySelector('.form');
const inputName = document.querySelector('.inputName');
const inputEmail = document.querySelector('.inputEmail');
const textArea = document.querySelector('.comment');

console.log(form);

inputName.addEventListener(
  'input',
  debounce(e => {
    const value = e.target.value;
    save(KEY_FOR_VALUES, value);
  }, 350)
);

document.addEventListener('DOMContentLoaded', e => {
  inputName.value = loadFromLocalStorage(KEY_FOR_VALUES);
});
