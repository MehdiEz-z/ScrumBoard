<?php
    //INCLUDE DATABASE FILE
    include('database.php');
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    // if(isset($_POST['delete']))      deleteTask();
    if(isset($_GET['Sid']))      deleteTask();
    

    function saveTask()
    {
        //CODE HERE
        $title      =$_POST['task-title'];
        $type       =$_POST['task-type'];
        $priority   =$_POST['task-priority'];
        $status     =$_POST['task-status'];
        $date       =$_POST['task-date'];
        $description=$_POST['task-description'];
        require 'database.php';
            
        $requete    ="INSERT INTO tasks (`title`,`type_id`,`priority_id`,`status_id`,`date`,`description`) 
                          VALUES ('$title','$type','$priority','$status','$date','$description')";
        $query      =mysqli_query($connect,$requete);
        if($query){
            //SQL INSERT
            $_SESSION['message'] = "Task has been added successfully !";
        }
		header('location: index.php');
        
    }

    function getTasks($status)
    {
            
        //CODE HERE
        require 'database.php';
        $requete    = "SELECT tasks.id, tasks.title, tasks.date, tasks.description, types.name AS 'type', priorities.name AS 'priority'
            FROM tasks  , types , priorities 
            WHERE tasks.type_id = types.id AND tasks.priority_id = priorities.id AND tasks.status_id = $status";

        $query      = mysqli_query($connect, $requete);
        
        $counter    =0;
        while($rows = mysqli_fetch_assoc($query)){

            $counter ++;
            if($status == 1){
                $icon = 'far fa-question-circle';   
            }else if($status == 2){
                $icon = 'fas fa-circle-notch fa-spin';
            }else{
                $icon = 'far fa-circle-check';
            }
            echo '
                <button class="btn-global list-group-item list-group-item-action d-flex">
                    <div class="me-3 fs-16px">
                        <i class=" '.$icon.' text-green fa-fw"></i> 
                    </div>
                    <div class="flex-fill w-75">
                        <div class="fs-14px lh-12 mb-2px fw-bold text-dark text-truncate">'.$rows['title'].'</div>
                        <div class="mb-1 fs-12px">
                            <div class="text-gray-600 flex-1">#'.$rows['id'].' created in '.$rows['date'].'</div>
                            <div class="text-gray-900 flex-1 text-truncate" title="'.$rows['description'].'">'.$rows['description'].'</div>
                        </div>
                        <div class="mb-1">
                            <span class="badge bg-primary">'.$rows['priority'].'</span>
                            <span class="badge bg-gray-300 text-gray-900">'.$rows['type'].'</span>
                        </div>
                    </div>
                    <div class="col-1">
                        <span>
                            <a href="update.php?id='.$rows['id'].'" ><i class="btn-modif fas fa-edit text-green fs-5 ms-3 pt-2"></i></a>
                            <a href="index.php?Sid='.$rows['id'].'" ><i name = "delete" class="btn-modif fa-solid fa-trash text-danger fs-5 ms-3 pt-2"></i></a>
                        </span>
                    </div>
                </button> ';
                
        }
         
        //SQL SELECT
        // echo "Fetch all tasks";
    }
    function counterTask($status)
    {
        require 'database.php';
        $requete    = "SELECT * FROM tasks WHERE status_id='$status' ";
        $query      = mysqli_query($connect, $requete);
        
        echo mysqli_num_rows($query);
    }

    function updateTask()
    {
        //CODE HERE
        require 'database.php';
        $id         =$_POST['task-id'];
        $title      =$_POST['task-title'];
        $type       =$_POST['task-type'];
        $priority   =$_POST['task-priority'];
        $status     =$_POST['task-status'];
        $date       =$_POST['task-date'];
        $description=$_POST['task-description'];

        $requete    ="UPDATE tasks SET `title`='$title',`type_id`='$type',`priority_id`='$priority',
            `status_id`='$status',`date`='$date',`description`='$description' WHERE id=$id";
        $query      =mysqli_query($connect,$requete);
        if($query){
            //SQL UPDATE
            $_SESSION['message'] = "Task has been updated successfully !";
        }
		header('location: index.php');
    }

    function deleteTask()
    {
        //CODE HERE
        require 'database.php';
        $id         = $_GET['Sid'];
        $requete    ="DELETE FROM tasks where id='$id'";
        $query      =mysqli_query($connect,$requete);
        if($query){
            //SQL DELETE
            $_SESSION['message'] = "Task has been deleted successfully !";
        }
		header('location: index.php');
    }

?>