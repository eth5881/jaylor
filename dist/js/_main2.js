$('a.navbar-brand').click(function(){
    $('.jumbotron').addClass('animated fadeOutLeft');        
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
            $('.jumbotron').removeClass('animated fadeOutLeft');
        }, 1000);
   setTimeout(function(){ $('.homeSlide').html(
       "<div class=\"bcg\"" +
			"data-center=\"background-position: 50% 0px;\"" +
			"data-top-bottom=\"background-position: 50% -100px;\"" +
			"data-anchor-target=\"#slide-1\">" +
		
		"<div class=\"jumbotron\">" +
			"<img id=\"logo_page\" src=\"assets/img/logo2.jpg\"/>" +
            "<p class=\"motto\">\"Affordable, and quality home solutions.\"</p>" +
		  "</div>" +

			"<div class=\"hsContainer\">" +
				"<div class=\"hsContent\"" +
					"data-center=\"opacity: 1\"" +
					"data-106-top=\"opacity: 0\"" + 
					"data-anchor-target=\"#slide-1 h2\">" +
				
					"<h2>Fade out elements before <br>they leave viewport</h2>" +
		  "</div>" +
			"</div>" +
		"</div>");
        $('.jumbotron').addClass('animated fadeInRight');        
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
            $('.jumbotron').removeClass('animated fadeInRight');
        }, 1000);  }, 1000);
});

$('a.workPage').click(function(){
    $('.jumbotron').addClass('animated fadeOutLeft');        
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
            $('.jumbotron').removeClass('animated fadeOutLeft');
        }, 1000);
   setTimeout(function(){ $('.homeSlide').html(
       "<div class=\"bcg\""+
			"data-center=\"background-position: 50% 0px;\"" +
			"data-top-bottom=\"background-position: 50% -100px;\"" +
			"data-anchor-target=\"#slide-2\">" +
		"<div class=\"jumbotron1\">" +
			
		"<div class=\"jumbotron\">" +
			"<h1>Work</h1>" +
			"<p class=\"lead\">Past Jobs</p>" +
            "<img class=\"work\" src=\"assets/img/folder_closed3.png\"/>" +
            "<br>" +
            "<img class=\"work2\" src=\"assets/img/folder_open2.png\"/>" +
            "<br>" +
            "<p class=\"jobs\">> Stuff</p>" +
		"</div>" +

			"<div class=\"hsContainer\">" +
				"<div class=\"hsContent\"" +
					"data-center=\"opacity: 1\"" +
					"data-106-top=\"opacity: 0\"" +
					"data-anchor-target=\"#slide-1 h2\">" +
					"<h2>Fade out elements before <br>they leave viewport</h2>" +
		  "</div>" +
			"</div>" +
		"</div>" +
    "</div>");
    $('.work').click(function(){
    $(this).css('opacity', '0.0');
    $(this).css('cursor', 'auto');
    $(this).css('z-index', '-10');
    $(this).css('width', '0');
    $(this).css('height', '0');
    $('.work2').css('opacity', '1.0');
    $('.work2').css('cursor', 'pointer');
    $('.work2').css('z-index', '10');
    $('.work2').css('width', 'auto');
    $('.work2').css('height', 'auto');
    
    $('.jobs').css('opacity', '1.0');
        $('.jobs').addClass('animated fadeInDown');        
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
            $('.jobs').removeClass('animated fadeInDown');
        }, 1000);
});

$('.work2').click(function(){
    $(this).css('opacity', '0.0');
    $(this).css('cursor', 'auto');
    $(this).css('z-index', '-10');
    $(this).css('width', '0');
    $(this).css('height', '0');
    $('.work').css('opacity', '1.0');
    $('.work').css('cursor', 'pointer');
    $('.work').css('z-index', '10');
    $('.work').css('width', 'auto');
    $('.work').css('height', 'auto');
    
    $('.jobs').css('opacity', '0.0');
        $('.jobs').addClass('animated fadeOutUp');        
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
            $('.jobs').removeClass('animated fadeOutUp');
        }, 1000);
});
    
    $('.jumbotron').addClass('animated fadeInRight');        
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
            $('.jumbotron').removeClass('animated fadeInRight');
        }, 1000); }, 1000);
});

