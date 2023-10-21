// alert ("Quiz Time");
$(".a1").on("click", function() {
    $(".feedback").text("Wrong Answer. Sushi comes from Japan. A traditional appetizer or main course, it features vinegared rice, cooked or raw seafood, vegetables and seaweed.");
    if ($(this).is("wrongAnswer")); 
        $(this).css({"background-color": "red"});        
});



$(".a2").on("click", function() {
    $(".feedback").text("You are Correct. course, it features vinegared rice, cooked or raw seafood, vegetables and seaweed.");
    if ($(this).is("Rightnswer")); 
    $(this).css({"background-color": "green"});      
    
});


$(".a3").on("click", function() {
    $(".feedback").text("Wrong Answer. Sushi comes from Japan. A traditional appetizer or main course, it features vinegared rice, cooked or raw seafood, vegetables and seaweed.");
    if ($(this).is("wrongAnswer")); 
    $(this).css({"background-color": "red"});      
    
});


$(".a4").on("click", function() {
    $(".feedback").text("Wrong Answer. Sushi comes from Japan. A traditional appetizer or main course, it features vinegared rice, cooked or raw seafood, vegetables and seaweed.");
    if ($(this).is("wrongAnswer")); 
    $(this).css({"background-color": "red"});      
    
});

function showPopup(message) {
    const popup = document.createElement("div");
    popup.classList.add('popup');
      popup.textContent = message;
              
    document.body.appendChild(popup);
    
  
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 2000);


    i

  }
  
  
 function showPopup(message) {
    $(".feedback").css("background-color", message.includes("correct") ? "green" : "red");
    $(".feedback").text(message);
    setTimeout(() => {
       $(".feedback").text("");
    }, 3000);
   };
  
  
  function checkAnswer(element) {
   var currentAnswer = element.value;
   if (currentAnswer === correctAnswer) {
      showPopup("correct answer!");
   } else {
      showPopup("Wrong answer!");
   }
  };
  
  


// let question = [
//     {
//         id: 1,
//         questionText:"What country is sushi from?",
//         answer: "Japan",
//         answerOptions:["Thailand", "Japan", "India" , "France "]
      
//         if (answer1 === correct_answer1) {
//             console.log("you got it correct")
//             correctAnswers++;
        
//         }
//         else{
//             console.log("Sorry, that's incorrect.")
//         }
        
    
//     },


// {
//     id: 2,
//     question:"Which is the World's most populous country?",
//     answer: "China",
//     answerOptions:[
//         "China",
//         "America",
//          "India" ,
//          "Brazil"
//         ]
//         if (answer3 === correct_aswer3) {
//             console.log("you got it correct")
//             correctAnswers++;
        
//         }
//         else{
//             console.log("Sorry, that's incorrect.")
//         }
        
// },

// {
//     id: 3,
//     questionText:"According to the Old Testament, how many days did it take God to create the world??",
//     answer: "6",
//     answerOptions:["1", "6", "7" , "11 "]
    
// },
// {
//     id: 4,
//     questionText:"Which is the world's most populous country?",
//     answer: "china",
//     answerOptions:["China", "Japan", "United States" ,"Italy "]
    

// },
// {
//     id: 5,
//     questionText:"About what percentage of the earth's surface is water?",
//     answer: "70%",
//     answerOptions:["10%", "50%", "70%" , "95%"]
  

// },

// {
//     id: 6,
//     questionText:"Is Washington, D.C. a state?",
//     answer: "yes",
//     answerOptions:["No", "Yes" ]
    

// },

// {
//     id: 7,
//     questionText:"Is Washington, D.C. a state?",
//     answer: "For bacterial infections",
//     answerOptions:["For viruses", "For bacterial infections", "Never" , "Whenever you feel sick"]

// },

// {
//     id: 8,
//     questionText:"Is is true that the shape of a pregnant belly can help parents predict the sex of their baby?",
//     answer: "No",
//     answerOptions:["No", "Yes"]
    

// },

// {
//     id: 9,
//     questionText:"Is Africa a country?",
//     answer: "No",
//     answerOptions:["No", "Yes"]
    

// },

// {
//     id: 10,
//     questionText:"Why are French, Spanish and Italian called Romance languages?",
//     answer: "They have roots in Latin, which was spoken by Romans.",
//     answerOptions:[
//     "They have roots in Latin, which was spoken by Romans.", 
//     "They are only spoken by the Romani.",
//     "They were spread by those who roam.",
//     "None of these."]

// },
// ];

// let question_count = 0;
// let point = 0;


// window.onload =function(){
// show(question_count);
// };

// function show(count){
//     let question = document.getElementById("questions");
//     let[first, second, third, fourth] = questions[count].options;

//     question.innerHTML = '<h2>Q${count + 1}. ${questions[count].question}</h2>
//     <ul class= "option_group">
//         <li class="option">${first}</li>
//         <li class="option">${second}</li>
//         <li class="option">${third}</li>
//         <li class="option">${fourth}</li> 
//     </ul>';
//     ToggleActive();
// }


// function ToggleActive(){
//     let option = document.querySelectorAll("li.option");
//     for(let i=0; i <option.length; i++){
//         option[i].onclick = function(){
//             for(let i=0; i< option.length; i++){
//               if(option[i].classList.contains("active")){
//                 option[i].classList.remove("active");
//                }     
//             }           
//             option[i].classList.add("active"); 
//         }
//     }
// }

//  function next(){
//     if (question_count == questions.length -1) {
//         location.href = "trivia.html";
//         alert ("You have reached the end of this quiz!");
//         return false;}
//         else{
//             question_count++;
//                         console.log(`Question count is now ${question_count}`);
//                         console.log(`${questions[question_count]}`)
//                             console.table(questions[question_count]);
//                         console.log(questions[question_count])
//             show(question_count);
//             }
//     }
//     // console.log(question_count);

//     // let user_answer =  document.querySelector("li.option.active").innerHTML;

//     // if(user_answer == question[question_count].answer){
//     //     point +=10;
//     //     sessionStorage.setItem("points", point);
//     // }
//     //     console.log(point);
//     //     question_count++;     
//     //     show(question_count);

//     //     }
