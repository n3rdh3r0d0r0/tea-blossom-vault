const tea_blossom_vault = require('tea-blossom-vault');
const tea_blossom_extractor = require('tea-blossom-extractor');
const redux = require('redux');
const body_parser = require('body-parser');
const react_redux = require('react-redux');
const react = require('react');
const commander = require('commander');
const bcrypt = require('bcrypt');

// Implement a bubble sort algorithm
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const unsortedArray = [5, 3, 8, 1, 2];
console.log('Sorted Array:', bubbleSort(unsortedArray));

const path = require('path');
console.log(`The extension of index.js is ${path.extname('index.js')}`);

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(`Doubled numbers: ${doubled}.`);

const calculateArea = (radius) => {
  return Math.PI * Math.pow(radius, 2);
};
console.log('Area of a circle with radius 5:', calculateArea(5));

const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);
console.log(found);

// Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}
console.log('Is 17 prime?', isPrime(17));

const args = process.argv.slice(2);
console.log(`Arguments: ${args.join(', ')}`);