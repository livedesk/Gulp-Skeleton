<?php
	switch ($_SERVER["SCRIPT_NAME"]) {
		case "/features.php":
			$CURRENT_PAGE = "Features"; 
			$PAGE_TITLE = "Features";		
		case "/pricing.php":
			$CURRENT_PAGE = "Pricing"; 
			$PAGE_TITLE = "Pricing";
			break;	
		case "/blog.php":
			$CURRENT_PAGE = "Blog"; 
			$PAGE_TITLE = "Blog";
			break;			
		case "/about.php":
			$CURRENT_PAGE = "About Us"; 
			$PAGE_TITLE = "About Us";
			break;							
		default:
			$CURRENT_PAGE = "Index";
			$PAGE_TITLE = "Welcome to my homepage!";		
	}
?>