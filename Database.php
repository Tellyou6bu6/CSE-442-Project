<?php
	$username = "";
	$email = "";
	$error = array();

	$db = mysql_connect('localhost', 'root', '', 'Sign_up');

	if(isset($_POST['Sign_up'])){
		$username = mysql_real_escape_string($_POST['username']);
		$password = mysql_real_escape_string($_POST['password']);
		$password_1 = mysql_real_escape_string($_POST['password']);
		$email = mysql_real_escape_string($_POST['email']);
		$phone = mysql_real_escape_string($_POST['phone'];

	if(empty($username)){
		array_push($error, "do not enter empty username")
	}
	if(empty($password)){
		array_push($error, "do not enter empty password")
	}
	if(empty($email)){
		array_push($error, "do not enter empty email")
	}
	if(empty($email)){
		array_push($error, "do not enter empty email")
	}

	if ($password != $password_1) {
		array_push($error, "password doesn't match")
	}

	if(count($error) == 0){
		$password = md5($password_1);
		$sql = "INSERT INTO users (username,password,email,phone) VALUES ('$username', '$password', '$mail', '$phone')";
		mysqli_master_query($db, $sql);
	}
}

?>