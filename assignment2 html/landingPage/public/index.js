// MOBILE MENU BAR

let menue = document.querySelector('.menue');
let options = document.querySelectorAll('.option')
let bar = document.getElementById('bar')
bar.addEventListener('click',()=>{
menue.classList.toggle("active");
})

options.forEach(option => {
  option.addEventListener('click',()=>{    
    menue.classList.remove("active");
    })
});
window.addEventListener('scroll', () => {
  menue.classList.remove("active");

})
window.addEventListener("click", function(event) {
  if (event.target !== bar) {
    menue.classList.remove("active");
  }
});
 
// ACTIVE TAB
const tabItems = document.querySelectorAll('.tabs li');

tabItems.forEach(tab => {
  tab.addEventListener('click', () => {
    tabItems.forEach(item => {
      item.classList.remove('active-tab');
    });

    tab.classList.add('active-tab');
  });
});
tabItems[0].classList.add('active-tab');

//LOADING SCREEN

window.addEventListener('load', function () {
  const loader = document.querySelector('.welcome');
  loader.classList.add('animate-loader');

  setTimeout(function () {
    loader.classList.remove('animate-loader');
  }, 8000); 
});

// CARDS

var tabBtn = document.getElementById('services');
var cards = document.querySelectorAll('.card');

setInterval(() => {
  cards.forEach(card => {
    card.classList.remove('animate__zoomIn')
  
  });
  
}, 3000);
tabBtn.addEventListener('click', ()=>{
  cards.forEach(card => {
    card.classList.add('animate__zoomIn')
  
  });
  })
  window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.classList.add('animate__zoomIn')
    })})

function addClassOnScroll(elements, className) { // scroll
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      element.classList.add(className);
    }
  });
}

const targetElements = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  addClassOnScroll(targetElements, 'animate__zoomIn'); // Replace with your desired class name
});



    
// MODAL
var modal = document.getElementById("myModal");
var closeModal = document.getElementById("closeModal");
var submitButton = document.getElementById("triggerModal");

submitButton.addEventListener("click", function() { // display modal
  modal.style.display = "flex";
 
});

closeModal.addEventListener("click", function() { //close
  modal.style.display = "none";
});

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
var modal2 = document.getElementById("myModal2");
var closeModal2 = document.getElementById("closeModal2");
var submitButton2 = document.getElementById("triggerModal2");

submitButton2.addEventListener("click", function() { // display modal
  modal2.style.display = "flex";
 
});

closeModal2.addEventListener("click", function() { //close
  modal2.style.display = "none";
});

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
});
