document.querySelector('.task-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const taskInput = document.querySelector('.task-input');
  const taskText = taskInput.value;
  
  if (taskText === '') {
      return; // Не добавлять пустую задачу
  }
  
  addTask(taskText);
  taskInput.value = '';
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;
  
  const deleteButton = createDeleteButton(li);
  li.appendChild(deleteButton);
  
  li.addEventListener('click', function() {
      li.classList.toggle('completed');
  });
  
  document.querySelector('.task-list').appendChild(li);
}

function createDeleteButton(taskElement) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
      taskElement.remove();
  });
  return deleteButton;
}

// Theme toggle functionality
document.querySelector('.theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  saveThemePreference();
});

function saveThemePreference() {
  const isDarkTheme = document.body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
}

// Load theme preference on page load
loadThemePreference();