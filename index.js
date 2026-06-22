const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1"); 
const myLabel2 = document.getElementById("myLabel2"); 
const myLabel3 = document.getElementById("myLabel3");  
const min= 1;
const max= 6;
let randomNmum1;
let randomNmum2;
let randomNmum3;
myButton.onclick = function() {
    let randomNmum1 = Math.floor(Math.random()* max) +min;
    let randomNmum2 = Math.floor(Math.random()* max) +min;
    let randomNmum3 = Math.floor(Math.random()* max) +min;
    myLabel1.textContent = randomNmum1;
    myLabel2.textContent = randomNmum2;
    myLabel3.textContent = randomNmum3;
}