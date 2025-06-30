//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: `Albert Einstein`
}, {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst"`,
    person: `Aristotle`
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life."`,
    person: `Steve Jobs`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: `Benjamin Franklin`
}, {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
}) 

//Variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){

    if (e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
})


// Variables

const accordion = document.getElementsByClassName('content-container');

for(i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}


