<?php 
$con=mysqli_connect("localhost","root","","letchat");

if(mysqli_connect_errno())
{
	echo 'Could not connect to database'.mysqli_connect_errno();
	exit("cant connect");
}



?>