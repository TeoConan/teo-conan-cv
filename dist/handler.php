<?php

include("../.env.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php/PHPMailer-5.2.28/src/Exception.php';
require 'php/PHPMailer-5.2.28/src/PHPMailer.php';
require 'php/PHPMailer-5.2.28/src/SMTP.php';

$mail = new PHPMailer(true);
$mail_subject = 'Teo Conan CV 2021 - Contact';
$mail_to_email = 'teo@teoconan.fr'; // your email
$mail_to_name = 'Teo Conan';

try {

	$mail_from_name = isset( $_POST['name'] ) ? $_POST['name'] : '';
	$mail_from_email = isset( $_POST['email'] ) ? $_POST['email'] : '';
	$mail_category = isset( $_POST['category'] ) ? $_POST['category'] : '';
	$mail_message = isset( $_POST['message'] ) ? $_POST['message'] : '';

	// Server settings
	$mail->isSMTP(); // Send using SMTP
	$mail->Host = 'smtp.gmail.com'; // Set the SMTP server to send through
	$mail->SMTPAuth = true; // Enable SMTP authentication
	$mail->Username = EMAIL_USER; // SMTP username
	$mail->Password = EMAIL_PASSWORD; // SMTP password
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
	$mail->Port = 465; // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

	$mail->setFrom($mail_from_email, $mail_from_name); // Your email
	$mail->addAddress($mail_to_email, $mail_to_name); // Add a recipient

	// Content
	$mail->isHTML(true); // Set email format to HTML

	$mail->Subject = $mail_subject;
	$mail->Body = '
		<strong>Name:</strong> ' . $mail_from_name . '<br>
		<strong>Email:</strong> ' . $mail_from_email . '<br>
		<strong>Category:</strong> ' . $mail_category . '<br>
		<strong>Message:</strong> ' . $mail_message;

	$mail->Send();

	echo 'Message has been sent';

} catch (Exception $e) {

	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

}