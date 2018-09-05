/*calcAge(1992);

function calcAge(year){
    console.log(2016-year);
}

calcAge(1990);

var retirement = function(year) {
    console.log(65-(2016-year));
}

retirement(1990);

console.log(age);
var age = 23;
console.log(age);

function foo(){
    var age = 55;
    console.log(age);
}

foo();
console.log(age);

var a ='Hello!';
first();

function first(){
    //var a ='ddddddd';
    var b = 'Hi!';
    second();
    
    function second() {
        var c ='Hey!';
        console.log(a+b+c);
        //third();
    }
}

function third(){
    var d ='John!';
    console.log(a+b+c+d);
}
calcAge(1990);

function calcAge(year){
    console.log(2018-year);
    console.log(this);
}
*/

var john = {
    name:'John',
    year:1990,
    calcAge:function() {
        console.log(this);
    }
}
john.calcAge();