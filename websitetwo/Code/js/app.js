const questions = [
    {
        question: "Який телескоп є найбільшим та найдорожчим?", 
        answers: ["Телескоп Джеймса Вебба", "Телескоп Габбл","Телескоп Субару","Телескоп Гайя"],
        correct: 1,
    },
    {
        question: "Яка ширина у дзеркала телескопа Джеймса Вебба?",
        answers: [
        "2,4 м.", 
        "3,6 м.",
        "4,8 м.",
        "6,5 м."
    ],
        correct: 4,
    },
    {
        question: "Що відрізняє телескоп Джеймса Вебба від інших космічних телескопів?",
        answers: [
            "Використовується сонцезахисний навіс",
            "Має кріогенні установки",
            "Основне джерело нагріву космічного апарату - Сонце",
            "Нічим не відрізняється"],
        correct: 1,
    },
    {
        question: "Який за розмірами телескоп Джеймса Вебба?",
        answers: ["Як футбольне поле", "Як тенісний корт","Як баскетбольна площадка","Як волейбольна площадка"],
        correct: 2,
    },
    {
        question: "Яким коштовним металом покрито головне дзеркало телескопа Джеймса Вебба?",
        answers: ["Срібло", "Платина","Золото","Мідь"],
        correct: 3,
    },
    {
        question: "Що нагадує принцип роботи камери телескопа?",
        answers: ["Космічний пилосос", "Людське око","Космічний тепловізор","Єхолокатор"],
        correct: 3,
    },
    {
        question: "Навіщо коштовним металом покрили головне дзеркало телескопа Джеймса Вебба?",
        answers: ["Щоб збільшити вартість телескопа", "Щоб збільшити відбивну здібність дзеркала","Для краси","Для захисту телескопа від метеоритів"],
        correct: 2,
    },
    {
        question: "Які можливості дає телескопу інфрачервоне випромінювання?",
        answers: ["Дає можливість спостерігати формування зірок і планетних систем", "Самоохолоджуватись","Дає можливість спостерігати на відстані більше ніж 13,6 млрд світових років","Нічого не дає"],
        correct: 1,
    },
    {
        question: "Який є недолік телескопа Джеймса Вебба?",
        answers: ["Він не може самооходжуватись", "Він не може відправляти знімки на Землю","У разі поломки його не зможуть полагодити","В нього немає недоліків"],
        correct: 3,
    },
    {
        question: "Полярне сяйво якої планети сфотографував телескоп Джеймса Вебба?",
        answers: ["Марса", "Юпітера","Сатурна","Меркурія"],
        correct: 2,
    },
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list')
const submitBtn = document.querySelector('#submit')
let score = 0;
let questionIndex=0;

clearPage();
showQuestion();
submitBtn.onclick=checkAnswer;
function clearPage(){
    headerContainer.innerHTML='';
    listContainer.innerHTML='';
}

function showQuestion() {
   const headerTemplate =`<h2 class="title">%title%</h2>`;
   const title= headerTemplate.replace('%title%', questions[questionIndex]['question']);
   headerContainer.innerHTML=title;
   let answerNumber = 1;
    for(answerText of questions[questionIndex]['answers']) {
        const questionTemplate = 
        `<li>
        <label>
            <input value="%number%" type="radio" class="answer" name="answer" />
            <span>%answer%</span>
        </label>
    </li>`;
    const answerHTML=questionTemplate
    .replace('%answer%',answerText)
    .replace('%number%',answerNumber)

    listContainer.innerHTML+= answerHTML;
    answerNumber++;
    }
}

function checkAnswer() {
    const checkedRadio=listContainer.querySelector('input[type="radio"]:checked');
    if(!checkedRadio) {
submitBtn.getBoundingClientRect();
return
    }

 const userAnswer = parseInt(checkedRadio.value);
 if(userAnswer===questions[questionIndex]['correct']){
    score++;
 }
 if(questionIndex!==questions.length-1){
questionIndex++;
clearPage();
showQuestion();
return;
 }
 else {
clearPage();
showResults();
 }
}
function showResults() {
const resultsTemplate=
`<h2 class="title">%title%</h2>
<h3 class="summary">%message%</h3>
<p class="result">%result%</p>`;
let title, message;

if(score===questions.length) {
    title='Вітаємо ';
    message='Ви відповіли правильно на всі запитання';
}
else if((score*100)/questions.length>=50) {
    title='Непогано';
    message='Ви дали більше половини правильних питань';
}
else {
    title='Погано';
    message='Поки що у вас менше половини правильних відповідей';
}
let result=`${score} з ${questions.length}`;
const finalMessage=resultsTemplate
.replace('%title%', title)
.replace('%message%',message)
.replace('%result%',result)
headerContainer.innerHTML=finalMessage;
submitBtn.getBoundingClientRect();
submitBtn.innerText='Продовжити';
submitBtn.onclick=()=>{history.go()};
}
