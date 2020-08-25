<?php
    header("Access-Control-Allow-Origin: *");

    $myfile = fopen("articles.json", "w") or die("Unable to open file!");
    fwrite($myfile, $_POST["data"]);
    fclose($myfile);

    echo "written"
?>