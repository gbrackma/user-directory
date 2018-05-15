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
      const user = ev.target.userName
      const age = ev.target.age
      const color = ev.target.favColor

      const list = document.createElement('ul')

      const nameElement = document.createElement('li')
      nameElement.textContent = `Name: ${user.value}`
      list.appendChild(nameElement)

      const ageElement = document.createElement('li')
      ageElement.textContent = `Age: ${age.value}`
      list.appendChild(ageElement)

      const colorItem = document.createElement('li')
      colorItem.textContent = `Favorite Color: `
      const colorDiv = document.createElement('div')
      colorDiv.style.backgroundColor = color.value
      colorDiv.style.width = '3rem'
      colorDiv.style.height = '3rem'
      colorItem.appendChild(colorDiv)
      list.appendChild(colorItem)

      //list.style.backgroundColor = color.value
      heading.appendChild(list)

      //heading.innerHTML += `<p>${user.value}, ${age.value}</p>`
      form.reset()
      form.userName.focus()
  })


  