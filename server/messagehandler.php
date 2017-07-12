<?php 
require_once('../includes/database.php');
session_start();
date_default_timezone_set('Asia/Kolkata');
if(isset($_POST['message']) && !empty($_POST['message']))
{  //$return="we are in";
	$id=$_SESSION['id'];
	$message=htmlentities($_POST['message']);
	$date=time();
	//$return .=$date;
	$query=mysqli_query($con,"INSERT INTO `message` VALUES ('$id','".mysqli_real_escape_string($con,$message)."','$date')");
	//$return .= mysqli_error($con);
	if($query)
	{
		$return=1;
	}
	else
	{
		$return=0;
	}
	echo $return;
}

else
{

	$return=0;
	echo $return;
}
?>