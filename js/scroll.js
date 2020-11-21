const navbar = document.querySelector('.navbar');
const aboutHidden = document.querySelector('.aboutHidden');
const height = document.documentElement.clientHeight;
const pic1 = document.querySelector('.picture1');
const pic2 = document.querySelector('.picture2');
const width = window.innerWidth;
const backup = document.querySelector('.backUp');





window.onscroll = function () {
    let scrolled = window.scrollY;

    //  NAVBAR BACKGROUND

    if (scrolled >= 100 && width >= 720) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }

    //  ABOUT EASE IN 

    if (width > 960 && scrolled >= height / 3) {
        aboutHidden.classList.add('aboutText')
    } else if (width <= 960 && width > 720 && scrolled >= height / 2) {
        aboutHidden.classList.add('aboutText')
    } else if(scrolled >= 200){
        aboutHidden.classList.add('aboutText')
    }

    if (width > 960 && scrolled >= height / 2) {
        pic1.classList.add('picture')
    } else if (width <= 960 && width > 720 && scrolled >= 150) {
        pic1.classList.add('picture3')
        pic2.classList.add('picture')
    } else if (scrolled >= 100){
        pic1.classList.add('picture')
    }

    if (width > 960 && scrolled >= height) {
        pic2.classList.add('picture')
    }


// BACKUP
    if (scrolled >= height / 2){
        backup.classList.add('backUpActive');
    } else {
        backup.classList.remove('backUpActive')
    }

}


const navSlide = () => {
    const burgerBox = document.querySelector('.burgerBox');
    const linkList = document.querySelector('.linkList');
    const link = document.querySelectorAll('.linkList li a');

    let closing = () => { link.forEach(function (x, index) {
        if (x.style.animation) {
            x.style.animation = "";
        } else {
            x.style.animation = `linkMove 0.5s ease-in forwards ${index / 7 + 0.2}s`
        }
    });
}


    burgerBox.addEventListener('click', function () {

        linkList.classList.toggle('navActive')

        closing()

        burgerBox.classList.toggle('burger');

    });

    linkList.addEventListener('click', function() {
        linkList.classList.toggle('navActive');

        closing()

        burgerBox.classList.toggle('burger');
    });
};



navSlide();