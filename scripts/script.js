function switchToContact() {
	var string = "<a href=\"mailto:mason.nguyen90@gmail.com\">E-mail</a><br>" +
				 "<a href=\"https://www.linkedin.com/in/mason-nguyen-ab8bb2113/\">LinkedIn</a><br>" +
				 "<a href=\"https://github.com/onlymason\">GitHub</a><br>" +
				 "<p>Resume available on request!</p>";
	
	document.getElementById("content").innerHTML = string;
}

function switchToAbout() {
	var string = "Hello, my name is Mason Nguyen. I'm a CS graduate and aspiring developer.<br><br>" +
				 "I got started in CS after a love of video games as a kid turned into a curiosity for creation. When I finally started pursuing CS, I realized this is a really deep rabbit hole that can take you many places.  I continue to be amazed by and admire the talent of the people before me, and one day I hope to join their ranks.<br><br>" +
				 "After my graduation in May of 2017, I'm looking forward to turning this into a career and accomplishing some goals like having a published software project.";
					
	document.getElementById("content").innerHTML = string;
}