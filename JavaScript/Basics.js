/* Data Types: undefined, null, boolean, string, symbol, number, and object */

/* Operators:
• Assignment: =, +=, -=, *=, /=, ^=, %=
• Arithmetic: +, ++, -, --, *, /, %, (use Math.pow() for exponentiation)
• Logical: &&, ||, !
• Relational: ==, ===, >, <, >=, <=, !=
• Bitwise: &, |, ^, ~, <<, >>, >>>
• Ternary: booleanExpression ? trueExpression : falseExpression (Example line 176)
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
const final = null; //The value cannot be changed (read-only)

// Concatenation //
console.log("// Concatenation //");
var myString = "\"FirstLine\"\n\f'SecondLine'\n";
myString += "\b\\ThirdLine\\\n\tFourthLine\n";
console.log(myString);
console.log("a" + "b");
console.log(1 + 2);
console.log("a" + 1 + 2);
console.log(1 + "b" + 2);
console.log(1 + 2 + "c");

// String Methods //
console.log("\n// String Methods //");
console.log("/* length */");
var name = "Abdulrahman";

console.log(name);
console.log("The name is", name.length, "Characters long");

console.log("\n/* charAt() */");
console.log(name);
console.log("First character: ", name[0]); //Get the 1st letter
console.log("First character: ", name.charAt(0)); //Get the 1st character
console.log("Second character: ", name.charAt(2)); //Get the 3nd character

console.log("\n/* indexOf() */");
console.log(name);
console.log(name.indexOf("a")); //Get the first "a" in the string
console.log(name.indexOf("a", 7)); //Get the first "a" after the first 8 characters of the string (including the 8th character)
console.log(name.indexOf("w")); //If a character does not exist or an error arises the outcome will be "-1"

console.log("\n/* substring() */");
console.log(name);
console.log(name.substring(3)); //Display the name starting from the 4th character
console.log(name.substring(3, 7)); //Display the name starting from the 4th character until the 8th character

console.log("\n/* toLowerCase() & toUpperCase() */");
console.log(name);
console.log(name.toLowerCase()); //Convert the string to lowercase
console.log(name.toUpperCase()); //Convert the string to uppercase

console.log("\n/* startsWith() & endsWith() */");
console.log(name);
console.log(name.startsWith("A"));
console.log(name.startsWith("a"));
console.log(name.endsWith("n"));
console.log(name.endsWith("m"));

console.log("\n/* includes() & replace() & trim() */");
console.log(name);
console.log(name.includes("u"));
console.log(name.includes("x"));
console.log(name.replace("a", "A")); //Replace the first "a" with "A"
console.log(name.replaceAll("a", "A")); //Replace all "a" with "A"
console.log("      a  b c  ".trim()); //Removes any surrounding space

// Primitive and Reference Types //
console.log("\n// Primitive and Reference Types //");
let primitiveType = 10; //This is a simple number (primitive type)
let referenceType = { value: 10 }; //This is an object (reference type)

function modifyPrimitive(x) {
  x = x + 1; //This changes the local copy of the primitive value, not the original
}

function modifyReference(obj) {
  obj.value = obj.value + 1; //This changes the actual object because objects are reference types
}

// Calling the functions
modifyPrimitive(primitiveType); //No effect on the original number
modifyReference(referenceType); //Changes the value inside the object

console.log(primitiveType);
console.log(referenceType.value);

// Array //
console.log("\n// Array //");
var myArray = [10, 20, 30, 40, 50];
var multiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
]; //Nested Array //Multi-Dimensional Array (2D Array)
var editArray = ["tony", "bill", "john"];

var myArrayData = myArray[0]; //Get first element in the Arry
console.log(myArrayData);

myArray = [...myArray, 60, 70, 90]; //Adding more elements "..." is used to access all the elementsof the array
console.log(myArray);

myArray[7] = 80; //Modifying the Array
console.log(myArray);

var multiArrayData = multiArray[0][0]; //first element in the first array
console.log(multiArrayData);

editArray.push("abood", "mostafa"); //Adding "abood" and "mostafa" to the end of the "editArray"
console.log(editArray);

editArray.pop(); //Removing "mostafa"(The last element) from the "editArray" // if done to a nested array, the whole (Last) array is removed
console.log(editArray);

editArray.shift(); //Removing "tony"(The first element) from the "editArray"
console.log(editArray);

editArray.unshift("yahya"); //Adding "yahya" to the beginning of the "editArray"
console.log(editArray);

// Function //
console.log("\n// Function //");
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
function testingGlobalLocal() {
  variable = "local";
  return variable;
}
const shortFunction = () => {
  //Arrow function
  return testingGlobalLocal();
};
console.log(variable);
console.log(shortFunction());
console.log(testingGlobalLocal());

