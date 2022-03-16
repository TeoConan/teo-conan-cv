<?php


$mail_from_name = isset( $_POST['name'] ) ? $_POST['name'] : '';
$mail_from_email = isset( $_POST['email'] ) ? $_POST['email'] : '';
$mail_category = isset( $_POST['category'] ) ? $_POST['category'] : '';
$mail_message = isset( $_POST['message'] ) ? $_POST['message'] : '';

try {
	ob_start();

	include('./template.php');

	$content = ob_get_contents();

	$fileName = "./mails/" . date('d-m-Y_H-i-s') . ".html";
	echo($fileName . PHP_EOL);
	$file = fopen($fileName, "w");
	fwrite($file, $content);

	echo 'Message has been saved';

} catch (Exception $e) {

	echo "Message could not be save. System Error: ";

}
