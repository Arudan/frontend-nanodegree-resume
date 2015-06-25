var bio = {
    'name': "Alberto Francesco Motta",
    'role': "Web developer",
    'biopic': 'images/fry.jpg',
    'skills': ['python', 'html', 'js', 'law'],
    'contacts': {
        'mobile': '3406965039',
        'email': 'albertofrancesco.motta@gmail.com',
        'github': 'Arudan',
        'twitter': '@afmotta',
        'location': 'Milan - Italy',
    },
    'welcomeMessage': 'string',
    'display': function(){
        // HEADER
        var fName = HTMLheaderName.replace('%data%', bio.name);

        var fRole = HTMLheaderRole.replace('%data%', bio.role);

        var fPicture = HTMLbioPic.replace('%data%', bio.biopic);

        $("#header").prepend(fRole);

        $("#header").prepend(fName);

        $("#header").prepend(fPicture);

        //SKILLS
        if(bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            for (skill in bio.skills){
                var formattedSkill = HTMLskills.replace(
                    '%data%', bio.skills[skill]
                );
            $('#skills').append(formattedSkill);
            };
        };
    }
};

bio.display();

var education = {
  'schools':
  [
    {
       'name': 'string',
       'location': 'string',
       'degree': 'string',
       'majors': ['strings'],
       'dates': 2000, //(graduation date)
       'url': 'string'
     }
  ],
  'onlineCourses':
  [
    {
     'title': 'string',
     'school': 'string',
     'date': 'integer', //(date finished)
     'url': 'string'
   },
  ],
};

var work = {
  "jobs": [
    {
      'title': 'Wev Dev',
      'employer': 'Thunder Systems',
      'location': "Limito di Pioltello(Milan)",
      'dates': 'March 2015 - Present',
      'description': "Lorem ipsum ..."
    },
    {
      'title': 'Legal Intern',
      'employer': "Diaferio & Biondi",
      'location': "Milan",
      'dates': 'September 2011 - July 2014',
      'description': "Lorem ipsum ..."
    },
  ]
};

var projects = {};


//WORK
function displayWork(){
  $('#workExperience').append(HTMLworkStart);
  for (job in work.jobs){

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
};

displayWork();
