// CODE here for your Lambda Classes

// Create a Person Class
class Person{
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
//Method Logs name and location
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
      }
}

//Create an Instructor Class
class Instructor {
    constructor(instructorAttributes){
        super(instructorAttributes);
        
    }
}


