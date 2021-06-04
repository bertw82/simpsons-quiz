
let score = 0;
let rank = '';

const main = document.querySelector('main');
const quiz = [
    'Which character says "D\'oh"?',
    'Which character rides a skateboard?',
    'Fill in this sentence: "Mr.______owns the Nuclear Power Plant.',
    'Which character plays the saxophone?',
    'Which character is Principal of the elementary school?'
];

// generate questions
function generateQuestion(question, index) {
    const num = parseInt(index);
    const quizQuestion = `
        <div>
            <label>${num + 1}. ${question}</label>
            <input text="text" name="question-input" id="question-${index}">
        </div>
    `;
    main.insertAdjacentHTML('beforeend', quizQuestion);
}

for (let i = 0; i < quiz.length; i++){
    console.log('whats up');
    generateQuestion(quiz[i], [i]);
}

// check answers


// main.innerHTML = `

// `;

// const questionOne = prompt();
// if ( questionOne.toUpperCase() === 'HOMER' ) {
//        score += 1; 
// }
// const questionTwo = prompt();
// if ( questionTwo.toUpperCase() === 'BART' ) {
//        score += 1;
// }   
// const questionThree = prompt();
// if ( questionThree.toUpperCase() === 'BURNS' ) {
//        score += 1;
// }   
// const questionFour = prompt();
// if ( questionFour.toUpperCase() === 'LISA' ) {
//        score += 1;
// }   
// const questionFive = prompt();
// if ( questionFive.toUpperCase() === 'PRINCIPAL SKINNER' || questionFive.toUpperCase() === 'SKINNER' || questionFive.toUpperCase() === 'SEYMOUR SKINNER' ) {
//        score += 1;
// }                        
     

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
                           
// if ( score === 5 ) {
//    rank = 'Gold';  
//    main.innerHTML = `<h2>You got ${score} answers correct</h2>
//                   <p>You have earned: ${rank}</p>
//                   <img src="https://vignette.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest?cb=20140126234206" 
//                   alt="Homer Simpson">` ;
// } else if ( score >= 3 ) {
//   rank = 'Silver'; 
//   main.innerHTML = `<h2>You got ${score} answers correct</h2>
//                   <p>You have earned: ${rank}</p>
//                   <img src="https://vignette.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png/revision/latest?cb=20190409004756" 
//                   alt="Bart Simpson">`;
// } else if ( score >= 1 ) {
//    rank = 'Bronze'; 
//    main.innerHTML = `<h2>You got ${score} answers correct</h2>
//                   <p>You have earned: ${rank}</p>
//                   <img src="https://vignette.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png/revision/latest?cb=20190409004811"
//                   alt="Lisa Simpson">`; 
// } else {
//   rank = 'No Crown';    
//   main.innerHTML = `<h2>You got ${score} answers correct</h2>
//                   <p>You have earned: ${rank}</p>
//                   <img src="https://vignette.wikia.nocookie.net/simpsons/images/a/a7/Montgomery_Burns.png/revision/latest?cb=20100602062705"
//                   alt="Mr. Burns">`;
// }