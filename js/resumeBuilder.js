/*
This is empty on purpose! Your code to build the resume will go here.
 
 //
 //var awesomethoughts;
 var awesomeThoughts = "I am Vashist and I am awesome";
 console.log(awesomeThoughts);
 var funThoughts = awesomeThoughts.replace("awesome","fun");
 $("#main").append(funThoughts);
 
 var name = "Vashist Kutti Suresh"
 var role = "Full Stack Developer"
 var formattedName = HTMLheaderName.replace("%data%",name);
 var formattedRole = HTMLheaderRole.replace("%data%",role);
 $("#header").append(formattedName);
 $("#header").append(formattedRole);
 */

	//$("#main").append("Vashist Suresh");
	var bio = {
	"name" : "Vashist Suresh",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" :"(803)3865670",
		"email" : "vashistsbv@gmail.com",
		"github" : "www.github.com/vashistks",
		"location" : "Clemson,South Carolina"
		},	
	"pictureURL" : "images/linkedin.jpg",
	"message" : "Hello Everyone!",
	"skills" : ["Javascript","Html5","CSS","Java","Clojure","Python"],
	"display" : function(){
		var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedHTMLheaderRole);
		var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedHTMLheaderName);
		var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
		$("#header").append(formattedHTMLbioPic);
		var formattedHTMLmessage = HTMLwelcomeMsg.replace("%data%", bio.message);
		$("#header").append(formattedHTMLmessage);
		var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts, #footerContacts").append(formattedHTMLmobile);
		var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts, #footerContacts").append(formattedHTMLemail);
		var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts, #footerContacts").append(formattedHTMLgithub);
		var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts, #footerContacts").append(formattedHTMLlocation);

		if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	for (i=0;i<bio.skills.length; i++){
	var formattedskill = HTMLskills.replace("%data%",bio.skills[i]);
	$("#skills").append(formattedskill);
	}
}
	}
};

 var work = {
 	"jobs" : [
 { "position" : "Developer",
 "employer" : "Swagene",
 "years" : "1",
 "city" : "Chennai,India",
"description" : "Worked as a clojure developer to build web applications"}
 ],
 "display" : function(){
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	formattedjob = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	formattedposition = HTMLworkTitle.replace("%data%",work.jobs[job].position);
	var formattedjobs = formattedjob + formattedposition;
	$(".work-entry:last").append(formattedjobs);
	formattedcity = HTMLworkLocation.replace("%data%",work.jobs[job].city);
	$(".work-entry:last").append(formattedcity);
	formattedyears = HTMLworkDates.replace("%data%",work.jobs[job].years);
	$(".work-entry:last").append(formattedyears);
formatteddesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formatteddesc);

}
 }
};

var projects = {
	"projects" : [
	{
		"title" : "ruby project",
		"dates" : "2016",
		"description" : "built a project in ruby",
		"images" : "images/fry.jpg"
	},
	{
		"title" : "movie database project",
		"dates" : "2011",
		"description" : "built a movie database project",
		"images" : "images/fry.jpg"
	}],
	"display" : function(){

for(project in projects.projects){
	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);
	var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[project].images);
	$(".project-entry:last").append(formattedImages);
	}
}
};

var education = {
	"schools" : [
	{"Name" : "Clemson University",
	"location" : "Clemson,SC,USA",
	"degree" : "Master of Science",
	"dates" : "2015-2017",
	"major" : "Computer Science"},
	{"Name" : "Anna University",
	"location" : "Chennai,India",
	"degree" : "Bachelor of Engineering",
	"dates" : "2011-2015",
	"major" : "Computer Science Engineering"}
	],
	"onlinecourses" : [
	{"title" : "Ruby on rails",
	"school" : "UCBerkley",
	"dates" : "2016",
	"url" : "edx.org"}
	],
	"display" : function(){
	education.schools.forEach(function(edu) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", edu.Name);
			$(".education-entry:last").append(formattedName);
			var formattedDegree = HTMLschoolDegree.replace("%data%", edu.degree);
			$(".education-entry:last").append(formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", edu.dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", edu.location);
			$(".education-entry:last").append(formattedLocation);

		});
			if (education.onlinecourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
education.onlinecourses.forEach(function(onlineCourse) {
				$("#education").append(HTMLschoolStart);

			var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
			var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
			$(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);
			var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
			$(".education-entry:last").append(formattedHTMLonlineDates);
			var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
			$(".education-entry:last").append(formattedHTMLonlineURL);
		});
	}
}
};	

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

bio.display();
work.display(); 
projects.display();
education.display();

 function inName(name){
 	console.log(name);
 name = name.trim().split(" ");
 console.log(name);
 name[0]= name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() ;
// console.log(name[0]);
 name[1]= name[1].toUpperCase() ;
var internationalName = name[0] + " " + name[1];
 	return internationalName;
 }

$("#main").append(internationalizeButton);
//displaywork();

 $("#mapDiv").append(googleMap);