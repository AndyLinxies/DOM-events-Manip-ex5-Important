//Ex1
let input1 = document.getElementsByTagName('input')[0]
input1.addEventListener('focus', () => {
    input1.style.backgroundColor = 'blue'
})

//Ex2
let input2 = document.getElementsByTagName('input')[1]
input2.addEventListener('focus', () => {
    input2.style.backgroundColor = 'blue'
})
input2.addEventListener('focusout', () => {
    input2.style.backgroundColor = 'white'
})

//Ex3
let ex3_1 = document.getElementsByClassName('premierParagraphe')[0]
let ex3_2 = document.getElementsByClassName(' secondParagraphe')[0]
let ex3_3 = document.getElementsByClassName('dernierParagraphe')[0]
let button3 = document.getElementsByClassName('buttonExo')[0]
console.log(ex3_1, ex3_2, ex3_3, button3);

button3.addEventListener('click', () => {
    ex3_1.innerText = ex3_2.innerText;
    ex3_3.innerText = ex3_2.innerText;
})

//Ex4
let ex4 = document.getElementById('exo4')
let input4 = document.getElementsByClassName('form-control')[0]

let bouton4 = document.getElementsByClassName('buttonExo')[1]
console.log(bouton4);

bouton4.addEventListener('click', () => {
    ex4.innerText = input4.value;
})

//Ex5
let ex5 = document.getElementsByClassName('img-responsive')[0];
let bouton5 = document.getElementsByClassName('mb-2')[0];
let img = document.getElementsByClassName('img-responsive')[0];
bouton5.addEventListener('click', () => {
img.setAttribute('src','./src/image/tartine.png')
})

//Ex6
let img2 = document.getElementsByClassName('img-responsive')[1];
let photo2 = document.getElementsByClassName('img-responsive')[2];
let source;
img2.addEventListener('click',()=>{
    source = img2.src;
})

photo2.addEventListener('click',()=>{
    photo2.setAttribute('src',source)
})

//Ex7
let bouton7 = document.getElementsByClassName('mb-2')[1]
let p1 = document.getElementsByTagName('p')[5]
let p2 = document.getElementsByTagName('p')[6]
let temp;
bouton7.addEventListener('click',()=>{
temp = p1.innerText 
p1.innerText = p2.innerText
p2.innerText = temp
})