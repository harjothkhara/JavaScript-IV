// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
      this.gender = attributes.gender;
    }
    // Methods
    speak() {
      return `Hello I'm ${this.name}, and I'm from ${this.location}`;
     }
    
  }// Person (baseclass)

  //test - person class
//   const clark = new Person({
//     age: 28,
//     name: "Clark",
//     location: "Smallville",
//     gender: "Male"
//   });

//   console.log(clark);
//   console.log(clark.speak());

class Instructor extends Person{
    constructor(InstructorAtt){
     super (InstructorAtt);
     this.specialty = InstructorAtt.specialty; //unique
     this.favLanguage = InstructorAtt.favLanguage; //unique
     this.catchPhrase = InstructorAtt.catchPhrase; //unique 
    }
    // Methods
    demo (subject) {
     return `Today we are learning about ${subject}.`;
    }
    
    grade (student,subject) {
     return`${student.name} receives a perfect score on ${subject}.`;
    }
  }// Instructor
  
  
  class ProjectManager extends Instructor{
    constructor(PMAtt){
     super(PMAtt);
     this.newgradClassName = PMAtt.gradClassName; //unique
     this.favInstructor = PMAtt.favInstructor; //unique
    }
    // Methods
    standup (channel) {
      return`${this.name} announces to ${channel}, @channel standy times!`;
    }
    
    debugsCode (student,subject) {
      return`${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
  }// Project Manager
  
  
  
  class Student extends Person{
    constructor(StudentAtt){
     super (StudentAtt);
     this.previousBackground = StudentAtt.previousBackground; //unique
     this.className = StudentAtt.className; //unique
     this.favSubjects = StudentAtt.favSubjects; //unique 
     this.grade =  StudentAtt.grade //unique
     this.grade = 75;
    }
    // Methods
    listsubjects () {
      return `${this.favSubjects}`;
    }
    
    PRAssignment (subject) {
      return `${this.name} has submitted a PR for ${subject}.`;
    }
    
    sprintChallenge (subject) {
     return`${this.name} has begun sprint challenge on ${subject}`;
    }
  }// Student
  
  
   const josh = new Instructor({
      age: 35,
      name: "Josh",
      location: "Utah",
      gender: "Male",
      speciality: "front-end",
      favLanguage:"CSS",
      catchPhrase: "you got this!"
    });
  
  const tim = new Instructor({
      age: 45,
      name: "Tim",
      location: "NYC",
      gender: "Male",
      speciality: "front-end",
      favLanguage:"Java",
      catchPhrase: "keep calm and carry on!"
    });
  
  const lauren = new ProjectManager({
      name: "Lauren", 
      age: 25,
      location: "LA", 
      gender: "F", 
      specialty: "back-end", 
      favLanguage: "Python",
      catchPhrase: "What's the plan!",
      gradClassName: "Web17",
      favInstructor: "Eli"
  }); 
  
  const akaash = new Student({
    name: "Akaash",
    age: 35,
    location: "Washington",
    gender: "Male",
    previousBackground: "Computer Science",
    className: "CS102",
    favSubjects: ["Psychology", "Economics", "Symbolic Systems"]
  });
  
  const perry = new Student({
    name: "Perry",
    age: 23,
    location: "Stanford",
    gender: "Male",
    previousBackground: "EE",
    className: "EE23",
    favSubjects: ["Electronics", "Economics", "Films"]
  });
  
  
console.log(josh); 
console.log(josh.demo("CSS")); //unique method
console.log(josh.speak()); //inherited from person "parent"

console.log(akaash);
console.log(akaash.speak()); 
console.log(akaash.listsubjects());
console.log(akaash.PRAssignment('HTML')) 
console.log(akaash.sprintChallenge('JavaScript')); 


console.log(josh.grade(akaash, "game theory"));

console.log(lauren.speak());
console.log(lauren.standup("PM Group"));
console.log(lauren.debugsCode(akaash, "Python"));




  
