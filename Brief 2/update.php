<?php
    include('scripts.php');
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        
    $requete    ="SELECT * FROM tasks WHERE id ='$id'";
    $query      = mysqli_query($connect,$requete);
    $rows       = mysqli_fetch_assoc($query);

?>

    <!DOCTYPE html>
    <html lang="en" >
    <head>
        <meta charset="utf-8" />
        <title>YouCode | Scrum Board</title>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
        <meta content="" name="description" />
        <meta content="" name="author" />
        
        <!-- ================== BEGIN core-css ================== -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
        <link href="assets/css/vendor.min.css" rel="stylesheet" />
        <link href="assets/css/default/app.min.css" rel="stylesheet" />
        <!-- ================== END core-css ================== -->
    </head>

    <body>
        <div id="modal-task">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form action="scripts.php" method="POST" id="form-task">
                            <div class="modal-header">
                                <h5 class="modal-title">Add Task</h5>
                                <a href="index.php" class="btn-close" data-bs-dismiss="modal"></a>
                            </div>
                            <div class="modal-body">
                                    <!-- This Input Allows Storing Task Index  -->
                                    <input type="hidden" name="task-id" id="task-id" value="<?php echo $rows['id'] ?>">
                                    <div class="mb-3">
                                        <label class="form-label">Title</label>
                                        <input type="text" class="form-control" name="task-title" value="<?php echo $rows['title'] ?>" id="task-title" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Type</label>
                                        <div class="ms-3">
                                            <div class="form-check mb-1">
                                                <input class="form-check-input" name="task-type" type="radio" value="2" id="Feature" <?php echo ($rows['type_id'] == 2) ? "checked" : ""; ?>/>
                                                <label class="form-check-label" for="task-type-feature">Feature</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" name="task-type" type="radio" value="1" id="Bug" <?php echo ($rows['type_id'] == 1) ? "checked" : ""; ?>/>
                                                <label class="form-check-label" for="task-type-bug">Bug</label>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Priority</label>
                                        <select class="form-select" name="task-priority" id="task-priority" required>
                                            <option value="">Please select</option>
                                            <option value="1"<?php echo ($rows['priority_id'] == 1) ? "selected" : ""; ?>>Low</option>
                                            <option value="2"<?php echo ($rows['priority_id'] == 2) ? "selected" : ""; ?>>Medium</option>
                                            <option value="3"<?php echo ($rows['priority_id'] == 3) ? "selected" : ""; ?>>High</option>
                                            <option value="4"<?php echo ($rows['priority_id'] == 4) ? "selected" : ""; ?>>Critical</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Status</label>
                                        <select class="form-select" name="task-status" id="task-status" required>
                                            <option value="">Please select</option>
                                            <option value="1"<?php echo ($rows['status_id'] == 1) ? "selected" : ""; ?>>To Do</option>
                                            <option value="2"<?php echo ($rows['status_id'] == 2) ? "selected" : ""; ?>>In Progress</option>
                                            <option value="3"<?php echo ($rows['status_id'] == 3) ? "selected" : ""; ?>>Done</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Date</label>
                                        <input type="datetime-local" class="form-control" value="<?php echo $rows['date'] ?>" name="task-date" id="task-date" required/>
                                    </div>
                                    <div class="mb-0">
                                        <label class="form-label">Description</label>
                                        <textarea class="form-control" name="task-description" rows="8" id="task-description" required ><?php echo $rows['description'] ?></textarea>
                                    </div>
                                
                            </div>
                            <div class="modal-footer">
                                <a href="index.php" class="btn btn-white" data-bs-dismiss="modal">Cancel</a>
                                <button type="submit" name="update" class="btn btn-warning task-action-btn" id="btnUpdate">Update</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    </html>
<?php
    }
?>