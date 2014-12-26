var work = {
    "jobs":[ 
    { 
        "employer":"ARCES Research Center", 
        "title":"Researcher", 
        "location":"Bologna, Italy",
        "dates":"2006-2007",
        "description":"Design and development of a portable EKG wireless board"
    },
    { 
        "employer":"Intel Corporation", 
        "title":"Research Intern", 
        "location":"Santa Clara, CA, USA",
        "dates":"2007",
        "description":"Study of electric skin resistence applied to emotional stress"
    },
    { 
        "employer":"Chevalier Technologies", 
        "title":"Embedded SW Engineer", 
        "location":"London, UK",
        "dates":"2008-2009",
        "description":"Design and development of electric motor driven automotive components"
    },
    { 
        "employer":"SEPSA Information Systems", 
        "title":"Embedded SW Engineer", 
        "location":"Madrid, ES",
        "dates":"2009-2012",
        "description":"Design and development of information systems for the railway industry"
    },
    { 
        "employer":"SEPSA Information Systems", 
        "title":"Technical Project Manager", 
        "location":"Madrid, ES",
        "dates":"2012-Present",
        "description":"Management of international projects for the railway industry"
    }
    ]
};

var name = "Vincenzo Auteri";
var projects = [ 
{"title":"Wireless ECG Board",
    "dates":"2006-2007",
    "description":"Design and development of a wireless ECG board",
    "images":[]

},
{"title":"PiPlay",
    "dates":"2014",
    "description":"Web Application to Strem Videos from Raspberry Pi",
    "images":[]
},
{"title":"iTube",
    "dates":"2011",
    "description":"iOS app to show the status of London tube lines",
    "images":[]
},
{"title":"Streamify",
    "dates":"2014",
    "description":"Sample Website to test WRTC streaming libraries",
    "images":[]
}

];

var bio = {
    "name":name,
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
    $("#header").append(HTMLskillsStart);
    for (skillIndex in bio.skills){
        var formattedText = HTMLskills.replace("%data%",bio.skills[skillIndex]);
        $("#skills").append(formattedText);
    }

} else {
    console.log ("Object bio has no skills object");
}

projects.display = function() { 
    if (projects) {
        for (var projectIndex=0;projectIndex<projects.length;projectIndex++){
            $("#projects").append(HTMLprojectStart);
            var formattedTitle= 
                HTMLprojectTitle.replace("%data%",projects[projectIndex].title);
            $(".project-entry:last").append(formattedTitle); 
            var formattedDates= 
                HTMLprojectDates.replace("%data%",projects[projectIndex].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription= 
                HTMLprojectDescription.replace("%data%",projects[projectIndex].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects[projectIndex].images.length >0) {
                for (image in project[projectIndex].images) {
                    var formattedImage = 
                        HTMLprojectImage.replace ("%data%",projects[projectIndex].images[image]);

                    $(".project-entry:last").append(formattedImage);

                }

            }
        }

    } else {
        console.log ("Object projects has no itemitemss");
    }

}
var displayWork = function() { 
    if (work["jobs"]) {
        for (jobIndex in work.jobs){
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer= 
                HTMLworkEmployer.replace("%data%",work.jobs[jobIndex].employer);
            var formattedTitle= 
                HTMLworkTitle.replace("%data%",work.jobs[jobIndex].title);
            $(".work-entry:last").append(formattedEmployer + formattedTitle ); 
            var formattedDates= 
                HTMLworkDates.replace("%data%",work.jobs[jobIndex].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedLocation= 
                HTMLworkLocation.replace("%data%",work.jobs[jobIndex].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription= 
                HTMLworkDescription.replace("%data%",work.jobs[jobIndex].description);
            $(".work-entry:last").append(formattedDescription);
        }

    } else {
        console.log ("Object work has no items");
    }

}
$(document).click (function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

var locationizer = function(work_object) {
    var result = [];

    if (work_object["jobs"].length >0) {
        for (jobIndex in work_object.jobs) {
            result.push(work_object.jobs[jobIndex].location);
        }
        return result;
    }
}

var inName = function(name) {
    var temp = name.split(" ");
    var firstName = temp[0];
    var lastName = temp[1];
    var result = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()+ " " + lastName.toUpperCase(); 
    return result;
}
displayWork();
projects.display();
console.log(document)
    $("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
