'use strict';

const inputText = document.querySelector('.user-text');
const addBtn = document.querySelector('.btn-add');
const textArea = document.querySelector('.text-area');

addBtn.addEventListener('click', function () {
  const text = inputText.value;
  if (inputText.value === '') {
    alert('Please write something...');
  } else {
    let newItem = document.createElement('div');
    newItem.classList.add('new');
    newItem.innerHTML = `
    <span class="new">
    <p class="new-text">${text}</p>
    <i class="fa-regular fa-x "></i>
  </span>
  <i class="fa fa-check"></i>
    `;
    textArea.appendChild(newItem);
    inputText.value = '';
  }
});
textArea.addEventListener('click', function (e) {
  if (e.target.classList.contains('fa-x'))
    e.target.parentElement.classList.add('hidden');
  else if (e.target.classList.contains('fa-check')) {
    e.target.parentElement.classList.toggle('complete');
  }
});
