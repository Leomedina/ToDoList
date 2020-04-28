const toDoListForm = document.querySelector("#addItemForm");
const newItemInput = document.querySelector("input[name=addItem]");
const toDoList = document.querySelector(".todoUl");
const saveTodos = JSON.parse(localStorage.getItem("todos")) || [];

//load from local storage
saveTodos.forEach(toDo => {
    const newItemLi = createTodoItem(toDo.toDo);
    toDoList.appendChild(newItemLi);
});


toDoListForm.addEventListener('submit', function (event) {
    const newItemLi = createTodoItem(newItemInput.value);
    event.preventDefault();
    if (newItemLi.innerText != "") {
        toDoList.appendChild(newItemLi);
    }
    
    //saving to local storage
    saveTodos.push({
        toDo: newItemLi.innerText
    })
    localStorage.setItem("todos", JSON.stringify(saveTodos));
})

function createTodoItem(value) {
    let newLi = document.createElement("li");
    newLi.classList.add("listItem")
    newLi.innerText = value;
    return newLi;
}

toDoList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
    setInterval(function () {
        if (event.target.classList[1] === "completed") {
            event.target.remove();
        }
    }, 1500)
})


//load from localStorage



//automatically delete all checked items / completed items after 3 seconds


// setInterval(function // automatically delete lis after 3 seconds