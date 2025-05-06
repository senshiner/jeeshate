
// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksList = document.getElementById('tasksList');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize tasks array from localStorage or empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

// Theme toggle functionality
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  // Save theme preference
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  themeToggle.checked = true;
}

// Add new task
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    saveTasksToLocalStorage();
    renderTasks();
    taskInput.value = '';
  }
}

// Add task on button click
addTaskBtn.addEventListener('click', addTask);

// Add task on Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Toggle task completion status
function toggleTaskCompletion(id) {
  tasks = tasks.map(task => 
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  
  saveTasksToLocalStorage();
  renderTasks();
}

// Delete task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasksToLocalStorage();
  renderTasks();
}

// Save tasks to localStorage
function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks based on current filter
function renderTasks() {
  tasksList.innerHTML = '';
  
  let filteredTasks = tasks;
  
  // Apply filter
  if (currentFilter === 'active') {
    filteredTasks = tasks.filter(task => !task.completed);
  } else if (currentFilter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  }
  
  // If no tasks, show a message
  if (filteredTasks.length === 0) {
    const emptyMessage = document.createElement('div');
    emptyMessage.className = 'empty-tasks';
    emptyMessage.textContent = currentFilter === 'all' 
      ? 'No tasks yet. Add your first task above!' 
      : `No ${currentFilter} tasks.`;
    emptyMessage.style.gridColumn = '1 / -1';
    emptyMessage.style.textAlign = 'center';
    emptyMessage.style.padding = '30px';
    tasksList.appendChild(emptyMessage);
    return;
  }
  
  // Create task elements
  filteredTasks.forEach(task => {
    const taskCard = document.createElement('div');
    taskCard.className = `task-card ${task.completed ? 'completed' : ''}`;
    
    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';
    
    const taskText = document.createElement('p');
    taskText.className = 'task-text';
    taskText.textContent = task.text;
    
    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    
    // Event listeners
    taskContent.addEventListener('click', () => toggleTaskCompletion(task.id));
    deleteButton.addEventListener('click', () => deleteTask(task.id));
    
    // Assemble elements
    taskContent.appendChild(taskText);
    taskActions.appendChild(deleteButton);
    taskCard.appendChild(taskContent);
    taskCard.appendChild(taskActions);
    
    tasksList.appendChild(taskCard);
  });
}

// Set up filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active filter
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Set current filter
    currentFilter = btn.getAttribute('data-filter');
    renderTasks();
  });
});

// Initialize the app
renderTasks();

// Add smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add animation when elements come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll('section');
  
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = (rect.top <= window.innerHeight * 0.8);
    
    if (isVisible) {
      el.style.opacity = '1';
    }
  });
};

// Initial render and set up scroll listener
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);
