var formattedName = "Vincenzo Auteri";
var myHTMLheaderName = HTMLheaderName.replace("%data%",formattedName);

var formattedRole= "Software Engineer";
var myHTMLheaderRole  = HTMLheaderRole.replace("%data%",formattedRole);

$("#header").prepend(myHTMLheaderRole);
$("#header").prepend(myHTMLheaderName);



