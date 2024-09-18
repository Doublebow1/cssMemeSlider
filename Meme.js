console.log("hello roling scopes !!!");

const first = document.getElementById('first');
const one = document.querySelector('.one');

const second = document.getElementById('second');
const two = document.querySelector('.two');

const third = document.getElementById('third');
const three = document.querySelector('.three');

const forth = document.getElementById('forth');
const four = document.querySelector('.four');


one.addEventListener('click', function roller1(){
	first.scrollIntoView()
})
two.addEventListener('click', function roller2(){
	second.scrollIntoView()

})
three.addEventListener('click', function roller3(){
	third.scrollIntoView()

})
four.addEventListener('click', function roller4(){
	forth.scrollIntoView()
})

