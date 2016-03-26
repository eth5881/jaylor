<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>Jaylor Construction</title>
      
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>

	<link href="dist/css/main.css" rel="stylesheet">
	
	<link href="dist/css/animate.css" rel="stylesheet">
	
	<link href="dist/css/thumbnail-gallery.css" rel="stylesheet">
	
	<link rel="stylesheet" href="dist/css/lightbox.min.css">
	
    <!-- Bootstrap core CSS -->
    <link href="dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="dist/css/jumbotron-narrow.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

        <?php
            $username = $_POST["username"];
            $usermail = $_POST["usermail"];
            $msg_text = $_POST["msg_text"];
            $ip = $_POST["ip"];
            $httpref = $_POST["httpref"];
            $httpagent = $_POST["httpagent"];

            $subject = $_POST["subject"];

            $msg_text = stripslashes($msg_text);

            $message = $msg_text;

            $from = $usermail;

            mail("eth5881@rit.edu", $subject, $message, $from);

        ?>
      
      <p>Message sent.</p>

  </body>
</html>