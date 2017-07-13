<?php
require_once ("../includes/database.php");
if(isset($_POST['email']) && isset($_POST['password']))
{	session_start();
	$email=htmlentities($_POST['email']);
	$password=htmlentities($_POST['password']);
	$password=md5($password);

 $result=mysqli_query($con,"SELECT * FROM `users` WHERE `email`= '".mysqli_real_escape_string($con,$email)."' AND `password`= '".mysqli_real_escape_string($con,$password)."'");

 if(mysqli_num_rows($result)==1)
 {
 	$row=mysqli_fetch_assoc($result);
 	$_SESSION['id']=$row['id'];
 	$return ="Welcome to Let's chat !";
 }
 else
 {
 	$return ="Invalid email or password";
 }

}
else if(isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['signupemail']) 
	&& isset($_POST['signuppassword']))
{
	$firstname=htmlentities($_POST['fname']);
	$lastname=htmlentities($_POST['lname']);
	$signupemail=htmlentities($_POST['signupemail']);
	$signuppassword=htmlentities($_POST['signuppassword']);
	$signuppassword=md5($signuppassword);

$resultcheck=mysqli_query($con,"SELECT * FROM `users` WHERE `email`= '".mysqli_real_escape_string($con,$signupemail)."'");
	if(mysqli_num_rows($resultcheck)>=1)
	{
		$return ="This Email is already registered with us";
	}
	else
	{
		$insertresult=mysqli_query($con,"INSERT INTO `users` VALUES ('','".mysqli_real_escape_string($con,$firstname)."','".mysqli_real_escape_string($con,$lastname)."','".mysqli_real_escape_string($con,$signupemail)."','".mysqli_real_escape_string($con,$signuppassword)."')");
		if($insertresult)
		{

			$return = "Welcome to letchat";
		}
		else
		{
			$return ="unknow error occured. Please try again";
		}
	}
}

else
{
	$return ="Please try again later";
}
echo $return;
?>