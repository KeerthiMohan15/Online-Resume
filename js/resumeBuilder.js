var bio = {
    name: "Keerthi Mohan",
    role: "Front End Web Developer",
    contacts: {
        mobile: "1234567890",
        email: "km15@gmail.com",
        github: "KeerthiMohan15",
        twitter: "@keerthimohan15",
        location: "Kerala"
    },
    welcomeMessage: "hello everyone!",
    skills: ["Leadership quality", "Friendly", "Team skills", "Oratory skills"],
    biopic: "images/images.jpe"
};

var education = {
    schools: [{
        name: "Scms School Of Engineering And Technology",
        location: "Angamaly,Ekm",
        degree: "B.Tech",
        majors: ["ECE"],
        dates: "2016",
        url: "www.sset.org"
    }],
    onlineCourses: [{
        title: "Front End Web Developer Nanodegree",
        school: "Udacity",
        dates: "2016",
        url: "https://classroom.udacity.com/nanodegrees/nd001"
    }, {
        title: "Intro to HTML and CSS",
        school: "Udacity",
        dates: "2016",
        url: "https://classroom.udacity.com/courses/ud304"
    }, {
        title: "JavaScript Basics",
        school: "Udacity",
        dates: "2016",
        url: "https://classroom.udacity.com/courses/ud804"
    }]
};

var projects = {
    projects: [{
        title: "Mockup article",
        dates: "2016",
        description: "First project of nanodegree program.Introduced to HTML basics",
        images: ["images/pup1.jpe", "images/birds.jpg"]
    }, {
        title: "Animal trading cards",
        dates: "2016",
        description: "Second project of nanodegree program.More about HTML and CSS",
        images: ["images/pup2.jpe", "images/horses.jpg"]
    }, {
        title: "Portfolio Project",
        dates: "2016",
        description: "Third project of nanodegree program.Made a portfolio page.Introduced to Bootstrap",
        images: ["images/pup3.jpe", "images/life.jpg"]
    }]
};

var work = {
    jobs: [{
        employer: "BPCL-KR",
        title: "Trainee",
        location: "Ernakulam",
        dates: "jul 2016-oct 2016",
        description: "A three month industrial training program for industrial exposure"
    }, {
        employer: "Infosys",
        title: "Systems engineer",
        location: "Mysore",
        dates: "2017",
        description: "I am a fresher and this is my first job"
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedName, formattedRole, formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation, formattedPic);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
};
$("#header").append(bio.display);

function displaySkills() {
    $("#header").append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    };
};
displaySkills();

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    };
};
$("#main").append(work.display);

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
        $(".education-entry:last").append(formattedschoolNameDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedschoolLocation);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedschoolMajor);
        var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[i].url);
        $(".education-entry:last").append(formattedschoolURL);
    };
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var j = 0; j < education.onlineCourses.length; j++) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
        $(".education-entry:last").append(formattedonlineTitleSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $(".education-entry:last").append(formattedonlineURL);
    };
};
$("#main").append(education.display);

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            };
        };
    };
};
$("#main").append(projects.display);

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);