// GOD HELP ME
//menu list
const hamburger = document.querySelector(".hamburg");
const menu = document.querySelector(".menu-list");
const menuCancel = document.querySelector(".cancel-menu");

//bookmark button & select reward buttons
const bookmarked = document.querySelector(".bookmark");
const btn = document.querySelectorAll(".reward-btn");

// modal page
const modal = document.querySelector(".modal");
const modalDiv = document.querySelectorAll(".modal-div");
const mainContent = document.querySelector(".third");
const cancel = document.querySelector(".cancel");
const remove = document.querySelector(".remove");

// main tag, overlay div
const main = document.querySelector("main");
const overlay = document.querySelector(".overlay");

// radio buttons
const radio = document.querySelectorAll(".radio-field");
const selected = document.querySelectorAll('.modalinput[type="radio"]:checked');

//'back this project' button, numbers.
const btnBacked = document.querySelector(".project");
const valued = document.querySelector(".funds");
const numberBacked = document.querySelector(".number");

// pledges
const pledge = document.querySelectorAll(".modal-pledge");
const pledgeBtn = document.querySelectorAll(".pledge-btn");
const pledgeThanks = document.querySelector(".thanks");
// const pledgeThanksTwo = document.querySelector(".thanks");

//number you want to buy, it worked page!
const number = document.querySelectorAll('.number')
const worked = document.querySelector('.worked')


console.log(pledge);

// menu for mobile
hamburger.addEventListener("click", () => {
  menu.style.display = "block";
  overlay.style.display = "block";
  hamburger.style.display = "none";
  menuCancel.style.display = "block";
});
menuCancel.addEventListener("click", () => {
  menu.style.display = "none";
  hamburger.style.display = "block";
  menuCancel.style.display = "none";
  overlay.style.display = "none";
});


  //pledge display
  for (let n = 0; n < radio.length; n++) {
    radio[n].addEventListener("click", () => {
       pledge[n].style.display = 'flex';
       remove.style.display = "block"
       remove.addEventListener('click',()=>{
        pledge[n].style.display = "none";

      })
    });
  }

// pledge button
for (const element of pledgeBtn) {
    element.addEventListener('click', ()=>{
      pledgeThanks.style.display = 'block';
        window.scrollTo(150, 150);
        overlay.style.display = "block";
        modal.style.display = 'none';


    });
    
}
worked.addEventListener('click',()=>{
  pledgeThanks.style.display = 'none';
  overlay.style.display = "none";

   
})
// backed

let result = 914;
let numbers = 10;
showResult();

btnBacked.addEventListener("click", () => {
  console.log("hello");
  result += 2;
  numbers++;
  showResult();
});
function showResult() {
  valued.innerHTML = result;
  numberBacked.innerHTML = numbers;
}
//bookmarked
bookmarked.addEventListener("click", () => {
  bookmarked.innerHTML = "bookmarked!";
  bookmarked.classList.toggle("border-bk");
  console.log("hi");
});
//  modal class display
for (const element of btn) {
    element.addEventListener("click", () => {
      modal.style.display = "block";
      window.scrollTo(100, 150);
      overlay.style.display = "block";
  
    
      // TO REMOVE THE MODAL CLASS
      cancel.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
      });
    });}