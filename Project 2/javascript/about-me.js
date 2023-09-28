const images = document.querySelector('#slider img');
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById('next');

let currentIndex = 0;

function reset(){
    for (let i=0; i < images.length; i++){
        images[i].classList.remover('active');
    }
}

function initializeSlider(){
    reset();
    images[currentIndex].classList.add('active');
}

function slideLeft(){
    reset();
    currentIndex --;
    if(currentIndex < 0){
        currentIndex = images.length -1;
    }
    images[currentIndex].classList.add('active');
}
function slideRight (){
    reset();
    currentIndex ++;
    if (currentIndex >= images.length){
        currentIndex = 0;
    }
    images[currentIndex].classList.add('active');
}
initializeSlider ();
previousImage.addEventListener('click',function() {
    slideLeft();
});
nextImage.addEventListener('click', function(){
    slideRight();
});


// const slider = document.querySelector('.slider');
// const images = slider.querySelectorAll('img');

// let currentImage = 0;

// function nextImage() {
//   currentImage++;

//   if (currentImage >= images.length) {
//     currentImage = 0;
//   }

//   slider.style.backgroundImage = `url(${images[currentImage].src})`;
// }

// function previousImage() {
//   currentImage--;

//   if (currentImage < 0) {
//     currentImage = images.length - 1;
//   }

//   slider.style.backgroundImage = `url(${images[currentImage].src})`;
// }

// document.querySelector('.next').addEventListener('click', nextImage);
// document.querySelector('.previous').addEventListener('click', previousImage);