$('a.aboutPage').click(function(){
   $('.jumbotron').addClass('animated fadeOutLeft');        
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
            $('.jumbotron').removeClass('animated fadeOutLeft');
        }, 1000);
   setTimeout(function(){ $('.homeSlide').html(
       "<div class=\"bcg\"" +
			"data-center=\"background-position: 50% 0px;\"" +
			"data-top-bottom=\"background-position: 50% -100px;\"" +
			"data-anchor-target=\"#slide-3\">" +
		"<div class=\"jumbotron2\">" +
		"<div class=\"jumbotron\">" +
			"<h1>About</h1>" +
			"<p class=\"lead\">Jaylor Heating & Cooling</p>" +
			"<p class=\"lead\">Insert Bio Here.</p>" +
		  "</div>" +
		"</div>" +
			"<div class=\"hsContainer\">" +
				"<div class=\"hsContent\"" +
					"data-center=\"opacity: 1\"" +
					"data-106-top=\"opacity: 0\"" +
					"data-anchor-target=\"#slide-1 h2\">" +
					"<h2>Fade out elements before <br>they leave viewport</h2>" +
		  "</div>" +
			"</div>" +
		"</div>");
        $('.jumbotron').addClass('animated fadeInRight');        
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
            $('.jumbotron').removeClass('animated fadeInRight');
        }, 1000);  }, 1000); 
});

$('a.contactPage').click(function(){
    $('.jumbotron').addClass('animated fadeOutLeft');        
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
            $('.jumbotron').removeClass('animated fadeOutLeft');
        }, 1000);
   setTimeout(function(){ $('.homeSlide').html(
       "<div class=\"bcg\"" +
			"data-center=\"background-position: 50% 0px;\"" +
			"data-top-bottom=\"background-position: 50% -100px;\"" +
			"data-anchor-target=\"#slide-1\">" +
		"<div class=\"jumbotron3\">" +
		"<div class=\"jumbotron\">" +
			"<h1>Contact</h1>" +
			"<p class=\"lead\">Get in touch.</p>" + 
				"<p class=\"lead\">585.402.6911</p>" +
				"<p class=\"lead\">eth5881@rit.edu</p>" +
           "<div class=\"textbox\">" +
                    "<form method=\"post\" action=\"phpmail.php\">" +

                "<?php" +
                    "$user_ip = getenv(\"REMOTE_ADDR\");" +
                    "$user_referrer = getenv (\"HTTP_REFERER\");" +
                    "$user_agent = getenv (\"HTTP_USER_AGENT\");" +
                "?>" +

                "<input type=\"hidden\" name=\"ip\" value=\"<?php echo $user_ip ?>\" />" +
                "<input type=\"hidden\" name=\"httpref\" value=\"<?php echo $user_referrer ?>\" />" +
                "<input type=\"hidden\" name=\"httpagent\" value=\"<?php echo $user_agent ?>\" />" +


                "Your Name: <br />" +
                "<input type=\"text\" name=\"username\" size=\"35\" />" +
                "<br /><br />" +

                "Your Email:<br />" +
                "<input type=\"text\" name=\"usermail\" size=\"35\" />" +
                "<br /> <br /> <br />" +

                "Subject:<br />" + 
                "<select name=\"subject\" size=\"1\">" +
                    "<option value=\"HTML Question\">I have an HTML question</option>" +
                    "<option value=\"PHP Question\">I have a PHP question</option>" +
                    "<option value=\"Other Question\">I have a question on a different subject</option>" +
                "</select>" +
                "<br /><br />" +

                "Your Message:" +
                "<br />" +

                "<textarea name=\"msg_text\" rows=\"4\" cols=\"40\"></textarea>" +
                "<br />" +
                "<input type=\"submit\" value=\"Send Mail\" />" +
                "<br />" +
            "</form><br><br>" +
				"<p class=\"lead\"><a href=\"https://www.facebook.com/eric.hunt.14\" target=blank><img id=\"sm\" src=\"http://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png \" /></a><a href=\"https://twitter.com/EricHunt564 \" target=blank><img id=\"sm\" src=\"http://www.redeemer.net/wp-content/uploads/2014/02/twitter.png \" /></a><a href=\"https://www.linkedin.com/in/eth5881 \" target=blank><img id=\"sm\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png \" /></a></p>" +
		  "</div>" +
		"</div>" +  
			"<div class=\"hsContainer\">" +
				"<div class=\"hsContent\"" +
					"data-center=\"opacity: 1\"" +
					"data-106-top=\"opacity: 0\"" +
					"data-anchor-target=\"#slide-1 h2\">" +
					"<h2>Fade out elements before <br>they leave viewport</h2>" +
		  "</div>" +
			"</div>" +
		"</div>");
        $('.jumbotron').addClass('animated fadeInRight');        
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
            $('.jumbotron').removeClass('animated fadeInRight');
        }, 1000);  }, 1000); 
});

if(window.innerWidth <= 768){

}