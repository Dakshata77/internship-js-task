1. Welcome Program

let name = prompt("Enter your name");
alert("Hi " + name + ", Welcome to JavaScript Training");
console.log("Hi " + name + ", Welcome to JavaScript Training");

2.  Console Methods Practice

console.log(700);
console.warn(700);
console.error(700);
console.clear();

3. Data Type Identification

let str = "JavaScript";
let num = 500;
let bool = true;
let undef;
let nul = null;

console.log(str, typeof str);
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(undef, typeof undef);
console.log(nul, typeof nul);

4. Arithmetic Operations

let a = 10;
let b = 7;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

5. Increment & Decrement

let x = 20;

console.log(++x); // pre-increment
console.log(x++); // post-increment
console.log(x);

console.log(--x); // pre-decrement
console.log(x--); // post-decrement
console.log(x);

6. Assignment Operators

let num = 10;

num += 5;
console.log(num);

num -= 2;
console.log(num);

num *= 2;
console.log(num);

num /= 2;
console.log(num);

num %= 3;
console.log(num);

7. Array Access

let courses = ["HTML", "CSS", "JavaScript", "React"];

console.log(courses[0]);
console.log(courses[1]);
console.log(courses[courses.length - 1]);
console.log(courses.length);

8. Modify Array
courses.push("NodeJS");
courses.pop();
console.log(courses);

9. Student Object

let student = 
{
  name: "Dakshata",
  age: 21,
  course: "JavaScript",
  city: "Dharmapuri"
};

console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.city);

10. Nested Object Practice
let company = 
{
  companyName: "Stackly",
  trainer: 
  {
    name: "Dakshata",
    subject: "JavaScript"
  }
};

console.log(company.companyName);
console.log(company.trainer.name);
console.log(company.trainer.subject);