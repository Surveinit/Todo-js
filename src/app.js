import { makeNewProject, getProjects } from "./modules/projectManager.js";
import { Task } from "./modules/tasks.js";

console.log("i am app.js")
const projectInput = document.getElementById("project-name");
const addProjectBtn = document.getElementById("add-project-btn");
const projectsContainer = document.getElementById("projects-container");

// 🟢 Add Project
addProjectBtn.addEventListener("click", () => {
    const projectName = projectInput.value.trim();
    if (projectName) {
        makeNewProject(projectName);
        projectInput.value = "";
        renderProjects();
    }
});

// 🔄 Render Projects
function renderProjects() {
    projectsContainer.innerHTML = "";
    const projects = getProjects();

    Object.keys(projects).forEach((projectName) => {
        const project = projects[projectName];

        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `<h3>${projectName}</h3>`;

        // Task Input and Button
        const taskInput = document.createElement("input");
        taskInput.placeholder = "Task Title";

        const addTaskBtn = document.createElement("button");
        addTaskBtn.textContent = "Add Task";
        addTaskBtn.addEventListener("click", () => {
            const taskTitle = taskInput.value.trim();
            if (taskTitle) {
                const newTask = new Task(taskTitle, "Description", "2025-12-31", false);
                project.addTask(newTask);
                taskInput.value = "";
                renderProjects();
            }
        });

        projectDiv.appendChild(taskInput);
        projectDiv.appendChild(addTaskBtn);

        // Render Tasks
        project.tasks.forEach((task) => {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");
            taskDiv.innerHTML = `
                <div class="task-summary">
                    <span>${task.title} ${task.completion ? "✅" : ""}</span>
                    <button class="expand-btn">Edit</button>
                    <button class="complete-btn">Done</button>
                    <button class="delete-btn">Remove</button>
                </div>
                <div class="task-details" style="display: none;">
                    <label>Title: <input type="text" class="edit-title" value="${task.title}"></label>
                    <label>Description: <input type="text" class="edit-description" value="${task.description}"></label>
                    <label>Due Date: <input type="date" class="edit-dueDate" value="${task.dueDate}"></label>
                    <label>Priority: <input type="checkbox" class="edit-priority" ${task.priority ? "checked" : ""}></label>
                    <button class="save-btn">💾 Save</button>
                </div>
            `;

            // Expand Task Details
            const expandBtn = taskDiv.querySelector(".expand-btn");
            const taskDetails = taskDiv.querySelector(".task-details");
            expandBtn.addEventListener("click", () => {
                taskDetails.style.display = taskDetails.style.display === "none" ? "block" : "none";
            });

            // Mark Task as Complete
            taskDiv.querySelector(".complete-btn").addEventListener("click", () => {
                task.markAsComplete();
                renderProjects();
            });

            // Delete Task
            taskDiv.querySelector(".delete-btn").addEventListener("click", () => {
                project.removeTask(task.title);
                renderProjects();
            });

            // Save Edited Task Details
            taskDiv.querySelector(".save-btn").addEventListener("click", () => {
                const newTitle = taskDiv.querySelector(".edit-title").value.trim();
                const newDescription = taskDiv.querySelector(".edit-description").value.trim();
                const newDueDate = taskDiv.querySelector(".edit-dueDate").value;
                const newPriority = taskDiv.querySelector(".edit-priority").checked;

                task.updateTask(newTitle, newDescription, newDueDate, newPriority);
                renderProjects();
            });

            projectDiv.appendChild(taskDiv);
        });

        projectsContainer.appendChild(projectDiv);
    });
}

// Initial Render
renderProjects();
