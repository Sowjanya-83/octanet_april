document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        event.target.remove();
      }
    });
  });
  