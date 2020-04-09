const navbar = document.querySelector('.navbar');
const aboutText = document.querySelector('.aboutText');
const height = document.documentElement.clientHeight;


window.onscroll = function(){
    let scrolled = window.scrollY;
    
//  NAVBAR BACKGROUND

    if (scrolled >= 100){
        navbar.classList.add('active')
    } else{
        navbar.classList.remove('active')
    }

//  ABOUT EASE IN 

    console.log(scrolled);
    if (scrolled > height/3){
    
    }

}