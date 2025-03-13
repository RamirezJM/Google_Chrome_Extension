
let myLeads = []
const myInput = document.getElementById('input-field')
const myList = document.getElementById('input-list')

const button = document.getElementById('input-button')
button.addEventListener('click', ()=>{
  myLeads.push(myInput.value)
  localStorage.setItem('enlaces', JSON.stringify(myLeads))

  renderLeads()
  console.log(localStorage.getItem('enlaces'))
})
  function renderLeads(){
  let listItems = '' 
  for(let value of myLeads){
    let myLinks = value
    if(!myLinks.startsWith('http://') && !myLinks.startsWith('https://')){
      myLinks = 'https://' + myLinks
    }
    listItems += `<li><a href="${myLinks}" target="_blank">${myLinks}</a></li>`
    myList.innerHTML = listItems
  }
myInput.value = ""
}


