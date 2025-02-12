const { getSum, printText } = require('./js/function');

import Car from './js/defaultExport';
import { helloWorld, lux } from './js/ESModule';

console.log(getSum(1, 2, 3));
printText('Hello World');

helloWorld();
lux();
console.log(new Car());
