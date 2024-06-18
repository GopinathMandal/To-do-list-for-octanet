document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('div');
    taskItem.className = 'task';

    const taskDescription = document.createElement('span');
    taskDescription.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.className = 'complete';
    completeButton.innerHTML = '<i class="fa fa-check"></i>';
    completeButton.addEventListener('click', () => {
        taskDescription.style.textDecoration = 'line-through';
        taskDescription.style.color = 'grey';
    });

    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.innerHTML = '<i class="fa fa-pencil"></i>';
    editButton.addEventListener('click', () => {
        document.getElementById('new-task').value = taskText;
        taskList.removeChild(taskItem);
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskDescription);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    document.getElementById('new-task').value = '';
}
