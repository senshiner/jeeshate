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