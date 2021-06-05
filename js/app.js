
let score = 0;
let rank = '';

const main = document.querySelector('main');
const quiz = [
    { 
        question: 'Which character says "D\'oh"?',
        choices: {
            a: 'Marge',
            b: 'Homer',
            c: 'Krusty the Klown'
        },
        answer: 'b'
    },
    {
        question: 'Which character rides a skateboard?',
        choices: {
            a: 'Milhouse',
            b: 'Chief Wiggum',
            c: 'Bart'
        },
        answer: 'c'
    },
    {
        question: 'Which character owns the Nuclear Power Plant?',
        choices: {
            a: 'Mr. Burns',
            b: 'Kent Brockman',
            c: 'Mayor Quimby'
        },
        answer: 'a'
    },
    {
        question: 'Which character plays the saxophone?',
        choices: {
            a: 'Uter',
            b: 'Ralph Wiggum',
            c: 'Lisa'
        },
        answer: 'c'
    },
    {
        question: 'Which character is Principal of the elementary school?',
        choices: {
            a: 'Ned Flanders',
            b: 'Seymour Skinner',
            c: 'Mrs. Krabapple'
        },
        answer: 'b'
    }
];

// generate question function
function generateQuestion(array, index) {
    const num = parseInt(index) + 1;
    const quizQuestion = `
        <div>
            <h2>${num}. ${array.question}</h2>
            <div class="question">
                <input type="radio" name="question-${num}" class="question-${index}" value="a">
                <label>${array.choices.a}<label>
            </div>
            <div class="question">
                <input type="radio" name="question-${num}" class="question-${index}" value="b">
                <label>${array.choices.b}</label>
            </div>
            <div class="question">
                <input type="radio" name="question-${num}" class="question-${index}" value="c">
                <label>${array.choices.c}</label>
            </div> 
        </div>
    `;
    main.insertAdjacentHTML('beforeend', quizQuestion);
}

// loop to generate questions html
for (let i = 0; i < quiz.length; i++){
    generateQuestion(quiz[i], [i]);
}

// insert submit button
const submitBtn = `
<div class="button-div">
    <button id="submitBtn">Submit</button>
</div>`;
main.insertAdjacentHTML('afterend', submitBtn);

// check answers
function checkHelper(question, index) {
    for (let i = 0; i <question.length; i++) {
        if (question[i].checked) {
            const answer = question[i].value;
            if (answer === quiz[index].answer){
                score += 1;
            }
        }
    }
}
                           
function checkAnswers() {
    const question0 = document.querySelectorAll('.question-0');
    const question1 = document.querySelectorAll('.question-1');
    const question2 = document.querySelectorAll('.question-2');
    const question3 = document.querySelectorAll('.question-3');
    const question4 = document.querySelectorAll('.question-4');
    const btnDiv = document.querySelector('.button-div');
    checkHelper(question0, 0);
    checkHelper(question1, 1);
    checkHelper(question2, 2);
    checkHelper(question3, 3);
    checkHelper(question4, 4);
    if ( score === 5 ) {
        rank = 'excellent';  
        btnDiv.innerHTML = `<div class="results">
                            <p>You got ${score} answers correct</p>
                            <p>You have ${rank} knowledge of the Simpsons</p>
                            </div>
                            `;
     } else if ( score >= 3 ) {
       rank = 'good'; 
       btnDiv.innerHTML = `<div class="results">
       <p>You got ${score} answers correct</p>
       <p>You have ${rank} knowledge of the Simpsons</p>
       </div>
       `;
     } else if ( score >= 1 ) {
        rank = 'average'; 
        btnDiv.innerHTML = `<div class="results">
        <p>You got ${score} answers correct</p>
        <p>You have ${rank} knowledge of the Simpsons</p>
        </div>
        `;
     } else {
       rank = 'poor';    
       btnDiv.innerHTML = `<div class="results">
       <p>You got ${score} answers correct</p>
       <p>You have ${rank} knowledge of the Simpsons. Watch more episodes!</p>
       </div>
       `;
     }
}

document.querySelector('#submitBtn').addEventListener('click', () => {
    checkAnswers();   
});

