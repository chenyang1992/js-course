// Function constructor

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
        console.log(2016 - this.yearOfBirth);
}


var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();

*/



// Object.create

/*

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth)
    }    
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: {value: 1990},
    job: {value: 'designer'}
});

*/



// Primitives vs objects

var a =23;
var b=a;
a = 46;

// Primitives, every time create a copy
// objects, every time point to that object


var years = [1990, 1992, 1994, 2000];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i=0; i< arr.length; i++) { 
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016-el;
}

console.log(arrayCalc(years, calculateAge));


// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('john');
