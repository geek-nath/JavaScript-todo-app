const taskField = document.getElementById('taskField');
const addedTaskBox = document.getElementById('addedTaskBox');



let addedReminder;
    // delete button
    let deleteButton;
    

taskField.addEventListener('keydown', (e)=> {
    if(e.key === 'Enter') {
        addTodoFunction();
    }
});


function addTodoFunction() {
    // console.log(taskField.value);

    addedReminder = document.createElement('div');
    addedReminder.className = 'added_reminders p-3 text-white position-relative';

    addedReminder.innerText = taskField.value;

    addedTaskBox.appendChild(addedReminder);

    deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-primary delete_btn position-absolute';
    deleteButton.addEventListener('click', deleteTask);
    
    // delete trash icon
    const deleteTrashIcon = document.createElement('i');
    deleteTrashIcon.className = 'fa-solid fa-trash-can';

    addedReminder.appendChild(deleteButton);
    deleteButton.appendChild(deleteTrashIcon);

    taskField.value = '';
}

// delete task function

function deleteTask() {
    let parentEl = this.parentElement;
    parentEl.style.display = 'none';
}