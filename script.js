let items = JSON.parse(localStorage.getItem("tasks")) || [];

function saveItems() {
  localStorage.setItem("tasks", JSON.stringify(items));
}

function renderItems() {
  const list = document.getElementById("itemList");
  list.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.value = item.text;
    input.disabled = true;

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
      input.disabled = false;
      input.focus();
    };

    input.addEventListener("blur", () => {
      input.disabled = true;
      items[index].text = input.value;
      saveItems();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      items.splice(index, 1);
      saveItems();
      renderItems();
    };

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);
    li.appendChild(input);
    li.appendChild(actions);
    list.appendChild(li);
  });
}

function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim();
  if (!value) return;

  items.push({ text: value });
  saveItems();
  renderItems();
  input.value = "";
}

document.addEventListener("DOMContentLoaded", renderItems);