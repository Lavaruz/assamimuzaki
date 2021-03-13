const pAbout = document.querySelector('.about');
const pPorto = document.querySelector('.portfolio');
const pSocial = document.querySelector('.social');

const anakA= document.querySelectorAll('.anakA');


const tombol = document.querySelectorAll('.item-bawah');


tombol[0].addEventListener('click', function(e){
    pAbout.style.display = 'none';
    pSocial.style.display = 'none';
    pPorto.removeAttribute('style');
    
    e.preventDefault();
});
tombol[1].addEventListener('click', function(e){
    pPorto.style.display = 'none';
    pSocial.style.display = 'none';
    pAbout.removeAttribute('style');

    e.preventDefault();
});
tombol[2].addEventListener('click', function(e){
    pPorto.style.display = 'none';
    pAbout.style.display = 'none';
    pSocial.removeAttribute('style');

    e.preventDefault();
});
