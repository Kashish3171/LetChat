<?php
require_once('../includes/database.php');
session_start();
date_default_timezone_set('Asia/Kolkata');

$newdate=time();
$newdate =$newdate-86400;

$delete=mysqli_query($con,"DELETE  FROM `message` WHERE `date` <= '$newdate'");






if(isset($_GET))
{
	$join_query=mysqli_query($con,"SELECT `text`,`date`,`fname`,`email` FROM `message` JOIN `users` ON `message`.`id`=`users`.`id` ORDER BY `date`");
	$obj=array();

	while($join_obj=mysqli_fetch_assoc($join_query))
		{
			
			array_push($obj,$join_obj);

		}

	$jsArray = array();
foreach($obj as $array) {
	 $date=date(" H:i:s",$array['date']);
   $jsArray[] = array($array['text'],$date,$array['fname'],$array['email']); 
}

echo json_encode($jsArray);

	
}
?>