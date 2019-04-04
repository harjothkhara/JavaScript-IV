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

  const clark = new Person({
    age: 28,
    name: "Clark",
    location: "Smallville",
    gender: "Male"
  });
  
  // Person
console.log(clark);
console.log(clark.speak());