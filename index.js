const btn = document.querySelectorAll('.reward-btn')

const modal = document.querySelector('.modal-container')
const modalDiv = document.querySelectorAll('.modal-div')
const mainContent = document.querySelector('.third')
const cancel = document.querySelector('.cancel')

const main = document.querySelector('main')
const overlay = document.querySelector('.overlay')
const radioField = document.querySelectorAll('.radio-field')

const btnBacked = document.querySelector('.project')
const valued = document.querySelector('.funds')
const numberBacked = document.querySelector('.number')

console.log(modalDiv);
console.log(modal);
console.log(btn);

console.log(radioField);


// modal class border
for (let b = 0; b < radio.length; b++) {
    radioField[b].addEventListener('click', ()=>{
        console.log(modalDiv);
        let current = document.getElementsByClassName("active");

  current[0].className = current[0].className.replace("active", "")
  this.className += "active";
       
       
});
        }


   //  modal class display
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ()=>{
  modal.classList.toggle('modal-show')

  window.scrollTo(100, 150)
   overlay.style.display = 'block';
//   mainContent.classList.toggle('behind')

    // TO REMOVE THE MODAL CLASS
cancel.addEventListener('click', ()=>{
    modal.style.display = 'none';
    overlay.style.display = 'none';

})
    })
    
}
for (let d = 0; d < modalDiv.length; d++) {
    modalDiv[d].addEventListener('click',()=>{
       modalDiv[d].style.border = "2px solid red"
    })
    
}
// let answer = 0;
// updateDisplay();

// // increament back up project button
// btnBacked.addEventListener('click', ()=>{
//     console.log('gooo');
//     answer++;
//     updateDisplay();
      
// })
// function updateDisplay() {
//     value.innerHTML = answer;
// }

let result = 914;
let numbers = 10;
showResult();

btnBacked.addEventListener('click',()=>{
  
    console.log('hello');
    result+=2;
    numbers++;
    showResult();
})
function showResult() {
    valued.innerHTML = result;
    numberBacked.innerHTML =numbers;

}
