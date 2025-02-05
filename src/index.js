import * as basicLightbox from 'basiclightbox';

import { nanoid } from 'nanoid';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
const model = {};

model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

console.log(model);

// model.customId = customAlphabet("qйцкнгнщгшлопррваівафячммть1234567890-_?@");
// console.log(model);

const infoToast = Toastify({
  text: 'HEllo WOrld',
  duration: 3000,
  // destination: 'https://google.com',
  // newWindow: true,
  close: true,
  gravity: 'top', // `top` or `bottom`
  position: 'left', // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: 'linear-gradient(to right, #00b09b, #96c93d)',
  },
  onClick: function () {
    console.log('Ви клікнули на алерт');
  }, // Callback after click
}).showToast();

import Chart from 'chart.js/auto';

(async function () {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
    { year: 2017, count: 33 },
    { year: 2018, count: 30 },
    { year: 2019, count: 37 },
    { year: 2020, count: 32 },
  ];

  new Chart(document.getElementById('acquisitions'), {
    type: 'line',
    data: {
      labels: data.map(row => row.year),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: data.map(row => row.count),
        },
      ],
    },
  });
})();

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

instance.show();
