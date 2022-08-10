const btn = document.querySelectorAll('.reward-btn')
const modal = document.querySelector('.modal')

console.log(modal)
console.log(btn);
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ()=>{
  modal.classList.toggle('modal-show')
    })
    
}