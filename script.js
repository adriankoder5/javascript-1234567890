// const header = document.querySelector('h1');
// console.log(header);
// const section = document.querySelector('.container');
// console.log(section);
// const newText = document.querySelector('#txtButton');
// console.log(newText);

let parent = document.querySelector('.container');
let newDiv = document.createElement('p');
newDiv.textContent = 'some text test';
parent.appendChild(newDiv);
console.log(newDiv);
// let listBox = document.querySelector('input');

let newHeader = document.querySelector('h1');
newHeader.textContent = 'nytext';

let addText = document.querySelector('#txtBtn');
addText.addEventListener('click', () => {
  let newTxt = document.querySelector('p');
  newTxt.textContent = 'clicket';
  addText.textContent = 'clicket';
});

let addList = document.querySelector('#listBtn');
addList.addEventListener('click', () => {
  let newList = document.createElement('ul');
  newList.textContent = 'list';
  parent.appendChild(newList);
});

let input = document.querySelector('#addText');
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    let newInput = document.createElement('p');
    newInput.textContent = 'okokokokokokokokokok';
    parent.appendChild(newInput);
  }
});
