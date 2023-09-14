// Array

// Q1 & Q2
var students = [];

// Q3
var strings = ["Waqar", "Ali"];

// Q4
var numbers = [2, 4, 5];

// Q5
var boolean = [true, false];

// Q6
var mixed = ["Ahmed", true, 35];

// Q7
document.write("<h3>Q7</h3>");
var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Qualification</h2>");
document.write(
  "1) " +
    education[0] +
    "<br>" +
    "2) " +
    education[1] +
    "<br>" +
    "3) " +
    education[2] +
    "<br>" +
    "4) " +
    education[3] +
    "<br>" +
    "5) " +
    education[4] +
    "<br>" +
    "6) " +
    education[5] +
    "<br>" +
    "7) " +
    education[6] +
    "<br>" +
    "8) " +
    education[7] +
    "<br>"
);

// Q8
document.write("<h3>Q8</h3>");
var studentNames = ["Waqar", "Juanaid", "Bilal"];
var studentScore = [300, 400, 100];
var totalScore = 500;
var std1percentage = (studentScore[0] / totalScore) * 100;
var std2percentage = (studentScore[1] / totalScore) * 100;
var std3percentage = (studentScore[2] / totalScore) * 100;

document.write(
  "Score of " +
    studentNames[0] +
    " is " +
    studentScore[0] +
    " " +
    std1percentage +
    "%<br>" +
    "Score of " +
    studentNames[1] +
    " is " +
    studentScore[1] +
    " " +
    std2percentage +
    "%<br>" +
    "Score of " +
    studentNames[2] +
    " is " +
    studentScore[2] +
    " " +
    std3percentage +
    "%<br>"
);

// Q9
var colors = ["Blue", "Red", "Green", "Purple", "Pink"];

// a.
var q9aUserInput = prompt(
  "Enter the name of color you want to add in an array?"
);
colors.unshift(q9aUserInput);
console.log(colors);

// b.
var q9bUserInput = prompt("Enter the name of color you want to add in an array?");
colors.push(q9bUserInput);
console.log(colors);

// c.
var q9cUserInput1 = prompt(
  "Enter the name of the 1st color you want to add in an array?"
);
colors.unshift(q9cUserInput1);
console.log(q9cUserInput1);

var q9cUserInput2 = prompt(
  "Enter the name of the 2nd color you want to add in an array?"
);
colors.unshift(q9cUserInput2);
console.log(colors);

// d
var q9dUserInput = prompt(
  "Enter the name of color you want to add in an array?"
);
colors.shift(q9dUserInput);
console.log(colors);

// e
// Deleting an array from the last index.
colors.pop(q9eUserInput);
console.log(colors);

// f
var colors = ["Blue", "Red", "Green", "Purple", "Pink"];
console.log(colors);
var q9fUserInput = prompt(
  "Which array index you want to add the color Indigo Purple?"
);
colors.splice(q9fUserInput, 0, "Indigo Purple");
console.log(colors);

// g;
var colors = ["Blue", "Red", "Green", "Purple", "Pink"];
console.log(colors);
var q9gUserInput1 = prompt("Which array index you want to delete a color?");
var q9gUserInput2 = prompt("How many colors you want to delete?");
var userInput = colors.slice(q9gUserInput1, q9gUserInput2);
console.log(userInput);

// Q10
var studentsScore = [320, 230, 480, 120];
document.write("Scores of the students: " + studentsScore + "<br>");
document.write("Ordered scores of students: " + studentsScore.sort());

// Q11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities list: " + "<br>" + cities + "<br>");
var selectedCities = cities.slice(2, 5);
document.write("Selected cities list: " + "<br>" + selectedCities);

// // Q12
var arr = ["This ", " is ", " my ", " cat"];
document.write("Array: " + arr + "<br>");
document.write("String: " + arr.join(""));

// Q13
// FIFO (First In First Out)
document.write("<h3>FIFO</h3>")
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices: " + devices + "<br><br>");
document.write("Out: " + devices[0] + "<br>");
document.write("Out: " + devices[1] + "<br>");
document.write("Out: " + devices[2] + "<br>");
document.write("Out: " + devices[3] + "<br><br>");

// Q14
// LIFO (Last In Fisrt Out)
document.write("<h3>LIFO</h3>")
document.write("Devices: " + devices + "<br><br>");
document.write("Out: " + devices[3] + "<br>");
document.write("Out: " + devices[2] + "<br>");
document.write("Out: " + devices[1] + "<br>");
document.write("Out: " + devices[0]);

// Q15
var phonesManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(
  "<h3>Selectbox</h3><select><option>" +
    phonesManufacturers[0] +
    "</option><option>" +
    phonesManufacturers[1] +
    "</option><option>" +
    phonesManufacturers[2] +
    "</option><option>" +
    phonesManufacturers[3] +
    "</option><option>" +
    phonesManufacturers[4] +
    "</option><option>" +
    phonesManufacturers[5] +
    "</option></select><br><br>"
);
