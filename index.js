const btn = document.querySelectorAll('.reward-btn')
const modal = document.querySelector('.modal')
const mainContent = document.querySelector('.third')
const cancel = document.querySelector('.cancel')
const main = document.querySelector('main')

console.log(modal)
console.log(btn);
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ()=>{
  modal.classList.toggle('modal-show')
  window.scrollTo(150, 200)
  main.style.backgroundColor = 'light gray'
  mainContent.classList.toggle('behind')
cancel.addEventListener('click', ()=>{
    modal.style.display = 'none';
    mainContent.style.backgroundColor = 'white';
    mainContent.classList.remove('behind')
})
    })
    
}