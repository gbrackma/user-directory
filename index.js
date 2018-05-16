//console.log("it works")

  // *************** HOMEWORK FOR 5/15 BELOW THIS LINE ***********************
  const form = document.querySelector("#userForm");
 
 
  // ************* NOTE: function(ev) is the same at (ev) =>

  form.addEventListener("submit", (ev) => {
      //called with submit is clicked

      //stops auto refresh
      ev.preventDefault()

      //get the div and form
      const users = document.querySelector("#users")

      //creates user object
      const user = {
          Name: form.userName.value,
          Age: form.age.value,
          'Favorite Color': rendercolor(form.favColor.value),
      }

      //add list to the list of users
      users.appendChild(renderlist(user))

      //reset form
      form.reset()
      form.userName.focus()
  })

  function renderlist(user){
    //creates a users list item to append to the list of users (users)
    //create the list
    const list = document.createElement('dl')

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
    
    const term = document.createElement('dt')
    term.textContent = label

    const descript = document.createElement('dd')
    //allows for both div(color) and text(name and age)
    try{  
        
        descript.appendChild(item)
    } catch(e){
        descript.textContent = item
    }

    element.appendChild(term)
    element.appendChild(descript)

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




  