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

    <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
            <img id="logo_btn" src="assets/img/logo_btn.png" width="30px"/>
          <a class="navbar-brand" href="#slide-1">Jaylor Construction</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a class="homePage" href="index.html">Home</a></li>
            <li><a class="workPage" href="#slide-1">Work</a></li>
			<li><a class="aboutPage" href="#slide-1">About</a></li>
            <li><a class="contactPage" href="#slide-1">Contact</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
      
    
	  
	<!-- Slide 1 -->
	<section id="slide-1" class="homeSlide">
		<div class="bcg"
			data-center="background-position: 50% 0px;"
			data-top-bottom="background-position: 50% -100px;"
			data-anchor-target="#slide-1"
		>
		<div class="jumbotron">
        <?php
            $username = $_POST["username"];
            $usermail = $_POST["usermail"];
            $msg_text = $_POST["msg_text"];
            $ip = $_POST["ip"];
            $httpref = $_POST["httpref"];
            $httpagent = $_POST["httpagent"];

            if(empty($username) || empty($usermail) || empty($msg_text )) 
            {
                echo "<h3>You did not fill in all fields.</h3>\n";
                echo "<p>Please <a href=\"phpmailform.php\">try again!</a>!</p>\n</body>\n</html>";
                return;
            }

            if( (!strstr($usermail,"@")) || (!strstr($usermail,".")))
            {
                echo "<h3>You did not enter a valid email address, so no mail was sent.</h3>\n";
                echo "<p>Please <a href=\"phpmailform.php\">try again!</a>!</p>\n</body>\n</html>";
                return; 
            }


            $subject = $_POST["subject"];

            $msg_text = stripslashes($msg_text);

            $message = "Message: $msg_text \n
                Additional Info:\n
                IP address = $ip \n
                Browser Info: $httpagent \n
                Referring Page: $httpref \n
                ";

            $from = "From: $usermail\r\n";

            mail("eth5881@rit.edu", $subject, $message, $from);

        ?>

        <h3>Mail successfully sent.</h3>

        <p>Thank you! The following message has been sent:</p>

        <p>To: Eric Hunt<br />
            From: <?php echo $username ?> &lt;<?php echo $usermail ?>&gt;<br/>
            Subject: <?php echo $subject ?><br />
            Message Text: <?php echo $msg_text ?>
        </p>

        <div id="p-link">
            <p>To send another message, return to the <a href="contact.html" id="p-link">contact form</a>.</p>
        </div>
	</section>
      <hr>
      <footer class="footer">
        <p>&copy; 2016 Jaylor Construction &amp; Jaylor Heating and Cooling. All Rights Reserved.
            <br>Created by Eric Hunt.</p>
      </footer>	
      
      <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script src="assets/js/vendor/jquery.min.js"></script>
    <script src="dist/js/bootstrap.min.js"></script>
	<script src="dist/js/_main.js"></script>
	<script src="dist/js/lightbox.min.js"></script>

  </body>
</html>