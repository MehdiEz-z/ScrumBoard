<?php
    require 'vendor/autoload.php';

    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    $serverName     = $_ENV['DB_SERVER'];
    $userName       = $_ENV['DB_USER'];
    $password       = $_ENV['DB_PASSWORD'];
    $databaseName   = $_ENV['DB_DATABASENAME'];
    
    //CONNECT TO MYSQL DATABASE USING MYSQLI
    $connect = mysqli_connect($serverName, $userName, $password, $databaseName);
    
    // Check connection
    if(!$connect){
        die("ERROR: Could not connect. " .mysqli_connect_error());
    }
    
?> 