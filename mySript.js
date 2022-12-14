const today = new Date().toLocaleString().slice(0,10); 
document.getElementById("Date").value = today;
const toDoList = [];
const btnText = "Ta bort";
let i = 1;
let input = document.querySelector('#SearchBox');
input.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        console.log("Snyggt!")
        input.value = "";
    }
})



addTodo = function(){
    const radiobuttons = document.querySelectorAll('.RadioButton');
    const optionsbox = document.querySelector('select');
    const todoEntry = document.querySelector('#Todoentry').value;
    const dateEntry = document.querySelector('#Date').value;
    let optionChoir = optionsbox.options[optionsbox.selectedIndex].value;
    const Todo = {
        todo: todoEntry,
        date: dateEntry,
        category: optionChoir
    };
    toDoList.push(Todo);
    let ListBoxEl = document.querySelector('.ListBox');
    let ListBoxItem = document.createElement('div');
    ListBoxItem.setAttribute('id', `item-${i}`);
    ListBoxItem.classList.add('List-Box-Item');
    ListBoxEl.appendChild(ListBoxItem);
    let ListBoxItemTodo = document.createElement('span');
    ListBoxItemTodo.innerText = todoEntry;
    let ListBoxItemDate = document.createElement('span');
    ListBoxItemDate.innerText = dateEntry;
    if(dateEntry < today){
        ListBoxItemDate.classList.add('Red');
    }
    let ListBoxItemCategory = document.createElement('span');
    ListBoxItemCategory.innerText = optionChoir;
    let ListBoxRemoveButton = document.createElement('button');
    ListBoxRemoveButton.innerText = btnText;
    ListBoxRemoveButton.setAttribute('id', `button-${i}`);
    ListBoxRemoveButton.setAttribute('onclick', "removeEntry(this.id)");

    ListBoxItem.appendChild(ListBoxItemTodo);
    ListBoxItem.appendChild(ListBoxItemDate);
    ListBoxItem.appendChild(ListBoxItemCategory);
    ListBoxItem.appendChild(ListBoxRemoveButton);
    i++;
    document.querySelector('#Todoentry').value = "";

    console.log(Todo);

} 

removeEntry = function(clicked){
    let id = clicked.slice(7,8);
    document.querySelector(`#${clicked}`).remove();
    document.querySelector(`#item-${id}`).remove();
}






