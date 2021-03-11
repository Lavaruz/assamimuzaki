const boxJudul = document.querySelector('.judul');
const textH1 = document.querySelector('.judul h1');
const boxPara = document.querySelector('.paragraph');
const textPara = document.querySelector('.paragraph p');
const button = document.querySelector('.btn');
const body = document.querySelector('body');

let user = prompt('Masukan Nama : ');
textPara.innerHTML = 'Hay '+user+' my name is Assami Muzaki and this is my portfolio';

// button.addEventListener('click', function (e) {
//     boxJudul.classList.toggle('darkBox');
//     boxPara.classList.toggle('darkBox');
//     textH1.classList.toggle('darkText');
//     textPara.classList.toggle('darkText');
//     body.classList.toggle('darkBody');    
//     e.stopPropagation();
//     e.preventDefault();
//     // button.innerHTML='Light Mode';
//     // button.classList.toggle('darkBox');
// })

