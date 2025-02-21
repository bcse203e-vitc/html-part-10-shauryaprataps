const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="remove-btn">Remove</button>`;

    taskList.appendChild(li);
    taskInput.value = "";

    li.querySelector(".remove-btn").addEventListener("click", function() {
        li.remove();
    });
}
