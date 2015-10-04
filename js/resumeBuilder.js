var bio = {
  name: 'Alberto Francesco Motta',
  role: 'Web developer',
  biopic: 'images/afm.jpg',
  skills: ['python', 'html', 'css', 'js', 'coffee brewing', 'pizza'],
  contacts: {
    mobile: '3406965039',
    email: 'albertofrancesco.motta@gmail.com',
    github: 'Arudan',
    twitter: '@afmotta',
    location: 'Milan - Italy',
  },
  welcomeMessage: '"Why do you wish to see the terrible Oz?"',
  display: function() {
    // HEADER
    var fName = HTMLheaderName.replace('%data%', bio.name);
    var fRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(fRole);

    $('#header').prepend(fName);

    for (var contact in bio.contacts) {
      var fContact = HTMLcontactGeneric.replace(
        '%contact%', contact
      ).replace(
        '%data%', bio.contacts[contact]
      );
      $('#topContacts').append(fContact);
      $('#footerContacts').append(fContact);
    }

    var fPicture = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').prepend(fPicture);

    var fWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(fWelcomeMsg);

    //SKILLS
    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      for (var skill in bio.skills) {
        var formattedSkill = HTMLskills.replace(
          '%data%', bio.skills[skill]
        );
        $('#skills').append(formattedSkill);
      };
    };

    $('#main').append(internationalizeButton);
  },
};
bio.display();

var work = {
  jobs: [
    {
      title: 'Web Dev',
      employer: 'Thunder Systems',
      location: 'Limito di Pioltello(Milan)',
      dates: 'March 2015 - Present',
      description: 'Backend dev using Python and Django. ' +
      '"I am of another world," I answered, "the great planet Earth, which ' +
      'revolves about our common sun and next within the orbit of your ' +
      ' Barsoom, which we know as Mars. How I came here I cannot' +
      'tell you, for I do not know; but here I am, and since my ' +
      'presence has permitted me to serve Dejah Thoris ' +
      'I am glad that I am here."',
    },
    {
      title: 'Legal Intern',
      employer: 'Diaferio & Biondi',
      location: 'Milan',
      dates: 'September 2011 - July 2014',
      description: 'Legal intern in commercial law. ' +
      '"I am of another world," I answered, "the great planet Earth, which ' +
      'revolves about our common sun and next within the orbit of your ' +
      ' Barsoom, which we know as Mars. How I came here I cannot' +
      'tell you, for I do not know; but here I am, and since my ' +
      'presence has permitted me to serve Dejah Thoris ' +
      'I am glad that I am here."',
    },
  ],
  display: function() {
    $('#workExperience').append(HTMLworkStart);
    for (var job in work.jobs) {
      var jobHeader = HTMLworkEmployer.replace(
        '%data%', work.jobs[job].employer
      ) + HTMLworkTitle.replace(
        '%data%', work.jobs[job].title
      );
      $('.work-entry:last').append(jobHeader);
      var jobDates = HTMLworkDates.replace(
        '%data%', work.jobs[job].dates
      );
      $('.work-entry:last').append(jobDates);
      var jobDescription = HTMLworkDescription.replace(
        '%data%', work.jobs[job].description
      );
      $('.work-entry:last').append(jobDescription);
    };
  },
};
work.display();

var education = {
  schools: [
    {
      name: 'Università Cattolica del Sacro Cuore',
      location: 'Milano, Italia',
      degree: 'JD',
      majors: ['commercial law'],
      dates: 2011,
      url: 'www.unicatt.it',
    },
  ],
  onlineCourses: [
    {
     title: 'Front End Web Developer',
     school: 'Udacity',
     dates: 2016,
     url: 'www.udacity.com',
   },
  ],
  display: function() {
    if (education.schools.length > 0) {
      for (var index in education.schools) {
        var school = education.schools[index];
        var title = HTMLschoolName.replace('%data%', school.name);
        title = title + HTMLschoolDegree.replace('%data%', school.degree);
        var dates = HTMLschoolDates.replace('%data%', school.dates);
        var location = HTMLschoolLocation.replace('%data%', school.location);
        var majors = [];
        for (var m in school.majors) {
          majors.push(HTMLschoolMajor.replace('%data%', school.majors[m]));
        };

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(title).append(dates).append(majors);
      }
    }

    if (education.onlineCourses.length > 0) {
      $('#education').append(HTMLonlineClasses);
      for (var index in education.onlineCourses) {
        var course = education.onlineCourses[index];
        var title = HTMLonlineTitle.replace('%data%', course.title);
        title = title + HTMLonlineSchool.replace('%data%', course.school);
        var dates = HTMLonlineDates.replace('%data%', course.dates);
        var url = HTMLonlineURL.replace('%data%', course.url);
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(title).append(dates).append(url);
      }
    }
  },
};
education.display();

var projects = {
  projects: [
    {
      title: 'atsairsoft.com',
      dates: '08-2015',
      description: 'Ecommerce for softair parts',
      images: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'],
    },
    {
      title: 'atswines.com',
      dates: '09-2015',
      description: 'Ecommerce for wine bottles',
      images: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'],
    },
  ],
  display: function() {
    for (var index in projects.projects) {
      var prj = projects.projects[index];
      var fTitle = HTMLprojectTitle.replace('%data%', prj.title);
      var fDates = HTMLprojectDates.replace('%data%', prj.dates);
      var fDescription = HTMLprojectDescription.replace('%data%', prj.description);
      if (prj.images.length > 0) {
        var fImages =  [];
        for (var img in prj.images) {
          var fImg = HTMLprojectImage.replace('%data%', prj.images[img]);
          fImages.push(fImg);
        }

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last .card-content').append(HTMLprojectCarousel);
        $('.project-entry:last .card-content').append(fTitle).append(fDates).append(fDescription);
        $('.carousel-inner:last').append(fImages);
        $('.item:first-child').addClass('active');
      }
    }
  },
};
projects.display();

$('#mapDiv').append(googleMap);

if (document.getElementsByClassName('flex-item').length === 0) {
  document.getElementById('topContacts').style.display = 'none';
}

if (document.getElementsByTagName('h1').length === 0) {
  document.getElementById('header').style.display = 'none';
}

if (document.getElementsByClassName('work-entry').length === 0) {
  document.getElementById('workExperience').style.display = 'none';
}

if (document.getElementsByClassName('project-entry').length === 0) {
  document.getElementById('projects').style.display = 'none';
}

if (document.getElementsByClassName('education-entry').length === 0) {
  document.getElementById('education').style.display = 'none';
}

if (document.getElementsByClassName('flex-item').length === 0) {
  document.getElementById('letsConnect').style.display = 'none';
}

if (document.getElementById('map') === null) {
  document.getElementById('mapDiv').style.display = 'none';
}
