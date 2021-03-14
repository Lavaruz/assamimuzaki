const pAbout = document.querySelector('.about');
const pPorto = document.querySelector('.portfolio');
const pSocial = document.querySelector('.social');
const logo = document.querySelector('.logo h1');
const contact = document.querySelector('.box-nav');
const tombol = document.querySelectorAll('.item-bawah');




logo.addEventListener('click',function(){
    pPorto.style.display = 'none';
    pSocial.style.display = 'none';
    pAbout.removeAttribute('style');

    e.preventDefault();

});

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
