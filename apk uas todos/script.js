// Mendapatkan elemen HTML
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Menyimpan tugas dalam array
let tasks = [];

// Menambahkan event listener untuk tombol tambah tugas
addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task !== '') {
    tasks.push(task);
    taskInput.value = '';
    renderTaskList();
  }
});

// Menampilkan tugas dalam daftar
function renderTaskList() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTaskList();
    });
    taskList.appendChild(li);
  });
}
