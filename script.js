// scroll event
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll',function(){
    // get total height
    let docElem = document.documentElement;
    // set the current height from document height
    let scrollPos = docElem.scrollTop;
    if(scrollPos > 20){
        // add a new class name to give a sticky in the navbar class
        navbar.classList.add('sticky');
    }else{
        // remove the class name
        navbar.classList.remove('sticky');
    }
});

// navbar section
const navbarAppear = document.querySelector('.navbar .navbar-menu'),
menuBtnIcon1 = document.querySelector('.navbar-menu-btn'),
menuBtnIcon2 = document.querySelector('.navbar-menu-btn i');
// active addEventListener when clicking menu bar
menuBtnIcon1.addEventListener('click',function(){
    // navbar menu appear when its active
    navbarAppear.classList.toggle('active');
    // change the icon
    menuBtnIcon2.classList.toggle('active');
});

// slide event
let sliderContainer = document.getElementsByClassName('slider-container'),
slides = document.getElementsByClassName('slide'),
slideCount = slides.length,
currentIndex = 0,
navPrev = document.getElementById('prev'),
navNext = document.getElementById('next');

// set disabled as a default
navPrev.classList.add('disabled');

// set a page number by how many class has
for(var i=0; i<slideCount;i++){
    // one page per 100% to right
    slides[i].style.left=i*100+'%';
}

// by clicking the event give value to currentIndex and call function
navPrev.addEventListener('click',function(event){
    // -1 by clicking navPrev link
    goToSlide(currentIndex-1);
});
navNext.addEventListener('click',function(event){
    // +1 by clicking navNext link
    goToSlide(currentIndex+1);
});

function goToSlide(idx){
    // move the slide by 100% each
    sliderContainer[0].style.left = idx * -100 + '%';
    // set current view page
    currentIndex=idx;
    // call a function
    updateNav();
}
// a function for if the current page hit the front or end
function updateNav(){
    // abled or disabled when currentIndex is 0 or last number
    // add disabled = make invisible ; remove disabled = make visible  
    if(currentIndex==0){
        navPrev.classList.add('disabled');
    }else{
        navPrev.classList.remove('disabled');
    }
    if(currentIndex==slideCount-1){
        navNext.classList.add('disabled');
    }else{
        navNext.classList.remove('disabled');
    }
}
