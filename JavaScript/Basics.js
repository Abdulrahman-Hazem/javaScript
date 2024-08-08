/* Data Types: undefined, null, boolean, string, symbol, number, and object */

/* Operators:
• Assignment: =, +=, -=, *=, /=, ^=, %=
• Arithmetic: +, ++, -, --, *, /, ^, %
• Logical: &&, ||, !
• Relational: ==, ===, >, <, >=, <=, !=
• Ternary: booleanExpression ? trueExpression : falseExpression (Example line 127)
*/

/*Code output:
• \'  single quote
• \"  double quote
• \\  backslash
• \n  newline
• \r  carriage return
• \t  tab
• \b  backspace
• \f  form feed
*/

/* Deferent ways to declare a variable: */
var global; //Can be used anywhere
let local; //Can only be used within the scope of declaration and cannot be redeclared
const final = null; //The value cannot be chainged (read-only)

/* Example with Concatination */
console.log("// Concatination //");
var myString = "\"FirstLine\"\n\f'SecondLine'\n";
myString += "\b\\ThirdLine\\\n\tForthLine\n";
console.log(myString);
console.log("a" + "b");
console.log(1 + 2);
console.log("a" + 1 + 2);
console.log(1 + "b" + 2);
console.log(1 + 2 + "c" + "\n");

/* String Methods */
console.log("// String Methods //");
console.log("/* length */");
var name = "Abdulrahman";

console.log(name);
console.log("The name is", name.length, "Characters long" + "\n");

console.log("/* charAt() */");
console.log(name);
console.log("The first letter is", name[0]); //Get the 1st letter
console.log("The first character is ", name.charAt(0)); //Get the 1st character
console.log("The second character is ", name.charAt(2) + "\n") //Get the 2nd character (counting starts from 0)

console.log("/* indexOf() */");
console.log(name);
console.log(name.indexOf("a")); //Get the first "a" in the string (counting starts from 0)
console.log(name.indexOf("a", 7)); //Get the first "a" after the first 7 characters of the string (including character #7) (counting starts from 0)
console.log(name.indexOf("w") + "\n"); //If a character does not exist or an error arises the outcome will be "-1"

console.log("/* substring() */");
console.log(name);
console.log(name.substring(3)); //Display the name starting from the 3rd character (counting starts from 0)
console.log(name.substring(3, 7) + "\n"); //Display the name starting from the 3rd character until the 7th character (counting starts from 0)

console.log("/* toLowerCase() & toUpperCase() */");
console.log(name);
console.log(name.toLowerCase()); //Convert the string to lowercase
console.log(name.toUpperCase() + "\n"); //Convert the string to uppercase

console.log("/* startsWith() & endsWith() */");
console.log(name);
console.log(name.startsWith("A"));
console.log(name.startsWith("a"));
console.log(name.endsWith("n"));
console.log(name.endsWith("m"));

console.log("/* contains() & replace() & trim() */");
console.log(name);
//console.log(name.contains("u"));
//console.log(name.contains("x"));
console.log(name.replace("a", "A")); //replace the first "a" with "A"
console.log(name.replaceAll("a", "A")); //replace all "a" with "A"
console.log("      a  b c  ".trim() + "\n"); //removes any surrounding space

/* Array */
console.log("// Array //");
var myArray = [10, 20, 30, 40, 50];
var multiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
]; //Nested Array //Multi-Dimensional Array
var editArray = ["tony", "bill", "john"];

var myArrayData = myArray[0]; //Get first element in the Arry
console.log(myArrayData);

myArray[1] = 60; //Modifying the Array
console.log(myArray);

var multiArrayData = multiArray[0][0]; //first element in the first array
console.log(multiArrayData);

editArray.push("abood", "mostafa"); //Adding "abood" and "mostafa" to the end of the "editArray"
console.log(editArray);

editArray.pop(); //Removing "mostafa"(The last element) from the "editArray" // if done to a nested array, the whole (Last) array is removed
console.log(editArray);

editArray.shift(); //Removing "tony"(The first element) from the "editArray"
console.log(editArray);

editArray.unshift("yahya"); //Adding "yahya" to the begining of the "editArray"
console.log(editArray + "\n");

/* Function */
console.log("// Function //");
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb;
  return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

function functionWithArguments(a, b) {
  console.log(a - b);
  console.log(a + b);
}
functionWithArguments(10, 5);

var variable = "global";
function testigGlobalLocal() {
  variable = "local";
  return variable;
}
const shortFunction = () => {
  //Arrow function
  return testigGlobalLocal();
};
console.log(variable);
console.log(shortFunction());
console.log(testigGlobalLocal() + "\n");

