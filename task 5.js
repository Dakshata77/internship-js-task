TASK 1 – Employee Merge System

let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 }
let empPromotion = { role: "Developer", bonus: 10000 }

let finalEmployee = 
{
  ...empBasic,
  ...empPromotion,
  salary: 40000,
  experience: "2 years"
}

console.log(finalEmployee)

TASK 2 – Shopping Cart

let cart1 = ["Shoes", "Shirt"]
let cart2 = ["Watch", "Cap"]

let finalCart = ["Socks", ...cart1, ...cart2, "Bag"]

console.log(finalCart)

TASK 3 – Rest Operator Salary Calculator

function calculateTotalSalary(baseSalary, ...bonuses) 
{
  let totalBonus = bonuses.reduce((sum, bonus) => sum + bonus, 0)
  return `Total Salary: ${baseSalary + totalBonus}`
}

console.log(calculateTotalSalary(30000, 2000, 3000, 5000))

TASK 4 – Advanced Destructuring

let student = 
{
  name: "Rahul",
  marks: { maths: 90, science: 85, english: 88 }
}

let { name } = student
let { maths, science } = student.marks

console.log(`${name} scored ${maths} in maths and ${science} in science`)

TASK 5 – Array Manipulation

let numbers = [10, 20, 30, 40, 50]

// Remove 30 and add 25
numbers.splice(2, 1, 25)

// Reverse array
numbers.reverse()

// Check if 50 exists
let exists = numbers.includes(50)

console.log("Final Array:", numbers)
console.log("Does 50 exist?", exists)

TASK 6 – Flatten Data

let apiData = [1,2,[3,4,[5,6,[7,8]]]]

let flatArray = apiData.flat(Infinity)

console.log("Flattened Array:", flatArray)
console.log("Index of 6:", flatArray.indexOf(6))

TASK 7 – Sorting Problem

let prices = [100, 5, 25, 300, 45]

// Ascending
let asc = [...prices].sort((a, b) => a - b)

// Descending
let desc = [...prices].sort((a, b) => b - a)

console.log("Ascending:", asc)
console.log("Descending:", desc)

BONUS HARD TASK – Team Level

let users = 
[
  { name: "A", salary: 20000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 30000 }
]

// Increase salary by 5000
let updatedUsers = users.map(user => ({
  ...user,
  salary: user.salary + 5000
}))

// Sort high to low
updatedUsers.sort((a, b) => b.salary - a.salary)

console.log(updatedUsers)