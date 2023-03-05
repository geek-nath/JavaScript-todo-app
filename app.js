const taskField = document.getElementById('taskField');
const addedTaskBox = document.getElementById('addedTaskBox');

taskField.addEventListener('keydown', (e)=> {
    if(e.key === 'Enter') {
        addTodoFunction();
    }
});

function addTodoFunction() {
    // console.log(taskField.value);

    const addedReminder = document.createElement('div');
    addedReminder.className = 'added_reminders p-3 text-white position-relative';
    addedReminder.innerText = taskField.value;

    addedTaskBox.appendChild(addedReminder);

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-primary delete_btn position-absolute';
    
    // delete trash icon
    const deleteTrashIcon = document.createElement('i');
    deleteTrashIcon.className = 'fa-solid fa-trash-can';

    addedReminder.appendChild(deleteButton);
    deleteButton.appendChild(deleteTrashIcon);

    deleteButton.addEventListener('click', deleteTask);
}