document.getElementById('bar').addEventListener('click',()=>{
let menue = document.querySelector('.menue');

menue.classList.toggle("active");

})

// CARDS

var tabBtn = document.querySelector('.services');
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
var submitButton = document.getElementById("contactBtn");

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
