//console.log("it works")

const button = document.querySelector('button')
const subHeader = document.querySelector('h1.subHeading')

button.addEventListener('click', function(ev){
    subHeader.textContent = "You have clicked my beautiful button! Thank you!"
  })