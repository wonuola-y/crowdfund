const btn = document.querySelectorAll('.reward-btn')

const modal = document.querySelector('.modal-container')
const modalDiv = document.querySelectorAll('.modal-div')
const mainContent = document.querySelector('.third')
const cancel = document.querySelector('.cancel')

const main = document.querySelector('main')
const overlay = document.querySelector('.overlay')
const radioField = document.querySelectorAll('.radio-field')


console.log(modalDiv);
console.log(modal);
console.log(btn);

console.log(radioField);


// modal class
for (let b = 0; b < radio.length; b++) {
    radioField[b].addEventListener('click', ()=>{
        console.log(modalDiv);
        let current = document.getElementsByClassName("active");

  current[0].className = current[0].className.replace("active", "")
  this.className += "active";
       
       
});
        }
   
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ()=>{
        // modal.style.display = 'flex';
  modal.classList.toggle('modal-show')
  window.scrollTo(100, 150)
   overlay.style.display = 'block';

//   mainContent.classList.toggle('behind')
cancel.addEventListener('click', ()=>{
    // TO REMOVE THE MODAL CLASS
    modal.style.display = 'none';
    overlay.style.display   = 'none';

})
    })
    
}
