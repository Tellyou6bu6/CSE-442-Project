<?php
	$db = mysql_connect('localhost', 'root', '', 'Sign_up');

	if(isset($_POST['Sign_up'])){
		$username = mysql_real_escape_string($_POST['username']);
		$email = mysql_real_escape_string($_POST['email']);
		$password = mysql_real_escape_string($_POST['password']);
	}