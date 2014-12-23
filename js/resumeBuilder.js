var work = {
  "jobs":[ 
  { 
    "employer":"ARCES Research Center", 
    "title":"Researcher", 
    "location":"Bologna, Italy",
    "dates":"2006-2007"
  },
  { 
    "employer":"Intel Corporation", 
    "title":"Research Intern", 
    "location":"Santa Clara, CA, USA",
    "dates":"2007"
  },
  { 
    "employer":"Chevalier Technologies", 
    "title":"Embedded SW Engineer", 
    "location":"London, UK",
    "dates":"2008-2009"
  },
  { 
    "employer":"SEPSA Information Systems", 
    "title":"Embedded SW Engineer", 
    "location":"Madrid, ES",
    "dates":"2009-2012"
  },
  { 
    "employer":"SEPSA Information Systems", 
      "title":"Technical Project Manager", 
    "location":"Madrid, ES",
    "dates":"2009-2012"
  }
  ]
};

var projects = {};
var bio = {
  "name":"Vincenzo Auteri",
  "role":"SW engineer",
  "skills":["C/C++ programming","Embedded applications development"],
  "welcomeMessage":"Hello World",
  "contacts":
    {
    "email":"vincenzo.auteri@hotmail.com",
  "location":"Madrid"
    }
};

var education = 
{
  "schools":[
  {
    "name":"University of Bologna",
    "location":"Bologna, Italy",
    "degree":"Bacherlor's degree in Electronics Engineering",
    "majors": 
      [
      "Electronics",
    "SW Engineering"
      ],
    "dates":"1999-2004",
    "url":"www.unibo.it"
},
  {
    "name":"University of Bologna",
    "location":"Bologna, Italy",
    "degree":"Master's degree in Electronics Engineering",
    "majors": 
      [
      "Electronics",
    "SW Engineering"
      ],
    "dates":"2004-2007",
    "url":"www.unibo.it"
  }
  ],
    "onlineCourses":
      [
      ]

}


$("#main").prepend(HTMLheaderRole.replace("%data%","SW Engineer")); 
$("#main").prepend(HTMLheaderName.replace("%data%","Vincenzo Auteri")); 

var HTMLheaderRole = '<span>%data%</span><hr/>';

if (bio["skills"]) {
	console.log ("Object bio has skills object");
	$("#header").append(HTMLskillsStart);
	for (var i=0;i<bio.skills.length;i++){
		console.log ("Skill n. " + i + ": " + bio.skills[i]);
		var formattedText = HTMLskills.replace("%data%",bio.skills[i]);
		console.log ("Formatted n. " + i + ": " + formattedText);
		$("#skills").append(formattedText);
		console.log ("div n. " + header);
	}
	console.log (document.getElementById("header"));
	console.log (document.getElementsByTagName("h1"));
	console.log (document.getElementsByTagName("h1").length);

} else {
	console.log ("Object bio has no skills object");
}


