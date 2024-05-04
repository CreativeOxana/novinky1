const bodyElm = document.querySelector('body');
bodyElm.style.backgroundColor = '#e9e9e9';

const newsElm = document.querySelector('.news');
newsElm.style.backgroundColor = 'white';
newsElm.style.maxWidth = '60rem';

const titleElm = document.querySelector('h1');
titleElm.classList.add('news__title');
titleElm.textContent = 'Aktuální novinky';

const idElm = document.getElementById('zprava1');
idElm.classList.add('post--main');

const imgElm = document.querySelector('#zprava3 img');
imgElm.src = 'images/zprava3-novy.jpg';