// Control flow statement //
console.log("\n// Control flow statement //");
/* Ternary statement */
console.log("/* Ternary statement */");
var a = 0;
var b = 20;
a === b ? console.log(true) : console.log(false); //condition ? statement-if-true : statement-if-false;
a > 0
  ? console.log("greater than zero" + "\n")
  : a < 0
  ? console.log("less than zero" + "\n")
  : console.log("zero"); //Nested ternary statement to handle positive, negative, and zero cases

/* If statement */
console.log("\n/* If statement */");
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

/* Switch statement */
console.log("\n/* Switch statement */");
var greek = 2; //If the value is 1 or 2 the output is "alpha", 3 or 4 "beta" ect (no "break" is used), default i for any other value like 12 or "W"
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

/* For loop */
console.log("\n/* For loops */");
for (i = 0; i < 3; i++) {
  console.log(i);
}

let man = { name: "Alice", age: 25, city: "New York" };
for (let key in man) {
  console.log(key + ": " + man[key]);
}

let numbers = [10, 20, 30];
for (let value of numbers) {
  console.log(value);
}

/* While loop */
console.log("\n/* While loops */");
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

/* Try catch statement */
console.log("\n/* Try catch statement */");
try {
  throw new Error("This is an error");
} catch (error) {
  console.error("Caught an error: " + error.message);
} finally {
  console.log("finally-block");
}

// (Object) //
console.log("\n// Object //");
const person = {
  //Object, its similar to an array but instead of using an index we use properties
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
console.log("{ object navigation } => " + person.art.equipment); //Navigating into the nested object
person.height = 190; //Adding another property to the object
delete person.color;

for (key in person) {
  console.log(key + ": " + person[key]);
}

var number = [1, 2, 3];
for (num of number) {
  console.log(num);
}

/* Using objects as a database */
console.log("\n/* Using objects as a database */");
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
    likes: ["violin", "while"],
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
console.log("\n// Random number generator //");
function randomRanged(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var random = randomRanged(2, 3);
console.log(random);

/* parseInt */
console.log("\n// Converting to numbers //");
number = "01110010";
console.log(number);
console.log(parseInt(number)); //Converting to Integer
console.log(parseInt(number, 2)); //Conerting to Binary
console.log(parseFloat(number)); //Converting to float

/* Destructuring */
console.log("\n// Destructuring //");
const averageTemp = {
  today: { min: 12, max: 22 },
  tomorrow: { min: 3, max: 16 },
};
const getTemp = (averageTemp) => {
  "use strict";

  const {
    tomorrow: { max: tempOfTomorrow },
  } = averageTemp; //Get the field "tomorrow" and "max" from the object "averageTemp" and  assign it to the variable "tempOfTomorrow"
  return tempOfTomorrow;
};
console.log(getTemp(averageTemp));

const [x, y, , , z] = [1, 2, 3, 4, 5];
const [, , ...arr] = [1, 2, 3, 4, 5];
console.log(...arr); //"..." rest operator
console.log(x, y, z);

/* Simple fields */
console.log("\n// Simple fields //");
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};
console.log(createPerson("todd", 38, "male"));

const createPersonShort = (name, age, gender) => ({ name, age, gender });
console.log(createPersonShort("todd", 38, "male"));

/* Class */
console.log("\n// Class //");
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
      this._temp = (temp * 9) / 5 + 32;
    }
    get temperature() {
      //Getter: used to get the value of the "_temp"
      return this._temp;
    }
    set temperature(updatedTemp) {
      //Setter: used to set the value of the "_temp"
      this._temp = (updatedTemp * 9) / 5 + 32;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(24); //Creating an object using the "new" keyword and passing "24" to the constructor
let temp = thermos.temperature; //Uses the getter to get "temperature"
console.log(temp);
thermos.temperature = 18; //Uses the setter to set the new value "26"
temp = thermos.temperature;
console.log(temp);

// Set and Map //
console.log("\n// Set and Map //");
const set = new Set([1, 2, 2, 3]); //Set only stores unique values "1, 2, 3"
console.log(set);

const map = new Map();
map.set("a", 1); //Set key-value pairs in the map
map.set("b", 2);
console.log(map.get("a"));

// Importing from "Extention.js" //
console.log("\n// Importing //");
const { hello, greeting } = require("./Extension.js"); //importing "hello" and "greeting" from "Extension.js"
console.log(hello());
console.log(greeting);

console.log("// Promise and Async/Await //");

// Creating a Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved!"), 1000); // Resolve the promise after 1 second
});

// Handling the Promise with .then()
promise.then(console.log); // Output: Resolved! (after 1 second)

// Using async/await to handle the Promise
async function asyncFunction() {
  const result = await promise; // Wait for the promise to resolve
  console.log(result); // Output: Resolved!
}
asyncFunction();
