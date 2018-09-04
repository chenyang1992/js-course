/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

var firstName = 'John';
var age = 25;
age >= 18 ?console.log(firstName + 'drinks beer.') : console.log(firstName + 'drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

var height;
height = 77;

if (height === 77) {
    console.log('Variable is defined.');
} else {
    console.log('Variable is not defined.')
}

var scoreJohn = (89+120+103)/3;
var scoreMike = (116+94+123)/3;
var scoreMary = (97+134+105)/3;
console.log(scoreJohn + '   ' + scoreMike + '   ' + scoreMary);

if (scoreJohn >= scoreMike) {
    console.log('John wins.');
} else {
    console.log('Mike wins.');
}


function calculateAge(birthYear) {
    return 2018-birthYear;
}

console.log(calculateAge(1990));

*/

// Function declaration
//function whatDoYouDo(job, firstName);

/*

var whatDoYouDo=function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids';
        
        case 'driver':
            return firstName + ' drives a cab';
            
        case 'doctor':
            return firstName + ' treats patients';
            
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1991, 1992);
console.log(names[0]);
names.push(199999);
names.unshift('Mr');
names.pop();
names.shift();
console.log(names);


function tipCal(bill) {
    if(bill <= 50) {
        return bill * 20/100 ;
    } else if (bill <= 200) {
        return bill * 15/100 ;
    } else return bill * 10/100 ;
}

var tips = [tipCal(124), tipCal(48), tipCal(268)];
var amounts = [tips[0]+124, tips[1]+48, tips[2]+268];
console.log(tips);
console.log(amounts);

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMaeeried: false,
    calcAge: function() {
        this.age = 2018-this.birthYear;
        
    }
};

//console.log(john['job']);
john.calcAge();
console.log(john);

var jane = new Object();


var infoMark = {
    fullName:'Mark',
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);        
    }    
}

infoMark.mass = 30;
infoMark.height = 169;
infoMark.calcBMI();
console.log(infoMark.BMI)
console.log(infoMark);

var infoJohn = {
    fullName:'John',
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);        
    }    
}

infoJohn.mass = 59;
infoJohn.height = 180;
infoJohn.calcBMI();
console.log(infoJohn.BMI);
console.log(infoJohn);

for (var i = 0; i<10; i++){
    console.log(i);
}

var j=0;
while(j<10) {
    console.log(j);
    j++;
}
*/


var bills = [124, 48, 268, 180, 42];
function calcTips(bills){
    var tips = new Array();
    var totleAmount = new Array();
    for(var i=0; i<bills.length; i++){
        tips.push(rules(bills[i]));
        totleAmount.push(tips[i]+bills[i]);
    }
    console.log(tips);
    console.log(totleAmount);
}
function rules (bill){
    if(bill <= 50 ) return bill*20/100;
    if(bill<=200 ) return bill*15/100;
    else return bill*10/100;    
}

calcTips(bills);