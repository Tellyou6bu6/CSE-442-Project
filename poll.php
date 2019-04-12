<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Test</title>
		<link rel="stylesheet" type="text/css" href="main.css">
	</head>	
	<body bgcolor="#F5F5DC">
	<body>
		<div class="poll">
			<div class="poll-question">
				This poll is just for testing.
			</div>
			<form action="vote.php" method="post">
				<div class="poll-options">
					<div class="poll-option">
						<input type="radio" name="choice" value="1" id="c1">
						<label for="c1"> Choice 1 </label>
					</div>
					<div class="poll-option">
						<input type="radio" name="choice" value="2" id="c2">
						<label for="c2"> Choice 2 </label>
					</div>
					<div class="poll-option">
						<input type="radio" name="choice" value="3" id="c2">
						<label for="c3"> Choice 3</label>
					</div>
				</div>
			    <center>
			    	<input type="submit" name="submit" value="Submit answer", align="center">	
			    </center>
			</form>
		</div>
	</body>
</html>