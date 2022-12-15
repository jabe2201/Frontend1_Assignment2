const today = new Date().toLocaleString().slice(0,10); 
document.getElementById("Date").value = today;
const toDoList = [ 
    {
        todo: "Studera",
        date: "2022-12-07",
        category: "Jobb"
    },
    {
        todo: "Städa",
        date: "2022-12-18",
        category: "Hushållsarbete"
    },
    {
        todo: "Handla Julklappar",
        date: "2022-12-23",
        category: "Hushållsarbete"
    }
];
const btnText = "Ta bort";

refreshList = function(){
    let ListBoxEl = document.querySelectorAll('.List-Box-Item');
    ListBoxEl.forEach(item => {
        item.remove();
    });
    let ListBoxEleven = document.querySelector('.ListBox');
    toDoList.forEach((item, index) => {
    let ListBoxItem = document.createElement('div');
    ListBoxItem.setAttribute('id', `item-${index}`);
    ListBoxItem.classList.add('List-Box-Item');
    ListBoxEleven.appendChild(ListBoxItem);
    let ListBoxItemTodo = document.createElement('span');
    ListBoxItemTodo.innerText = item.todo;
    let ListBoxItemDate = document.createElement('span');
    ListBoxItemDate.innerText = item.date;
    if(item.date < today){
        ListBoxItemDate.classList.add('Red');
    }
    let ListBoxItemCategory = document.createElement('span');
    ListBoxItemCategory.innerText = item.category;
    let ListBoxRemoveButton = document.createElement('button');
    ListBoxRemoveButton.innerText = btnText;
    ListBoxRemoveButton.setAttribute('id', `button-${index}`);
    ListBoxRemoveButton.setAttribute('onclick', `removeEntry(${index})`);

    ListBoxItem.appendChild(ListBoxItemTodo);
    ListBoxItem.appendChild(ListBoxItemDate);
    ListBoxItem.appendChild(ListBoxItemCategory);
    ListBoxItem.appendChild(ListBoxRemoveButton);
    });
}

addTodo = function(){
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
    document.querySelector('#Todoentry').value = "";
    refreshList();
} 

removeEntry = function(index){
    toDoList.splice(index, 1);
    refreshList();
}

filterList = function(input){
    if (input === "") {
        let itemList = document.querySelectorAll('.List-Box-Item');
        itemList.forEach(item => {
            item.classList.remove('Hide');
        });
    } 
    else {
        toDoList.forEach((item, index) => {
            if (item.todo.toLowerCase().indexOf(input.toLowerCase()) < 0){
                document.querySelector(`#item-${index}`).classList.add('Hide');
            } 
        });
    }
}

radioSelectFilter = function(id) {
    if (id === "All"){
        let itemList = document.querySelectorAll('.List-Box-Item');
        itemList.forEach(item => {
            item.classList.remove('Hide-Radio');
        });
    }
    else {
        toDoList.forEach((item, index) => {
            if (item.category === id){
                document.querySelector(`#item-${index}`).classList.remove('Hide-Radio');
            }
            else {
                document.querySelector(`#item-${index}`).classList.add('Hide-Radio');
            }
        });
    }
}
