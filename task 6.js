SECTION 1 – Array Higher Order Methods

Task 1 – forEach()

let subjects = ["Maths", "Science", "English", "History"];

let result = "";
subjects.forEach((sub, index) => {
  result += `Subject ${index + 1}: ${sub}\n`;
});

console.log(result);

-->Why does forEach() return undefined?

Because forEach() only executes a function for each element.
It does not return a new array.

Task 2 – map()

let prices = [100, 200, 300, 400];

let gstPrices = prices.map(price => price * 1.10);

console.log(gstPrices);
// [110, 220, 330, 440]

Task 3 – filter()

let students = 
[
 { name: "A", marks: 45 },
 { name: "B", marks: 75 },
 { name: "C", marks: 35 },
 { name: "D", marks: 85 }
];

let passedStudents = students.filter(student => student.marks > 50);

console.log(passedStudents);

Task 4 – find()

let firstTopper = students.find(student => student.marks > 50);

console.log(firstTopper);

Difference between filter() and find()
    filter()	                            find()
Returns all matching elements	Returns only first matching element
Returns array	                Returns single object

Task 5 – reduce()
let cart = 
[
 { item: "Shirt", price: 1000 },
 { item: "Shoes", price: 2000 },
 { item: "Watch", price: 3000 }
];

let total = cart.reduce((sum, item) => sum + item.price, 0);

console.log("Total:", total);

// Bonus (with 5% tax)
let totalWithTax = cart.reduce((sum, item) => {
  return sum + (item.price * 1.05);
}, 0);

console.log("Total with Tax:", totalWithTax);

Task 6 – some()

let numbers = [1, 3, 5, 7, 8];

let hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven); // true

Task 7 – every()

let ages = [22, 25, 19, 30];

let allAdults = ages.every(age => age > 18);

console.log(allAdults); // true

Task 8 – sort()

let salaries = [50000, 10000, 70000, 30000];

// Ascending
salaries.sort((a, b) => a - b);
console.log("Ascending:", salaries);

// Descending
salaries.sort((a, b) => b - a);
console.log("Descending:", salaries);

-->Why normal sort() fails?

Because default sort converts numbers into strings and sorts alphabetically.

Example:

[10000, 30000, 50000, 70000]


works, but:

[1, 100, 2]


becomes:

[1, 100, 2] (wrong)

Task 9 – Array Conversion

let arr = [10, 20, 30, 40];

console.log(arr.toString());   // "10,20,30,40"
console.log(arr.join("-"));    // "10-20-30-40"

SECTION 2 – String Methods

Task 10 – charAt() & charCodeAt()

let word = "Developer";

console.log(word.charAt(4));      // l
console.log(word.charCodeAt(4));  // ASCII value

Task 11 – slice()

let company = "StacklyCompany";

let result = company.slice(7);

console.log(result); // Company

Task 12 – Case Conversion

let userInput = "javaScript";

console.log(userInput.toUpperCase()); // JAVASCRIPT
console.log(userInput.toLowerCase()); // javascript

Task 13 – trim()

let email = "   naveen@gmail.com   ";

console.log(email.trim());

Task 14 – includes()

let message = "Welcome to JavaScript Training";

console.log(message.includes("JavaScript")); // true

Task 15 – split()

let movie = "spider-man-no-way-home";

let movieArray = movie.split("-");

console.log(movieArray);

Task 16 – indexOf() & lastIndexOf()

let text = "programming";

console.log(text.indexOf("m"));      // first m
console.log(text.lastIndexOf("m"));  // last m

Task 17 – replace()

let tech = "I love python";

let updated = tech.replace("python", "javascript");

console.log(updated);

Task 18 – startsWith() & endsWith()

let filename = "report.pdf";

console.log(filename.startsWith("report")); // true
console.log(filename.endsWith(".pdf"));     // true

Task 19 – repeat()

let star = "*";

console.log(star.repeat(10));
// **********

FINAL TEAM CHALLENGE – Employee Report System

let employees = [
 { name: "Naveen", salary: 50000 },
 { name: "Arun", salary: 30000 },
 { name: "Kiran", salary: 70000 }
];

// 1️⃣ Convert names to uppercase
let upperNames = employees.map(emp => ({
  ...emp,
  name: emp.name.toUpperCase()
}));

console.log(upperNames);

// 2️⃣ Filter salary > 40000
let highSalary = employees.filter(emp => emp.salary > 40000);

console.log(highSalary);

// 3️⃣ Find first salary > 60000
let firstHigh = employees.find(emp => emp.salary > 60000);

console.log(firstHigh);

// 4️⃣ Calculate total salary
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

console.log("Total Salary:", totalSalary);

// 5️⃣ Sort salaries descending
let sorted = [...employees].sort((a, b) => b.salary - a.salary);

console.log(sorted);