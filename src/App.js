document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                        <span>${taskText}</span>
                        <span class="delete">delete</span>
                    `;

      listItem.querySelector(".delete").addEventListener("click", function () {
        taskList.removeChild(listItem);
      });

      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  });

  taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addTaskButton.click();
    }
  });
});