const input = document.getElementById('task-input');
const priority = document.getElementById('priority-select');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');
const toggle = document.getElementById('theme-toggle');

const STORAGE_KEY = 'neo_tasks';
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function createTaskElement(task, index) {
  const li = document.createElement('li');
  li.className = `task ${task.priority}`;
  li.dataset.index = index;

  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.value = task.text;
  textInput.disabled = true;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.background = 'crimson';

  actions.append(editBtn, deleteBtn);
  li.append(textInput, actions);
  return li;
}

function render() {
  list.innerHTML = '';
  tasks.forEach((t, i) => {
    list.appendChild(createTaskElement(t, i));
  });
  save();
}

function addTask() {
  const text = input.value.trim();
  const prio = priority.value;
  if (!text) return;
  tasks.push({ text, priority: prio });
  input.value = '';
  render();
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', e => e.key === 'Enter' && addTask());

list.addEventListener('click', e => {
  const li = e.target.closest('.task');
  const index = li.dataset.index;
  const inputField = li.querySelector('input');

  if (e.target.textContent === 'Edit') {
    inputField.disabled = false;
    inputField.focus();
    e.target.textContent = 'Save';
  } else if (e.target.textContent === 'Save') {
    tasks[index].text = inputField.value;
    inputField.disabled = true;
    e.target.textContent = 'Edit';
    save();
  } else if (e.target.textContent === 'Delete') {
    tasks.splice(index, 1);
    render();
  }
});

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('neo_theme', document.body.classList.contains('dark'));
});

// Load theme on start
if (localStorage.getItem('neo_theme') === 'true') {
  document.body.classList.add('dark');
  toggle.checked = true;
}

// Enable drag-and-drop
new Sortable(list, {
  animation: 150,
  onEnd: () => {
    const newOrder = [];
    list.querySelectorAll('.task').forEach(el => {
      const i = el.dataset.index;
      newOrder.push(tasks[i]);
    });
    tasks = newOrder;
    render();
  }
});

render();