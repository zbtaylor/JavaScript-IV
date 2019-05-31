// CODE here for your Lambda Classes
class Person {
	constructor(props) {
		this.name = props.name;
		this.age = props.age;
		this.location = props.location;
	}

	speak() {
		console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`)
	}
}

class Instructor extends Person {
	constructor(props) {
		super(props);
		this.specialty = props.specialty;
		this.favLanguage = props.favLanguage;
		this.catchPhrase = props.catchPhrase;
	}

	demo(subject) {
		console.log(`Today we are learning about ${subject}.`)
	}

	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
	}

	changeGrade(student) {
		student.grade = Math.floor(Math.random() * 100);
	}
}

class Student extends Person {
	constructor(props) {
		super(props);
		this.previousBackground = props.previousBackground;
		this.className = props.className;
		this.favSubjects = props.favSubjects;
		this.grade = props.grade;
	}

	listsSubjects() {
		console.log(...this.favSubjects);
	}

	prAssignments(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}.`);
	}

	sprintChallenge(subject) {
		console.log(`${this.name} has begun a sprint challenge on ${subject}.`)
	}
}

class ProjectManager extends Instructor {
	constructor(props) {
		super(props);
			this.gradClassName = props.gradClassName;
			this.favInstructor = props.favInstructor;
	}

	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standup time!`);
	}

	debugsCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
	}
}

// Instructors

const Dan = new Instructor({
	name: "Dan Frehner",
	age: "35",
	location: 'California',
	specialty: "Classes",
	favLanguage: "Javascript",
	catchPhrase: "Cult of Functionality"
});

const Cam = new Instructor({
	name: "Cameron Pope",
	age: "37",
	location: 'Oregon',
	specialty: "FlexBox",
	favLanguage: "CSS",
	catchPhrase: "I like collecting video games!"
});

// Students

const Zach = new Student({
	name: "Zach Taylor",
	age: "32",
	location: "Maryland",
	previousBackground: "Graphic Design",
	className: "WebPT7",
	favSubjects: ["ES6", "FlexBox", "Type Coersion"],
	grade: 80
});

const Brian = new Student({
	name: "Brian Marshall",
	age: "28",
	location: "Idaho",
	previousBackground: "College",
	className: "WebPT7",
	favSubjects: ["Prototypes", "Floats", "Box Model"],
	grade: 85
});

// Project Managers

const Ryan = new ProjectManager({
	name: "Ryan Freeman",
	age: "26",
	location: "Utah",
	gradClassName: "Web20",
	favInstructor: "Dan Frehner"
});

const Josh = new ProjectManager({
	name: "Joshua Harris",
	age: "25",
	location: "Texas",
	gradClassName: "Web18",
	favInstructor: "Cameron Pope"
});

// Tests

console.log(Dan.favLanguage);
console.log(Dan.catchPhrase);
console.log(Cam.specialty);
console.log(Zach.className);
console.log(Brian.previousBackground);
console.log(Ryan.favInstructor);
console.log(Josh.gradClassName);

Dan.speak();
Cam.demo("FlexBox");
Dan.grade(Zach, "JavaScript");
Zach.listsSubjects();
Zach.prAssignments("JS Classes");
Brian.sprintChallenge("JSIV");
Ryan.standUp("Webtpt7_ryanf");
Josh.debugsCode(Brian, "FlexBox");

// Stretch

console.log(`Zach's grade was: ${Zach.grade}`);
Dan.changeGrade(Zach); // Instructor
console.log(`Dan changed it to: ${Zach.grade}`);

console.log(`Brian's grade was: ${Brian.grade}`);
Ryan.changeGrade(Brian); // PM
console.log(`Ryan changed it to: ${Brian.grade}`);