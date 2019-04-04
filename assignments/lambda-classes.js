// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
      this.newName = attributes.name;
      this.newAge = attributes.age;
      this.newLocation = attributes.location;
      this.newGender = attributes.gender;
    }
    // Methods
    speak() {
      return `Hello I'm ${this.newName}, and I'm from ${this.newLocation}`;
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
     this.newSpeciality = InstructorAtt.speciality; //unique
     this.newfavLanguage = InstructorAtt.favLanguage; //unique
     this.newcatchPhrase = InstructorAtt.catchPhrase; //unique 
    }
    // Methods
    demo (subject) {
      console.log(`Today we are learning about ${subject}`);
    }
    
    grade (student,subject) {
     console.log(`${student.name} receives a perfect score on ${subject}`);
    }
  }// Instructor

  const josh = new Instructor({
    age: 35,
    name: "Josh",
    location: "Utah",
    gender: "Male",
    speciality: "front-end",
    favLanguage:"CSS",
    catchPhrase: "you got this!"
  });
  
  console.log(josh); 
  console.log(josh.demo("CSS")); //unique method
  console.log(josh.speak()); //inherited from person "parent"




  
