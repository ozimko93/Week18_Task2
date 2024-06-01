const input = document.getElementById('input');
const button = document.getElementById('button');
const taskList = document.getElementById('taskList');
const notification = document.getElementById('notification');
const btnClear = document.getElementById('btn_clear');
function loadTasks() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    taskList.innerHTML = savedTasks;
    btnClear.disabled = false;
    notification.style.display = 'none';
  }
}
function saveTasks() {
  localStorage.setItem('tasks', taskList.innerHTML);
}
loadTasks();
button.addEventListener('click', function () {
  const text = input.value;
  if (text !== '') {
    const newTask = document.createElement('div');
    newTask.textContent = text;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newTask.append(checkbox);
    taskList.append(newTask);
    input.value = '';
    btnClear.disabled = false;
    notification.style.display = 'none';
    saveTasks();
  }
});
btnClear.addEventListener('click', function () {
  taskList.innerHTML = '';
  btnClear.disabled = true;
  notification.style.display = 'block';
  localStorage.removeItem('tasks');
});
