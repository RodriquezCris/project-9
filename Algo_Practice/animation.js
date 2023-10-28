// function fadeInOut() {
//     var fadeTarget = document.querySelector('.fade');

//     setInterval(function () {
//         if (fadeTarget.style.opacity === '0') {
//             fadeTarget.style.opacity = '1';
//         } else {
//             fadeTarget.style.opacity = '0';
//         }
//     }, 2000);
// }

// fadeInOut();




// const boxes = document.querySelectorAll('.box')
// let isFading = false;
// boxes.forEach((box) => {
//     box.addEventListener('mouseover', () => {
//         if (!isFading){
//             const opacityValue = parseFloat(window.getComputedStyle(box).opacity)
//             let intervalId = null
//             box.classList.add('active')
//             clearInterval(intervalId)
//             intervalId = setInterval(()=>{
//                 if (opacityValue < .5){
//                     box.style.opacity = String(opacityValue + .1)
//                     }else{
//                         box.style.opacity = '.5'
//                         }
//                         }, 30)
//                         setTimeout(()=>{
//                             clearInterval(intervalId)
//                             box.classList.remove('active')
//                             isFading = false
//                             }, 700)
//                             isFading = true
//                             })}
//                           });
                        




  const boxes = document.querySelectorAll('.box')   

  window.addEventListener('scroll', check_animation)

  check_animation()
  function check_animation () {

    const trigger = window.innerHeight / 6 * 4;

    boxes.forEach(box => {

        const top = box.getBoundingClientRect().top

        if (trigger > top) {

            box.classList.add('show_content')

        } else {
            
            box.classList.remove('show_content')
        }
    })
  }   



