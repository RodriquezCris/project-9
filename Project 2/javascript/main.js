const header = document.querySelector("header"),
nav = document.querySelector("nav"),
modeToggle = document.querySelector(".dark-light"),
searchToggle = document.querySelector(".searchBox");

modeToggle.addEventListener("click", () => {
modeToggle.classList.Toggle("active");
header.classList.Toggle("dark");
});




// option 2


// modeToggle.addEventListener("click",() =>
// searchToggle = function toggleMode() {
//     // Toggle active class for modeToggle button
//     modeToggle.classList.toggle("active");

//     // Toggle dark class for header
//     header.classList.toggle("dark");
// });



// option 3


// const iframe = document.querySelectorAll('#slider iframe');
// const prevousIframe = document.getElementById("prev");
// const nextIframe = document. getElementById("next");

// let currentIndex = 0;

// function reset(){
//     for (let i=0; i,< iframe.length; i++) {
//       iframe[i].classList.remover('active')
//     }
// }

// function intializerSlider(){
//   reset();
//   iframe[currentIndex].classList.add('active');
//  }
// function sliderLeft(){
//   reset();
//   currentIndex--;
//   if(currentIndex <0){
//     currentIndex = iframe.lenght - 1;
//   }
//   iframe[currentIndex].classList.add('active')
// }


// option 4



// const header =  document.querySelector('header');
// const modeToggle = document.getElementById('mode-toggle');
// const modeStatus = document.querySelector('.mode-status');

// function toggleMode(){
//   header.ClassList.toggle('dark-mode') ?
//      'Dark Mode'
//     :"Light Mode"
  
//   modeStatus.innerText = "Currently in " + modeMessage;
// }
//   modeToggle.addEventListener ('click', toggleMode);