const addTaskButton = document.querySelector("#liveToastBtn")
const todoInput = document.querySelector("#task")
const listDom = document.querySelector("#list")



const newElement = () => {
    if (todoInput.value.trim() === "" ) {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
    

        const liDom = document.createElement("li");
        liDom.innerHTML = todoInput.value;
        listDom.appendChild(liDom);
        task.value = "";
        task.focus();

        const deleteButton = document.createElement("span");
        deleteButton.classList.add("close")
        deleteButton.innerHTML = "x";
        liDom.appendChild(deleteButton);
    }
}

const checkedFunction = (todo) => {
    if (todo.target.tagName === "LI") {
        todo.target.classList.toggle("checked");
    }
}

const deleteFunction = (todo) => {
   if (todo.target.classList.contains("close")) {
    const listItem = todo.target.parentElement;
    listItem.remove();
   }
}



addTaskButton.addEventListener("click", newElement)
listDom.addEventListener("click", checkedFunction)
listDom.addEventListener("click", deleteFunction)
