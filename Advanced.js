//function constructor
/* var mohamed = {
    name: 'mohamed',
    yearOfBirth: 1994,
    job: 'teacher',
} */

var User = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

User.prototype.lastName = 'yasser'

var mahmoud = new User('mahmoud',1990,'teacher');
console.log(mahmoud);



//object.creat

var User = {
    calcAge: function() {
        console.log(2020-this.yearOfBirth)
    }
}

var boody = Object.create(User)
boody.name = 'boody';
boody.yearOfBirth = 1990;

boody.calcAge()


var years = [1990,1965,1937,2005,1998];

function calcAge(el){
    return 2020 - el
}

function isFullAge (el){
    return el >= 18
}

function arraycalc (arr,fn){
    var result = [];
    for (var i = 0 ; i < arr.length ; i++){
        result.push(fn(arr[i]))
    }
    return result;
}


var ages = arrayCalc(years,calcAge)
var isFullAge = arraycalc(ages,isFullAge)
console.log(ages);
console.log(fullAges)