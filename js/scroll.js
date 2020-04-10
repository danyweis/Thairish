const navbar = document.querySelector('.navbar');
const aboutHidden = document.querySelector('.aboutHidden');
const height = document.documentElement.clientHeight;
const pic1 = document.querySelector('.picture1');
const pic2 = document.querySelector('.picture2');


window.onscroll = function () {
    let scrolled = window.scrollY;

    //  NAVBAR BACKGROUND

    if (scrolled >= 100) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }

    //  ABOUT EASE IN 

    if (scrolled >= height / 3) {
        aboutHidden.classList.add('aboutText')    
    }

    if(scrolled >= height/2) {
        pic1.classList.add('picture')
    }

    if(scrolled >= height) {
        pic2.classList.add('picture')
    }

}

