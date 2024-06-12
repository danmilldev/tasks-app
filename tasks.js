const createButton = document.getElementById("create-button")
const taskList = document.getElementById("task-list")
const infoText = document.getElementById("info-text")

const editTask = (e) => {
    let newTaskName = document.getElementById("task-name-input").value
    if(newTaskName !== "")
    {
        e.parentNode.parentNode.childNodes[1].innerText = newTaskName
        document.getElementById("task-name-input").value = ""
    }
}

const deleteTask = (e) => {
    e.parentNode.parentNode.childNodes[1].classList.add("strike-through")

    setTimeout(() => {
        e.parentNode.parentNode.remove()
    }, 250);
}

const addNewTask = () => {
    let newTaskName = document.getElementById("task-name-input").value
    if(newTaskName !== "")
    {
        let newTask = `<li class="task-item">
                            <p class="task-name">`+ newTaskName + `</p>
                            <div class="task-buttons">
                                <button class="task-edit" onclick="editTask(this)">Edit</button>
                                <button class="task-delete" onclick="deleteTask(this)">Delete</button>
                            </div>
                        </li>`
        taskList.innerHTML += newTask
        document.getElementById("task-name-input").value = ""
        infoText.innerText = ""
    }
    else {
        infoText.innerText = "Task name field is empty!"
    }
}

createButton.addEventListener("click", addNewTask)
