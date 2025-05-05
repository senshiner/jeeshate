document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task');
  const taskList = document.getElementById('task-list');
  const themeToggle = document.getElementById('theme-toggle');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  // State
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let currentFilter = 'all';
  
  // Initialize the app
  init();
  
  function init() {
    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Render tasks
    renderTasks();
    
    // Add event listeners
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') addTask();
    });
    
    themeToggle.addEventListener('click', toggleTheme);
    
    // Filter event listeners
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Set active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update filter
        currentFilter = btn.getAttribute('data-filter');
        renderTasks();
      });
    });
  }
  
  function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText) {
      // Create new task
      const newTask = {
        id: Date.now().toString(),
        text: taskText,
        completed: false,
        createdAt: new Date()
      };
      
      // Add to tasks array
      tasks.push(newTask);
      
      // Save to localStorage
      saveTasks();
      
      // Clear input
      taskInput.value = '';
      
      // Re-render tasks
      renderTasks();
      
      // Focus input
      taskInput.focus();
    }
  }
  
  function toggleTaskStatus(id) {
    // Find and toggle the task
    tasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    
    // Save and re-render
    saveTasks();
    renderTasks();
  }
  
  function deleteTask(id) {
    // Remove the task
    tasks = tasks.filter(task => task.id !== id);
    
    // Save and re-render
    saveTasks();
    renderTasks();
  }
  
  function renderTasks() {
    // Clear the task list
    taskList.innerHTML = '';
    
    // Filter tasks based on current filter
    let filteredTasks = tasks;
    
    if (currentFilter === 'active') {
      filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
      filteredTasks = tasks.filter(task => task.completed);
    }
    
    // Sort tasks by creation date (newest first)
    filteredTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // If no tasks, show a message
    if (filteredTasks.length === 0) {
      const emptyMessage = document.createElement('div');
      emptyMessage.className = 'empty-message';
      emptyMessage.textContent = 'No tasks to show. Add some!';
      emptyMessage.style.gridColumn = '1 / -1';
      emptyMessage.style.textAlign = 'center';
      emptyMessage.style.padding = '2rem';
      taskList.appendChild(emptyMessage);
      return;
    }
    
    // Create task elements
    filteredTasks.forEach(task => {
      const taskElement = createTaskElement(task);
      taskList.appendChild(taskElement);
    });
  }
  
  function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;
    taskElement.setAttribute('data-id', task.id);
    
    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';
    taskContent.textContent = task.text;
    
    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';
    
    const toggleButton = document.createElement('button');
    toggleButton.className = 'task-toggle';
    toggleButton.innerHTML = task.completed ? 
      '<i class="fas fa-undo"></i>' : 
      '<i class="fas fa-check"></i>';
    toggleButton.addEventListener('click', () => toggleTaskStatus(task.id));
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-delete';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener('click', () => deleteTask(task.id));
    
    taskActions.appendChild(toggleButton);
    taskActions.appendChild(deleteButton);
    
    taskElement.appendChild(taskContent);
    taskElement.appendChild(taskActions);
    
    return taskElement;
  }
  
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    
    // Update icon
    themeToggle.innerHTML = isDarkMode ? 
      '<i class="fas fa-sun"></i>' : 
      '<i class="fas fa-moon"></i>';
    
    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
  }
});

// Add some sample tasks for demo purposes
window.addEventListener('load', () => {
  if (!localStorage.getItem('tasks')) {
    const sampleTasks = [
      {
        id: '1',
        text: 'Welcome to TaskBrut! This is a sample task',
        completed: false,
        createdAt: new Date()
      },
      {
        id: '2',
        text: 'Click the check icon to mark a task as completed',
        completed: false,
        createdAt: new Date(Date.now() - 1000 * 60)
      },
      {
        id: '3',
        text: 'This task is completed. Click the undo icon to make it active again',
        completed: true,
        createdAt: new Date(Date.now() - 1000 * 60 * 2)
      }
    ];
    
    localStorage.setItem('tasks', JSON.stringify(sampleTasks));
  }
});