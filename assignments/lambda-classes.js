// CODE here for your Lambda Classes

// Create a Person Class
class Person{
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
//Method for Class Person
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
      }
}

//Create an Instructor Class
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
//Method for Class Instructor
    demo(subject) {
        return `Today we are learning about ${subject}`;
}

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
}
}

//Create a Student Class
class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
}

//Methods for a Student Class


//Create a Project Manager Class
class ProjectManager extends Instructors {
    constructor(PMAttributes){
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor; 
    }
}
//Method for Class Project Manager


//TESTING BELOW

const tom = new Instructor({
    name: "Tom",
    location: "Orlando",
    age: 28,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Redux",
    catchPhrase: `Don't forget the homies`
});

const steve = new Instructor({
    name: "Steve",
    location: "San Diego",
    age: 38,
    gender: "male",
    favLanguage: "Python",
    specialty: "React",
    catchPhrase: `Don't forget the homies`
});

const dav = new Student({
    name: "Dav",
    location: "Princeton",
    age: 38,
    favSubjects: ["Javascript", "C++"],
    className: "CS132"
    previousBackground: "I slept all day"
});

const jak = new Student({
    name: "Jak",
    location: "North Brunswick",
    age: 38,
    favSubjects: ["Javascript", "C++"],
    className: "CS132"
    previousBackground: "I slept all day"
});

const shawn = new ProjectManager({
    name: "Shel",
    location: "Trenton",
    age: 68,
    favInstructor: "Nick",
    gradClassName: "CS1"
});

const tina = new ProjectManager({
    name: "Meera",
    location: "South Brunswick",
    age: 50,
    favInstructor: "Dan",
    gradClassName: "CS2"
});


