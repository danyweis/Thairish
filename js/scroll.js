const navbar = document.querySelector('.navbar');
const aboutHidden = document.querySelector('.aboutHidden');
const height = document.documentElement.clientHeight;
const pic1 = document.querySelector('.picture1');
const pic2 = document.querySelector('.picture2');
const width = window.innerWidth;


window.onscroll = function () {
    let scrolled = window.scrollY;

    //  NAVBAR BACKGROUND

    if (scrolled >= 100) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }

    //  ABOUT EASE IN 

    if (width > 960 && scrolled >= height / 3) {
        aboutHidden.classList.add('aboutText')    
    } else if(width <= 960 && width > 720 && scrolled >= height/2){
        aboutHidden.classList.add('aboutText')
    }

    if(width > 960 && scrolled >= height/2) {
        pic1.classList.add('picture')
    } else if(width <= 960 && width > 720 && scrolled >= 150){
        pic1.classList.add('picture3')
        pic2.classList.add('picture')
    } 

    if(width > 960 && scrolled >= height) {
        pic2.classList.add('picture')
    }

}

