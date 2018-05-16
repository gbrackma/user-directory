//console.log("it works")

  // *************** HOMEWORK FOR 5/15 BELOW THIS LINE ***********************
  const form = document.querySelector("#userForm");
  form.addEventListener("submit", function(ev){
      //called with submit is clicked
      ev.preventDefault()

      //get the variables from the form
      const users = document.querySelector("#users")
      const form = ev.target

      //working with objects
      const user = {
          Name: form.userName.value,
          Age: form.age.value,
          'Favorite Color': rendercolor(form.favColor.value),

      }
      //call render list using variables
      const list = renderlist(user)

      //add list to the div
      users.appendChild(list)

      //reset form
      form.reset()
      form.userName.focus()
  })

  function renderlist(user){
      //creates a users list item to append to the list of users (users)

    //create the list
    const list = document.createElement('ul')
    //call renderListItem for name and age

    Object.keys(user).map(function(label){
        const item = renderListItem(label, user[label])
        list.appendChild(item);
    })
    //list.appendChild(renderListItem('Name', user.name))
    //list.appendChild(renderListItem('Age', user.age))
    //list.appendChild(renderListItem('Favorite Color', user.color))

    //create color Item
        //const colorItem = renderListItem('Favorite Color','')
    //add color box to color item
        //colorItem.appendChild(rendercolor(color))
    //append color 
        //list.appendChild(colorItem)

    return list


  }

  function renderListItem(label, item){
      //creates a list item and returns it 
    const element = document.createElement('li')
    element.textContent = `${label}: `
    try{  
          element.appendChild(item)
    } catch(e){
        element.textContent += `${item}`
    }
    return element
  }

  function rendercolor(newColor){
      //creates a color box from favColor of the user
      //returns div of new color
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = newColor
    colorDiv.style.width = '10rem'
    colorDiv.style.height = '.75rem'
    return colorDiv
  }


  