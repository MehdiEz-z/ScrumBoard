/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

let toDoTask = document.getElementById('toDoTask');
let inProgressTask = document.getElementById('inProgressTask');
let doneTask = document.getElementById('doneTask');
let countToDoTasks = document.getElementById('to-do-tasks-count');
let countInProgressTasks = document.getElementById('in-progress-tasks-count');
let countDoneTasks = document.getElementById('done-tasks-count');
let title = document.getElementById('title');
let type = document.querySelector('.form-check-input:checked');
let priority = document.getElementById('priority');
let Status = document.getElementById('status');
let date = document.getElementById('date');
let description = document.getElementById('description');
document.getElementById('addTask').addEventListener('click',()=>{
    btnSave.style.display = 'block'
    btnEdit.style.display = 'none'
    btnDelete.style.display = 'none'
    initTaskForm()
});
document.getElementById('btnSave').addEventListener('click',createTask);

afficherTask();

function createTask() {
    // Create task object
    let newTask = {
        title : title.value,
        type : type.value,
        priority : priority.value,
        status : Status.value,
        date : date.value,
        description : description.value,
    }
    // Ajoutez object au Array
    tasks.push(newTask);
    // close modal
    close();
    // refresh tasks
    afficherTask();
}

function afficherTask() {
    // remove tasks elements
    clearTask();
    
    // initialiser task form

    let countHash = 0; // Compteur Hashtag
    let countToDo = 0, countInProgress = 0, countDone = 0; // compteur number of tasks
    
    for (let i = 0; i < tasks.length; i++) {
        countHash++; // incrémentation Hashtag

        if (tasks[i].status == "To Do") {
            countToDo++; // incrémentation compteur To Do

            toDoTask.innerHTML += `
            <button class="border-0 mb-2px d-flex px-3 pb-3 pt-2 bg-white" data-bs-toggle="modal" data-bs-target="#modalTask" onclick = "editTask(${i})">
                <div class="">
                    <i class="fa-regular fa-circle-question fa-lg pe-3 pt-3"></i>
                </div>
                <div class="text-start">
                    <div class="fw-bold fs-5">${tasks[i].title}</div>
                    <div class="">
                        <div class="text-black-50">#${countHash} created in ${tasks[i].date}</div>
                        <div class="descrip mb-2"
                            title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">
                            ${tasks[i].description}</div>
                    </div>
                    <div class="">
                        <span class="bg-primary text-white rounded-1 fw-bold">${tasks[i].priority}</span>
                        <span class="bg-light rounded-1 fw-bold">${tasks[i].type}</span>
                    </div>
                </div>
			</button>  `
        }
        else if (tasks[i].status == "In Progress"){
            countInProgress++; // incrémentation compteur In Progress

            inProgressTask.innerHTML += `
            <button class="border-0 mb-2px d-flex px-3 pb-3 pt-2 bg-white" data-bs-toggle="modal" data-bs-target="#modalTask" onclick = "editTask(${i})">
                <div class="">
                    <i class="fa fa-circle-notch fa-lg pe-3 pt-3"></i>
                </div>
                <div class="text-start">
                    <div class="fw-bold fs-5">${tasks[i].title}</div>
                    <div class="">
                        <div class="text-black-50">#${countHash} created in ${tasks[i].date}</div>
                        <div class="descrip mb-2" title="including as many details as possible.">${tasks[i].description}</div>
                    </div>
                    <div class="">
                        <span class="bg-primary text-white rounded-1 fw-bold">${tasks[i].priority}</span>
                        <span class="bg-light rounded-1 fw-bold">${tasks[i].type}</span>
                    </div>
                </div>
			</button>`
        }
        else {
            countDone++; // incrémentation compteur Done

            doneTask.innerHTML += `
            <button class="border-0 mb-2px d-flex px-3 pb-3 pt-2 bg-white" data-bs-toggle="modal" data-bs-target="#modalTask" onclick = "editTask(${i})">
                <div class="">
                    <i class="fa-regular fa-circle-check fa-lg pe-3 pt-3"></i>
                </div>
                <div class="text-start">
                    <div class="fw-bold fs-5">${tasks[i].title}</div>
                    <div class="">
                        <div class="text-black-50">#${countHash} created in ${tasks[i].date}</div>
                        <div class="descrip mb-2"
                            title="as they can be helpful in reproducing the steps that caused the problem in the first place.">
                            ${tasks[i].description}</div>
                    </div>
                    <div class="">
                        <span class="bg-primary text-white rounded-1 fw-bold">${tasks[i].priority}</span>
                        <span class="bg-light rounded-1 fw-bold">${tasks[i].type}</span>
                    </div>
                </div>
			</button>`
        }
    }
countToDoTasks.innerText = countToDo;
countInProgressTasks.innerText = countInProgress;
countDoneTasks.innerText = countDone;
}

function editTask(i) {
    btnSave.style.display = 'none'
    btnEdit.style.display = 'block'
    btnDelete.style.display = 'block'
    // affichage task 
    let Feature = document.getElementById('feature');
    let bug = document.getElementById('bug');

    title.value = tasks[i].title;
    priority.value = tasks[i].priority; 
    Status.value = tasks[i].status; 
    date.value = tasks[i].date; 
    description.value = tasks[i].description;  
    
    if(feature.value == tasks[i].type){
        Feature.checked = true;
    }
    else{
        bug.checked = true;
    }
    document.getElementById('btnEdit').onclick = ()=>{
        updateTask(i)
    }
    document.getElementById('btnDelete').onclick = ()=>{
        deleteTask(i)
    }
}

function updateTask(i) {
    // Create task object
    let newTask = {
        title : title.value,
        type : type.value,
        priority : priority.value,
        status : Status.value,
        date : date.value,
        description : description.value,
    }
    // Ajoutez object au Array
    tasks.splice(i,1, newTask);
    // close modal
    close();
    // refresh tasks
    afficherTask();

}

function deleteTask(i) {
    // Remove task from array by index splice function
    tasks.splice(i,1);
    // close modal form
    close();
    // refresh tasks
    afficherTask();
}

function initTaskForm() {
    // Clear task form from data
    document.getElementById('form').reset();
}

function clearTask(){
    // clear all tasks
    toDoTask.innerHTML = "";
    inProgressTask.innerHTML = "";
    doneTask.innerHTML = "";
}

function close(){
    document.getElementById('btnClose').click();
}

