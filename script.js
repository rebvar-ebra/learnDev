function addTask() {
    const newTaskInput = document.getElementById("newTask");
    const taskList = document.getElementById("tasks");

    if (newTaskInput.value.trim() !== "") {
        const task = document.createElement("div");
        task.className = "task";
        task.textContent = newTaskInput.value;

        task.addEventListener("click", function () {
            task.style.textDecoration = task.style.textDecoration === "line-through" ? "none" : "line-through";
        });

        taskList.appendChild(task);
        newTaskInput.value = "";
    }
}
