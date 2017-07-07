<?php
require_once('../includes/database.php');
session_start();
if(isset($_GET))
{
	$join_query=mysqli_query($con,"SELECT `text`,`date`,`fname`,`email` FROM `message` JOIN `users` ON `message`.`id`=`users`.`id`");
	$obj=array();

	while($join_obj=mysqli_fetch_assoc($join_query))
		{
			
			array_push($obj,$join_obj);

		}

	$jsArray = array();
foreach($obj as $array) {
   $jsArray[] = array($array['text'], (int) $array['date'],$array['fname'],$array['email']); 
}

echo json_encode($jsArray);

	
}
?>