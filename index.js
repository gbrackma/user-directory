//console.log("it works")

  // *************** HOMEWORK FOR 5/15 BELOW THIS LINE ***********************
  const form = document.querySelector("#userForm");
  //
  form.addEventListener("submit", (ev) => {
      //called with submit is clicked

      //stops auto refresh
      ev.preventDefault()

      //get the div and form
      const users = document.querySelector("#users")
      //const form = ev.target

      //creates user object
      const user = {
          Name: form.userName.value,
          Age: form.age.value,
          'Favorite Color': rendercolor(form.favColor.value),
      }

      //add list to the div
      users.appendChild(renderlist(user))

      //reset form
      form.reset()
      form.userName.focus()
  })

  function renderlist(user){
    //creates a users list item to append to the list of users (users)
    //create the list
    const list = document.createElement('ul')

    //call renderListItem for name and age and color
    Object.keys(user).map(function(label){
        const item = renderListItem(label, user[label])
        list.appendChild(item);
    })
    return list
  }

  function renderListItem(label, item){
      //creates a list item and returns it 
    const element = document.createElement('li')
    element.textContent = `${label}: `

    //allows for both div(color) and text(name and age)
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




  