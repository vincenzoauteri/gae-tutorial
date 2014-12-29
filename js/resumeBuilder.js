//Work object - linked to workExperience div in the html
var work = {
    'jobs':[ {
        'employer':'ARCES Research Center',
        'title':'Researcher',
        'location':'Bologna, Italy',
        'dates':'2006-2007',
        'description':'Design and development of a portable EKG wireless board'
    } , {
        'employer':'Intel Corporation',
        'title':'Research Intern',
        'location':'Santa Clara, CA, USA',
        'dates':'2007',
        'description':'Study of electric skin resistence applied to emotional stress'
    } , {
        'employer':'Chevalier Technologies',
        'title':'Embedded SW Engineer',
        'location':'London, UK',
        'dates':'2008-2009',
        'description':'Design and development of electric motor driven automotive components'
    } , {
        'employer':'SEPSA Information Systems',
        'title':'Embedded SW Engineer',
        'location':'Madrid, ES',
        'dates':'2009-2012',
        'description':'Design and development of information systems for the railway industry'
    } , {
        'employer':'SEPSA Information Systems',
        'title':'Technical Project Manager',
        'location':'Madrid, ES',
        'dates':'2012-Present',
        'description':'Management of international projects for the railway industry'
    }],
};

//Display function for work object - maybe more readable if outside work definition
work.display = function() {
    //Simple check in case of no "jobs" object in "work"
    if (work['jobs']) {
        for (var jobIndex = 0; jobIndex < work.jobs.length; jobIndex++){
            $('#workExperience').append(HTMLworkStart);
            //Employer and Title
            var formattedEmployer=
                HTMLworkEmployer.replace('%data%', work.jobs[jobIndex].employer);
            var formattedTitle=
                HTMLworkTitle.replace('%data%', work.jobs[jobIndex].title);
            $('.work-entry:last').append(formattedEmployer + formattedTitle);

            //Dates
            var formattedDates=
                HTMLworkDates.replace('%data%', work.jobs[jobIndex].dates);
            $('.work-entry:last').append(formattedDates);
            
            //Location
            var formattedLocation=
                HTMLworkLocation.replace('%data%', work.jobs[jobIndex].location);
            $('.work-entry:last').append(formattedLocation);

            //Description
            var formattedDescription=
                HTMLworkDescription.replace('%data%', work.jobs[jobIndex].description);
            $('.work-entry:last').append(formattedDescription);
        }

    } else {
        console.log ('Object work has no jobs');
    }
}

var projects = [
{'title':'Wireless ECG Board',
    'dates':'2006-2007',
    'description':'Design and development of a wireless ECG board',
    'images':[]

} , {'title':'PiPlay',
    'dates':'2014',
    'description':'Web Application to Strem Videos from Raspberry Pi',
    'images':[]
} , {'title':'iTube',
    'dates':'2011',
    'description':'iOS app to show the status of London tube lines',
    'images':[]
} , {'title':'Streamify',
    'dates':'2014',
    'description':'Sample Website to test WRTC streaming libraries',
    'images':[]
}

];

projects.display = function() {
    if (projects) {
        for (var projectIndex = 0; projectIndex < projects.length; projectIndex++){
            //Title
            $('#projects').append(HTMLprojectStart);
            var formattedTitle=
                HTMLprojectTitle.replace('%data%', projects[projectIndex].title);
            $('.project-entry:last').append(formattedTitle);

            //Dates
            var formattedDates=
                HTMLprojectDates.replace('%data%', projects[projectIndex].dates);
            $('.project-entry:last').append(formattedDates);

            //Description
            var formattedDescription=
                HTMLprojectDescription.replace('%data%', projects[projectIndex].description);
            $('.project-entry:last').append(formattedDescription);

            //Images
            if (projects[projectIndex].images.length >0) {
                for (var imageIndex = 0; imageIndex< project[projectIndex].images.length; imageIndex++) {
                    var formattedImage =
                        HTMLprojectImage.replace ('%data%', projects[projectIndex].images[image]);

                    $('.project-entry:last').append(formattedImage);

                }

            }
        }

    } else {
        console.log ('Object projects has no itemitemss');
    }

}

var name = 'Vincenzo Auteri';

var bio = {
    'name':name,
    'role':'SW engineer',
    'skills':['C/C++ programming', 'Embedded applications development'],
    'welcomeMessage':'Hello World',
    'contacts': {
        'email':'vincenzo.auteri@hotmail.com',
        'location':'Madrid'
    }
};

bio.display = function() {
    var HTMLheaderRole = '<span>%data%</span><hr/>';
    $('#main').prepend(HTMLheaderRole.replace('%data%', 'SW Engineer'));
    $('#main').prepend(HTMLheaderName.replace('%data%', 'Vincenzo Auteri'));
    if (bio['skills']) {
        $('#header').append(HTMLskillsStart);
        for (var skillIndex = 0; skillIndex < bio.skills.length; skillIndex++){
            var formattedText = HTMLskills.replace('%data%', bio.skills[skillIndex]);
            $('#skills').append(formattedText);
        }
    } else {
        console.log ('Object bio has no skills object');
    }
}

var education =
{
    'schools':[ {
        'name':'University of Bologna',
        'location':'Bologna, Italy',
        'degree':'Bacherlor\'s degree in Electronics Engineering',
        'majors': [
            'Electronics',
        'SW Engineering' 
            ],
        'dates':'1999-2004',
        'url':'www.unibo.it'
    } , {
        'name':'University of Bologna',
        'location':'Bologna, Italy',
        'degree':'Master\'s degree in Electronics Engineering',
        'majors':
            [
            'Electronics',
        'SW Engineering'
            ],
        'dates':'2004-2007',
        'url':'www.unibo.it'
    } ],
        'onlineCourses': [
            ]

}





$(document).click (function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

var locationizer = function(work_object) {
    var result = [];

    if (work_object['jobs'].length >0) {
        for (var jobIndex = 0; jobIndex< work_object.jobs.length; jobIndex++) {
            result.push(work_object.jobs[jobIndex].location);
        }
        return result;
    }
}

var inName = function(name) {
    var temp = name.split(' ');
    var firstName = temp[0];
    var lastName = temp[1];
    var result = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()+ ' ' + lastName.toUpperCase();
    return result;
}

//Helper function to call display method on each defined json object to
//display resume content
var displayResumeContent = function() {
    var resumeObjects = [bio,work, projects];
    for (var objectIndex = 0; objectIndex < resumeObjects.length; objectIndex++) {
        resumeObjects[objectIndex].display();
    }
}

displayResumeContent();

//
//Google Maps related code
//
$('#mapDiv').append(googleMap);
//
//Additional code - used in the class but not needed for the project
//
//Creates button to change name style
//$('#main').append(internationalizeButton);
