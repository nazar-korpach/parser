<?php
$url = $argv[1];

$output = shell_exec("node src/index.js $url");

echo "$output\n";
?> 