<?php 
if(isset($_GET['submit'])){
    $to = "eth5881@rit.edu"; // this is your Email address
    $from = $_GET['email']; // this is the sender's Email address
    $first_name = $_GET['first_name'];
    $last_name = $_GET['last_name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_GET['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_GET['message'];

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
    $headers .= "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>