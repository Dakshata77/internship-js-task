Part 1 – Logical & Ternary Operator

Q1.

let num = 30;
if (num >= 10 && num <= 50) 
    {
        console.log("Valid Number");
    } 
else 
{
  console.log("Invalid Number");
}

Q2.

let username = "user";
let password = "****";

if (username === "user" && password === "****") 
    {
        console.log("Login Successful");
    } 
else 
{
  console.log("Invalid Credentials");
}

Q3.(Ternary Operator)

let n = 7;
let result = (n % 2 === 0) ? "Even" : "Odd";
console.log(result);

Q4.

console.log((10 === "10") || (5 > 2) && !(3 < 1));

Step-by-step:

10 === "10" → false
5 > 2 → true
3 < 1 → false, so !(false) → true
true && true → true
false || true → true

Output: true

Part 2 – Type Conversion

Q5. 

console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5

Q6. 

let value = "100";
console.log(Number(value));   // 100
console.log(Boolean(value));  // true

Q7.

console.log(Boolean(""));   // false
console.log(Boolean(" "));  // true
console.log(Boolean(0));    // false
console.log(Boolean([]));   // true

Part 3 – Conditional Statements

Q8.

let marks = 78;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

Q9. (Switch Case)

let signal = "green";

switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}

Q10. (Nested If)

let age = 20;
let height = 165;
let weight = 55;

if (age >= 18) {
  if (height >= 160) {
    if (weight >= 50) {
      console.log("Selected");
    } else {
      console.log("Weight condition failed");
    }
  } else {
    console.log("Height condition failed");
  }
} else {
  console.log("Age condition failed");
}


Part 4 – Loops

Q11.

for (let i = 1; i <= 20; i++)
{
  console.log(i);
}

Q12.

for (let i = 1; i <= 20; i++) 
{
  if (i % 2 !== 0) 
    {
        console.log(i);
    }
}

Q13. 

let i = 10;
while (i >= 1) 
{
  console.log(i);
  i--;
}

Q14.

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

Q15.

(for-of)
let word = "STACKLY";

for (let char of word) 
{
  console.log(char);
}

Q16.

(for-in)
let student = 
{
  name: "Arun",
  course: "MERN",
  duration: "6 months"
};

for (let key in student) 
{
  console.log(key + " : " + student[key]);
}


Real-Time Questions

RT-1 (Ternary Login)

let user = "admin";
let pass = "1234";

console.log
(
  (user === "admin" && pass === "1234") 
  ? "Login Success" 
  : "Invalid Credentials"
);


RT-2 (Salary Bonus)

let salary = 60000;
let experience = 4;

if (salary > 50000 && experience > 3) {
  console.log("Eligible for bonus");
} else {
  console.log("Not eligible");
}


RT-3 (Shopping Discount)

let amount = 3000;

if (amount >= 5000) {
  console.log("20% Discount");
} else if (amount >= 2000) {
  console.log("10% Discount");
} else {
  console.log("No Discount");
}


RT-4 (Even Counter)

let count = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    count++;
  }
}

console.log("Even numbers count:", count);

RT-5 (Dynamic Greeting)

let hour = 18;

if (hour >= 1 && hour <= 6) {
  console.log("Good Morning");
} else if (hour <= 12) {
  console.log("Morning");
} else if (hour <= 16) {
  console.log("Good Afternoon");
} else if (hour <= 19) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}
