document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('addButton').addEventListener('click', addTask);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTaskElement(task));
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const timeInput = document.getElementById('timeInput');
    const taskText = taskInput.value.trim();
    const taskTime = timeInput.value;

    if (taskText) {
        const task = {
            id: Date.now(),
            text: taskText,
            time: taskTime,
            completed: false
        };
        createTaskElement(task);
        saveTask(task);
        taskInput.value = '';
        timeInput.value = '';
    }
}

function createTaskElement(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    
    const content = document.createElement('div');
    content.className = 'task-content';
    content.innerHTML = `
        ${task.text}
        <div class="task-time">${task.time}</div>
    `;

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.onclick = (e) => {
        e.stopPropagation();
        editTask(task, li);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = (e) => {
        e.stopPropagation();
        taskList.removeChild(li);
        removeTask(task.id);
    };

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    li.appendChild(content);
    li.appendChild(actions);

    li.onclick = () => toggleComplete(task, li);
    taskList.appendChild(li);
}

function editTask(task, li) {
    const content = li.querySelector('.task-content');
    const newText = prompt('Edit task:', task.text);
    const newTime = prompt('Edit time (HH:MM):', task.time);
    
    if (newText !== null && newTime !== null) {
        task.text = newText;
        task.time = newTime;
        content.innerHTML = `
            ${task.text}
            <div class="task-time">${task.time}</div>
        `;
        updateTask(task);
    }
}

function toggleComplete(task, li) {
    task.completed = !task.completed;
    li.classList.toggle('completed');
    updateTask(task);
}

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTask(updatedTask) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => 
        task.id === updatedTask.id ? updatedTask : task
    );
    localStorage.setItem('tasks', JSON.stringify(tasks));
}