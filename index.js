// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


// solution
const findOddNumber = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  return result;
}

console.log(findOddNumber([7]));
console.log(findOddNumber([0])); 
console.log(findOddNumber([1, 1, 2])); 
