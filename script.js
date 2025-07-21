function addTask() {
  const taskText = document.getElementById('taskInput').value.trim();
  const taskDate = document.getElementById('taskDate').value;

  if (!taskText || !taskDate) {
    alert('Please enter both task and date/time.');
    return;
  }

  const li = document.createElement('li');
  const taskId = Date.now();

  li.innerHTML = `
    <div class="task-info">
      <div>
        <strong>${taskText}</strong><br/>
        <small>${new Date(taskDate).toLocaleString()}</small>
      </div>
      <div class="task-actions">
        <button class="glass-button complete-btn" onclick="toggleComplete(${taskId})">✅</button>
        <button class="glass-button edit-btn" onclick="editTask(${taskId})">✏️</button>
        <button class="glass-button delete-btn" onclick="deleteTask(${taskId})">🗑️</button>
      </div>
    </div>
  `;

  li.setAttribute('data-id', taskId);
  document.getElementById('taskList').appendChild(li);

  document.getElementById('taskInput').value = '';
  document.getElementById('taskDate').value = '';
}

function toggleComplete(id) {
  const item = document.querySelector(`li[data-id='${id}']`);
  item.classList.toggle('completed');
}

function editTask(id) {
  const item = document.querySelector(`li[data-id='${id}']`);
  const taskText = prompt('Edit your task:', item.querySelector('strong').innerText);
  if (taskText) {
    item.querySelector('strong').innerText = taskText;
  }
}

function deleteTask(id) {
  const item = document.querySelector(`li[data-id='${id}']`);
  item.remove();
}
