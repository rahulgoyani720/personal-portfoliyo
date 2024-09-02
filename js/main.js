const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');


document.getElementById('hamburger').addEventListener('click',function () {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('show');
});

