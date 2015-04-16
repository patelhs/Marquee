<?php
require_once('recaptchalib.php');

	$owner_email = 'info@marqueehospitality.com';
	$headers = 'From:' . $_POST["email"];
	$subject = 'A message from your site visitor ' . $_POST["name"];
	$messageBody = "";
	
	if($_POST['name']!='nope'){
		$messageBody .= '<p>Visitor: ' . $_POST["name"] . '</p>' . "\n";
		$messageBody .= '<br>' . "\n";
	}
	if($_POST['email']!='nope'){
		$messageBody .= '<p>Email Address: ' . $_POST['email'] . '</p>' . "\n";
		$messageBody .= '<br>' . "\n";
	}else{
		$headers = '';
	}
	if($_POST['state']!='nope'){		
		$messageBody .= '<p>State: ' . $_POST['state'] . '</p>' . "\n";
		$messageBody .= '<br>' . "\n";
	}
	if($_POST['phone']!='nope'){		
		$messageBody .= '<p>Phone Number: ' . $_POST['phone'] . '</p>' . "\n";
		$messageBody .= '<br>' . "\n";
	}	
	if($_POST['fax']!='nope'){		
		$messageBody .= '<p>Fax Number: ' . $_POST['fax'] . '</p>' . "\n";
		$messageBody .= '<br>' . "\n";
	}
	if($_POST['message']!='nope'){
		$messageBody .= '<p>Message: ' . $_POST['message'] . '</p>' . "\n";
	}
	
	if($_POST["stripHTML"] == 'true'){
		$messageBody = strip_tags($messageBody);
	}
	
	$challenge = $_POST['challenge'];
	$response = $_POST['response'];
	$ip = $_SERVER['REMOTE_ADDR']?:($_SERVER['HTTP_X_FORWARDED_FOR']?:$_SERVER['HTTP_CLIENT_IP']);
 
 
  	$privatekey = "6LeHDfUSAAAAAO-cz1sru6Wd4_6osD-L72Z4qTI-";
  	$resp = recaptcha_check_answer ($privatekey,
                                $_SERVER["REMOTE_ADDR"],
                                $challenge,
                                $response);


  	try{
		
		if(!$resp->is_valid) {
    		// What happens when the CAPTCHA was entered incorrectly
    		//echo 'The reCAPTCHA was nott entered correctly. Go back and try it again.';
			throw new Exception('The reCAPTCHA was nott entered correctly. Try it again.');
  		} else {
   		// Your code here to handle a successful verification 
		if(!mail($owner_email, $subject, $messageBody)){
			throw new Exception('mail failed');
		}else{
			echo 'mail sent';
		}
		}
	}catch(Exception $e){
		echo $e->getMessage() ."\n";
		//throw $e;
	}
?>