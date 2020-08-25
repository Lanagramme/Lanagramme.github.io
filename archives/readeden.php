<?php
    header("Access-Control-Allow-Origin: *");
    
    $myfile = fopen("articles.json", "r") or die("Unable to open file!");
    echo fread($myfile,filesize("articles.json"));
    fclose($myfile);
?>