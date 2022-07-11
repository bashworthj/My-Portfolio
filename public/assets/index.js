const aboutBut = document.querySelector('#aboutBut');
const portBut = document.querySelector('#portBut');
const resBut = document.querySelector('#resBut');
const contactBut = document.querySelector('#contactBut');

const aboutState = document.querySelector('.about');
const portState = document.querySelector('.portfolio');
const resState = document.querySelector('.resume');
const contactState = document.querySelector('.contact');

function about (){
  aboutState.style.display = 'block';
  portState.style.display = 'none';
  resState.style.display = 'none';
  contactState.style.display = 'none';
}

function port (){
  aboutState.style.display = 'none';
  portState.style.display = 'block';
  resState.style.display = 'none';
  contactState.style.display = 'none';
}
function res (){
  aboutState.style.display = 'none';
  portState.style.display = 'none';
  resState.style.display = 'block';
  contactState.style.display = 'none';
}
function contact (){
  aboutState.style.display = 'none';
  portState.style.display = 'none';
  resState.style.display = 'none';
  contactState.style.display = 'block';
}
aboutBut.addEventListener('click', about)
portBut.addEventListener('click', port);
resBut.addEventListener('click', res);
contactBut.addEventListener('click', contact);