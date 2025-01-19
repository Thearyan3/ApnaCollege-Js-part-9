// Qs 1. - Create a new input and button element on the page using JavaScript only. Set the text of button as "Click Me".
let btn = document.createElement('button');
btn.innerText = "Click Me";
document.querySelector('body').append(btn);
let input1 = document.createElement('input');
input1.placeholder = "Placeholder";
document.querySelector('body').append(input1);


// Qs 2. - Add following attributes to the element :-
// - Change placeholder value of input to “username”
// - Change the id of button to “btn”.
btn.setAttribute('id', 'btn');
input1.setAttribute('placeholder', 'username');


// Qs 3. - Access the btn using the querySelector and button id. Change the button background color to blue and text color to white .
document.querySelector('#btn').style.backgroundColor = "blue";
document.querySelector('#btn').style.color = "white";


// Qs 4. - Create an h1 element on the page and set its text to “DOMPractice” underlined. Change its color to purple.
let head1 = document.createElement('h1');
head1.innerText = "DOMPractice";
head1.style.color = "purple";
head1.style.textDecoration = "underline";
document.querySelector('body').append(head1);


// Qs 1. - Create a p tag on the page and set its text to “ApnaCollegeDeltaPractice”, where Delta is bold.
let para1 = document.createElement('p');
para1.innerHTML = "ApnaCollege<b>Delta<b>Practice";
document.querySelector('body').append(para1);