//console.log("it works")



  //name code
  // *************** HOMEWORK FOR 5/15 BELOW THIS LINE ***********************
  const form = document.querySelector("#userForm");
  form.addEventListener("submit", function(ev){
      ev.preventDefault()

      //get the variables
      const users = document.querySelector("#users")
      const user = ev.target.userName.value
      const age = ev.target.age.value
      const color = ev.target.favColor.value

      //call render list
      const list = renderlist(users, user, age, color)

      //add list to the div
      users.appendChild(list)

      //reset form
      form.reset()
      form.userName.focus()
  })

  function renderlist(users, user, age, color){

    //create the list
    const list = document.createElement('ul')
    //call renderListItem for name and age
    list.appendChild(renderListItem('Name', user))
    list.appendChild(renderListItem('Age', age))

    //create color Item
    const colorItem = renderListItem('Favorite Color','')
    //add color box to color item
    colorItem.appendChild(rendercolor(color))
    //append color 
    list.appendChild(colorItem)


    return list


  }

  function renderListItem(label, item){
    const element = document.createElement('li')
    element.textContent = `${label}: ${item}`
    return element
  }

  function rendercolor(newColor){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = newColor
    colorDiv.style.width = '10rem'
    colorDiv.style.height = '.75rem'
    return colorDiv
  }


  