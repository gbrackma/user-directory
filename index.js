//console.log("it works")

const button = document.querySelector('button')
const subHeader = document.querySelector('h1.subHeading')
//let submitText = document.forms["newText"].value;

const myForm = document.getElementById("myForm");
//document.myForm.newText
const submitted = document.myForm.submitButton



submitted.addEventListener('click', function(ev){
    let change = document.myForm.myText.value
    subHeader.textContent = change
})

button.addEventListener('click', function(ev){
    subHeader.textContent = "You have clicked my beautiful button! Thank you!"
  })

  //name code
  const form = document.querySelector("#userForm");
  form.addEventListener("submit", function(ev){
      ev.preventDefault()
      const heading = document.querySelector("#users")
      const input = ev.target.userName
      heading.textContent += '  ' + input.value
      document.myForm.userName.textContent = ""
  })


  