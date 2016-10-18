function Person(f, l){
  var first = f;
  var last = l;

  this.getFirst = function(){
    return first;
  };

  this.setFirst = function(x){
    first = x;
  };
}

var x = new Person("Gayatri", "Rath");
var y = new Person("Sameer", "Dash");

Person.prototype.full = function(){
  return this.getFirst() + " " + this.getLast();
};

var m = x.full(); //"Gayatri Rath"


var d1 = new Date(); //an obj of the time right now 6.55pm Sept 26th 2016
var e1 = 1474941376031;

var d2 = new Date(e1); //converts to Date object
var e2 = d1.valueOf(); //coverts date obj to epoch format

ANS 1:
Date.prototype.addDays = function addDays(days){
    var newDate = new Date(this.valueOf()); //copy of launchDateObj
    newDate.setDate(this.getDate() + parseInt(days));
    return newDate;
};

Date.prototype.nextMonday = function nextMonday(freq){
  var daysToNextSession;
  var newDate = new Date(this.valueOf()); //session1Date
  var dayOfWeek = newDate.getDay();

  if(dayOfWeek !== 1){
    daysToNextSession = (8 - dayOfWeek)%7;
    newDate = newDate.addDays(daysToNextSession); 
  }

  if(freq){
    newDate = newDate.addDays(7 * freq); 
  }

  return newDate;
};

function getUpcomingSessions(launchDate, repeatFrequency, enrollmentDate) {
    //assuming all inputs are numbers
    
    var launchDateObj = new Date(launchDate);
    //var enrollmentDateObj = new Date(enrollmentDate);
    
    var session1Date = launchDateObj;
    //find next monday from launch date
    /*var launchDay = launchDateObj.getDay();
    if(launchDay !== 1){
        var daysToNextSession = (8 - launchDay)%7;
        session1Date = session1Date.addDays(daysToNextSession); 
    }*/
    session1Date = session1Date.nextMonday();

    /*
        if(enrollmentDate > session1Date.valueOf()){
          session1Date = enrollmentDateObj.nextMonday();
          
        }
        session2Date = session1Date.nextMonday(repeatFrequency);
        session3Date = session2Date.nextMonday(repeatFrequency);
    */
 
    //var session2Date = session1Date.addDays(7*repeatFrequency);
    var session2Date = session1Date.nextMonday(repeatFrequency);
    var session3Date = session2Date.nextMonday(repeatFrequency);
    //var session3Date = session2Date.addDays(7*repeatFrequency);
    
        //post enrollment case
        //loop until enrollment date is <= session1Date
        while(enrollmentDate > session1Date.valueOf()){
           session1Date = session2Date;
           session2Date = session3Date;
           //session3Date = session2Date.addDays(7*repeatFrequency);
           session3Date = session2Date.nextMonday(repeatFrequency);
        }  

    return [session1Date.valueOf(), session2Date.valueOf(), session3Date.valueOf()];
}


--S1------eD-------S2----------------S3-- //case 1
----------eD-------S1----------------S2-----------------S3---  

--S1---------------S2-------eD-------S3-- //case 2
-------------------S1-------eD-------S2-----------------S3--- 
----------------------------eD-------S1-----------------S2---------------S3-- 


-----------------------------
ANS 2:
Date.prototype.addDays = function addDays(days){
    var newDate = new Date(this.valueOf());
    newDate.setDate(this.getDate() + parseInt(days));
    return newDate;
};

function getUpcomingSession(launchDate, repeatFrequency, enrollmentDate) {
    //check if all inputs are numbers or not 
    
    var launchDateObj = new Date(launchDate);
    var enrollmentDateObj = new Date(enrollmentDate);
    
    //find next monday from launch date
    var launchDay = launchDateObj.getDay();
    var session1Date = launchDateObj;
    if(launchDay !== 1){
    //day 1 is a Monday
        var daysToNextSession = (8 - launchDay)%7;
        session1Date = session1Date.addDays(daysToNextSession); 
    }
    
    //pre-enrollement case gets handled automatically
        //post enrollment case
        
        //loop until enrollment date is <= sessionDate
        while(enrollmentDate > session1Date.valueOf() ){
           session1Date = session1Date.addDays(7*repeatFrequency);
        }  
      return session1Date;
}

/*
 * Complete the function below.
 */
function getSpecializationSessionSchedule(specializationCourses, enrollmentDate) {
    var coursesSchdule = [];
    var i;
    var numOfSpecCourses = specializationCourses.length;
    var launchDate;
    var rFreq;
    var dur;
    var enrollmentDateObj = new Date(enrollmentDate);
    var sessionStart;
    var sessionEnd;
    var nextSession = enrollmentDate;
    
    //loop through all courses 
    for(i = 0; i < numOfSpecCourses; i++){
       launchDate =  specializationCourses[i][0];
       rFreq =  specializationCourses[i][1];
       dur =  specializationCourses[i][2];
        
       sessionStart = getUpcomingSession(launchDate, rFreq, nextSession); 
       sessionEnd = sessionStart.addDays(7*dur);
        
       //calculate next session (nextsession begins on the same date that this session ends)
       nextSession = sessionEnd.valueOf();
       coursesSchdule.push([sessionStart.valueOf(), sessionEnd.valueOf()]);  
    }  
    return coursesSchdule;

}
