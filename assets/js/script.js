
let myLeads = JSON.parse(localStorage.getItem('enlaces')) || [];
const myInput = document.getElementById('input-field')
const myList = document.getElementById('input-list')

renderLeads()

const button = document.getElementById('input-button')
button.addEventListener('click', () => {
  myLeads.push(myInput.value)
  localStorage.setItem('enlaces', JSON.stringify(myLeads))

  renderLeads()

})
function renderLeads() {
  let listItems = ''
  for (let value of myLeads) {
    let myLinks = value
    if (!myLinks.startsWith('http://') && !myLinks.startsWith('https://')) {
      myLinks = 'https://' + myLinks
    }
    listItems += `<li><a href="${myLinks}" target="_blank">${myLinks}</a><i class="fa-regular fa-trash-can delete-icon"></i></li>`
    myList.innerHTML = listItems
  }
  myInput.value = ""

  const trashIcon = document.querySelectorAll('.delete-icon')
 
  
     trashIcon.forEach(icon => {
       icon.addEventListener('click', (event) => {
       let liElement = event.target.closest('li')
       const deleteLink = liElement.querySelector('a').href
       
       
       const indexDelete = myLeads.indexOf(deleteLink.slice(8, -1))
         
        if(indexDelete !== -1){
         myLeads.splice(indexDelete, 1)
       }
       localStorage.setItem('enlaces', JSON.stringify(myLeads))
       
       myList.removeChild(liElement) 
       
 
     })
   })
   
}

 
 



