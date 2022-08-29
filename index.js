// GOD HELP ME
const hamburger = document.querySelector('.hamburg')
const menu = document.querySelector('.menu-list')
const menuCancel = document.querySelector('.cancel-menu')

const bookmarked = document.querySelector('.bookmark')
const btn = document.querySelectorAll('.reward-btn')

const modal = document.querySelector('.modal-container')
const modalDiv = document.querySelectorAll('.modal-div')
const mainContent = document.querySelector('.third')
const cancel = document.querySelector('.cancel')

const main = document.querySelector('main')
const overlay = document.querySelector('.overlay')
const radio = document.querySelectorAll('.radio-field')
const selected = document.querySelectorAll('.modalinput[type="radio"]:checked')

const btnBacked = document.querySelector('.project')
const valued = document.querySelector('.funds')
const numberBacked = document.querySelector('.number')

const pledge = document.querySelectorAll('.modal-pledge')
console.log(pledge);



// menu for mobile
hamburger.addEventListener('click',()=>{
menu.style.display = 'block';
hamburger.style.display = 'none';
menuCancel.style.display = 'block';

})
menuCancel.addEventListener('click',()=>{
    menu.style.display = 'none';
    hamburger.style.display = 'block';
menuCancel.style.display = 'none';
})

//  modal class display
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ()=>{
  modal.classList.toggle('modal-show')

  window.scrollTo(100, 150)
   overlay.style.display = 'block';


    // TO REMOVE THE MODAL CLASS
cancel.addEventListener('click', ()=>{
    modal.style.display = 'none';
    overlay.style.display = 'none';

})
    })

    //pledge display
for (let n = 0; n < radio.length; n++) {
  
    radio[n].addEventListener('click', ()=>{
        console.log(pledge); 
        console.log(radio);
        pledge[n].style.color ='red';
    
    })
}


    
};

// backed

let result = 914;
let numbers = 10;
showResult();

btnBacked.addEventListener('click',()=>{
  
    console.log('hello');
    result+=2;
    numbers++;
    showResult();
});
function showResult() {
    valued.innerHTML = result;
    numberBacked.innerHTML =numbers;

};
//bookmarked
bookmarked.addEventListener('click',()=>{
    bookmarked.innerHTML = 'bookmarked!';
    bookmarked.classList.toggle('border-bk')

    console.log('hi');
})