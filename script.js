const input = document.getElementById("input");  
const button = document.getElementById("button")
const ul = document.querySelector("ul")

createNewItem=()=>{
  if (input.value !== ""){
    const li = document.createElement("li");
    const delete_button = document.createElement("button")
    delete_button.innerHTML = "Delete";
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(delete_button);
    ul.appendChild(li);
    input.value = "";
  }
  else{
    alert("Enter the item")
  }
}

addItemToList = () => {
  createNewItem()
}

addItemToListByEnterKey = (event) => {
  if(event.key === "Enter"){
    createNewItem()
  }
}


deleteAnItem = (event) => {
  if(event.target.parentElement.nodeName === "LI"){
    ul.removeChild(event.target.parentElement)
  }
}

toggleAnItem = (event) => {
  if (event.target.tagName === "LI"){
    event.target.classList.toggle("done");
  }
}

button.addEventListener("click",addItemToList)
input.addEventListener("keypress",addItemToListByEnterKey)
ul.addEventListener("click", deleteAnItem)
ul.addEventListener("click", toggleAnItem)

