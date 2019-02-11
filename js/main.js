//comments
/* multiple line comments */
//statements
//window.alert('Hello World');

//print/ output information
//1.window.alert('Enter Your Name');
//2. document.write('What is your email?');
//3. prompt('Enter Your Email');
//4. confirm('Do You Agree?');
//5. console.log('In console now');
//6. parseInt(prompt('Enter Your Age'));
//7. element.innerHTML;

//variables - storage location
var variablename = 'Adam';
var text = 'Years old';
alert(text);
document.write(variablename);

//concatenation
/* document.write('<h2> Hello' + variablename + '</h2>')

var date = Date();
document.write(date);

var userColor = prompt('Enter your favorite color?');

document.bgColor = userColor; */

//Data types
//numbers, strings, booleans, objects, arrays
/* var num = 2333;
var txt = 'Justice';

var gaveOver = true//false;
var student ={
    Name: "Adam",
    Age: "20",
    eyeColor: "green",
}

var colors = ['green', 'red', 'black'];
 */
//functions - blocks of code that are used for a specific purpose

/* function functionname(){
    //run your function codes
    alert('Hi new user');
} */
//call the function
functionname();

function doSomething(){
    //document.getElementById('java').innerHTML = "New JavaScript for Class";
    //var x = document.getElementById('java');
    //x.style.color = "red";

    document.querySelector('java').style.fontSize = "1em";

}
//Events - actions or something that the browser user reacts to.
//click, load, resize, mouseover, blur, change, mouseout, keydown,

//EventListener var x = document.querySelector('.btn');

x.addEventListener("click", function(){
    document.getElementById('java').style.color
}
