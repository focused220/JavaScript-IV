// CODE here for your Lambda Classes
//Person class
class Person{
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender; 
    }
    speak(){
        return `Hello my name is ${this.name} I am from ${this.location}`; 
    }
}

class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listsSubjects(){
        for(let i = 0; i < this.favSubjects.length; i++){console.log(this.favSubjects[i]);}
    }
    PRAssignment(sub){
        return `${this.name} has submitted a PR for ${sub}.`
    }
    sprintChallenge(sub){
        return `${this.name} has begun sprint challenge on ${sub};`
    }
}

class ProjectManagers extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(chan){
        return `${this.name} announces to ${chan}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

const Ryan = new Person({
    name: 'Ryan',
    location: 'Atlanta',
    age: 33,
    gender: 'male',
  });
  const Jones = new Person({
    name: 'Jones',
    location: 'Atlanta',
    age: 29,
    gender: 'male',
  });
  const Quinn = new Instructor ({
    name: 'Quinn',
    location: 'Atlanta',
    age: 33,
    gender: 'male',
    specialty: 'Defense',
    favLanguage: 'python',
    catchPhrase: 'defense almost wins championships...fn patriots'
  });
  const Manuel = new Instructor ({
    name: 'Manuel',
    location: 'Atlanta',
    age: 39,
    gender: 'male',
    specialty: 'Defense',
    favLanguage: 'javascript',
    catchPhrase: 'dont come in this danger zone half-steppin'
  });
  const Freeman = new Student ({
    name: 'Freeman',
    location: 'Atlanta',
    age: 26,
    gender: 'male',
    specialty: 'runnin that rock',
    favLanguage: '.Net',
    catchPhrase: 'just give me the ball and watch me work',
    previousBackground: 'worked at a funeral home',
    className: 'webpt4',
    favSubjects: ['mobile', 'networking', 'linux',]
  });
  const Sanu = new Student ({
    name: 'Sanu',
    location: 'Atlanta',
    age: 29,
    gender: 'male',
    specialty: 'going to get it',
    favLanguage: 'C',
    catchPhrase: 'im just gonna go get it, stop me',
    previousBackground: 'orange and black pack',
    className: 'webpt4',
    favSubjects: ['hardware', 'arduino', 'raspberry pi',]
  });
  const Neal = new ProjectManagers ({
    name: 'Neal',
    location: 'Atlanta',
    age: 23,
    gender: 'male',
    specialty: 'making people feel it in the worst way',
    favLanguage: 'Java',
    catchPhrase: "everytime you see me it'll be from your back",
    previousBackground: 'the swamp land',
    className: 'webpt4',
    favSubjects: ['ruby', 'sql', 'networking',],
    gradClassName: 'Gators',
    favInstructor: 'Quinn'
  });
  const DJones = new ProjectManagers ({
    name: 'DJones',
    location: 'Atlanta',
    age: 24,
    gender: 'male',
    specialty: 'all things lb',
    favLanguage: 'Android',
    catchPhrase: "fillin holes and strikin fear in nick foles",
    previousBackground: 'tiger country',
    className: 'webpt4',
    favSubjects: ['html', 'css', 'react',],
    gradClassName: 'Tigers',
    favInstructor: 'Quinn'
  });
console.log(Ryan);
console.log(Jones.speak());
console.log(Quinn.catchPhrase);
console.log(Manuel.speak());
console.log(Freeman.listsSubjects());
console.log(Sanu.PRAssignment('JS-IV'));
console.log(Neal.catchPhrase);
console.log(DJones.debugsCode(Sanu.name, 'JS-IV'));