///// Control flow statement //////
/* Ternary statement */
console.log("// Ternary statement //");
var a = 0;
var b = 20;
a === b ? console.log(true) : console.log(false); //condition ? statement-if-true : statement-if-true;
a > 0
  ? console.log("greater than zero" + "\n")
  : a < 0
  ? console.log("less than zero" + "\n")
  : console.log("zero" + "\n"); //Nested ternarry statement

/* if statment */
console.log("// if statement //");
var value = 10;
if (value == "10") {
  //Loose equality check
  console.log("Number == 10");
} else if (value === "10") {
  //Strict equality check //Will only run if the initial if statement is false or if we change it to "if" rather than "else if"
  console.log("Number === 10");
} else {
  console.log("Number is not 10");
}

/* switch statement */
console.log("\n// switch statement //");
var greek = 2; //If the value is 1 or 2 the outpute is "alpha", 3 or 4 "beta" ect (no "break" is used), default i for any other value like 12 or "W"
switch (greek) {
  case 1:
  case 2:
    console.log("alpha");
    break;
  case 3:
  case 4:
    console.log("beta");
    break;
  case 5:
  case 6:
    console.log("gamma");
    break;
  case 7:
  case 8:
    console.log("delta");
    break;
  default:
    console.log("Epsilon");
    break;
}

/* for loop */
console.log("\n// for loops //");
for (i = 0; i < 3; i++) {
  console.log(i);
}
/* (Object) */
const person = {
  //Object, its similar to an array but instead of using an endex we use properties
  name: "Bedo", //Property: value
  "Date of birth": "26/12/2002", //"" was used to allow spacing for the property
  job: ["programmer", "Developer"],
  color: "blue",
  art: {
    //Nested object
    equipment: "Faber Castell",
    color: "shades of black",
    "paper size": "A4",
  },
};
console.log("// object navigation => " + person.art.equipment); //Navigating into the nested object
person.height = 190; //Adding another property to the object
delete person.color;

for (key in person) {
  console.log(key + ": " + person[key]);
}

var number = [1, 2, 3];
for (num of number) {
  console.log(num);
}

/* while loop */
console.log("\n// while loops //");
i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

/* try catch statement */
console.log("\n// try catch statement //");
try {
  throw new Error("This is an error");
} catch (error) {
  console.error("Caught an error: " + error.message);
} finally {
  console.log("\n");
}
/////////////////////////////////////

/* using objects as a database */
var contacts = [
  {
    firstName: "kira",
    lastName: "laine",
    number: "054323654",
    likes: ["pizza", "coding", "black"],
  },
  {
    firstName: "toby",
    lastName: "rama",
    number: "0994372684",
    likes: ["hogwarts", "magic", "orange"],
  },
  {
    firstName: "sherlock",
    lastName: "holmes",
    number: "0487345643",
    likes: ["violen", "while"],
  },
  {
    firstName: "vincent",
    lastName: "van gogh",
    number: "unknown",
    likes: ["art", "painting", "blue"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "no such contact";
}
var data = lookUpProfile("kira", "likes");
console.log(data);

/* Random number generator */
console.log("// Random number generator //");
function randomRanged(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var random = randomRanged(3, 2);
console.log(random + "\n");

/* parseInt */
console.log("// Converting to numbers //");
number = "01110010";
console.log(number);
console.log(parseInt(number)); //Converting to Integer
console.log(parseInt(number, 2)); //Conerting to Binary
console.log(parseFloat(number) + "\n"); //Converting to float

/* Destructuring */
console.log("// Destructuring //");
const averageTemp = {
  today: { min: 12, max: 22 },
  tomorrow: { min: 3, max: 16 },
};
const getTemp = (averageTemp) => {
  "use strict";

  const {
    tomorrow: { max: tempOfTomorrow },
  } = averageTemp; //get the field "tomorrow" and "max" from the object "averageTemp" and  assign it to the variable "tempOfTomorrow"
  return tempOfTomorrow;
};
console.log(getTemp(averageTemp));

const [x, y, , , z] = [1, 2, 3, 4, 5];
const [, , ...arr] = [1, 2, 3, 4, 5];
console.log(...arr); //"..." rest operator
console.log(x, y, z + "\n");

/* Simple fields */
console.log("// Simple fields //");
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};
console.log(createPerson("todd", 38, "male"));

const createPersonShort = (name, age, gender) => ({ name, age, gender });
console.log(createPersonShort("todd", 38, "male") + "\n");

/* class */
console.log("// class //");
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 12);
    }
    get temprature() {
      //Getter: used to get the value of the "_temp"
      return this._temp;
    }
    set temprature(updatedTemp) {
      //setter: used to set the value of the "_temp"
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(24); //creating an object using the "new" keyword and passing "24" to the constructor
let temp = thermos.temprature; //uses the getter to get "temprature"
thermos.temprature = 26; //uses the setter to set the new value "26"
temp = thermos.temprature;
console.log(temp);
