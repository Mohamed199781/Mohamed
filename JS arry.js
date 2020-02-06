/* function calculateage(year){
    return 2020-year
}

function retirment (firstname,birthyear){
    var age = calculateage(birthyear);
    var retirment = 60 - age ;

 
    if (retirment > 0){
        console.log(firstname + 'retires in' + retirment + 'years');
    }
        else {
            console.log('Already retired');
        }
    }

    retirment ('abdo' , 1990);
    retirment ('nada', 1998);
 */


/* function know (name){
    return name
} */

/* function welcome (firstname){
    var name = 'Welcome '+firstname ;
    console.log(name);
}

welcome ('mohamed') */





//Array is []


/* var names = ['sara','abdo','nehal'];
console.log(names);
console.log(names[0]);
console.log(names.length); */

//length 
//to know how many names







//unshift
//to add Element first

//push
//to add Element last


//pop
//to remove the last Element

//shift
//to remove the first Element

//indexof
// to know the number of Element




/* names[names.length] = 'boody'
names[names.length] = 'ghada'
console.log(names);

names.unshift(2000);
names.push(1997);
names.pop();
names.shift();

console.log(names.indexOf('nehal'));
console.log(names); */





/* var mido = {
    firstname:'mohamed',
    lastname:'yasser',
    age:22,
    email:'mido@SpeechGrammarList.com',
    pass:12341523,
    calcAge: function(){
        var birthyear = 2020 - this.age
        return birthyear
    }
}

console.log(mido);
console.log(mido.firstname);
console.log(mido.calcAge()); */





/* var names = ['sara','abdo','nehal','yasser',1998,'mohamed']


for (var i = 0 ; i < names.length; i++){
    if (typeof names[i] !== 'string') break ;
    console.log(names[i]);
}

for (var i = 0 ; i < names.length; i++){
    if (typeof names[i] !== 'string') continue ;
    console.log(names[i]);
}


for (var i = 0 ; i < names.length; i++){
    if (typeof names[i] !== 'string') ;
    console.log(names[i]);
}
 */



var names = ['mohamed','yasser','fouad','fouad','mohamed','salah']

function welcome (arr){
    for (var i = 0 ; i < arr.length; i++){
        console.log(arr[i])
    }
}
 welcome (names)




{/*<script src="index.js"></script>
</html> */}


