<?php
try{
		if(!mail('phemals@yahoo.com', 'My subject', 'Messagfe body')){
			throw new Exception('mail failed');
		}else{
			echo 'mail sent';
		}
	}catch(Exception $e){
		echo $e->getMessage() ."\n";
	}

?>