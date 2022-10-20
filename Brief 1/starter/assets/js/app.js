/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

let toDoTask = document.getElementById('toDoTask');
let inProgressTask = document.getElementById('inProgressTask');
let doneTask = document.getElementById('doneTask');
let countHash = 0;

afficherTask();

function afficherTask() {
    // Remove tasks elements
    toDoTask.innerHTML = "";
    inProgressTask.innerHTML = "";
    doneTask.innerHTML = "";
    // initialiser task form
    for (let i = 0; i < tasks.length; i++) {
        countHash++;
        if (tasks[i].status == "To Do") {
            toDoTask.innerHTML += `
            <button class="border-0 mb-2px d-flex px-3 pb-3 pt-2 bg-white">
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
            inProgressTask.innerHTML += `
            <button class="border-0 mb-2px d-flex px-3 pb-3 pt-2 bg-white">
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
            doneTask.innerHTML += `
            <button class="border-0 mb-2px d-flex px-3 pb-3 pt-2 bg-white">
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
}
function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form

}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks

}

function editTask() {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks

}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}
