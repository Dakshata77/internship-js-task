SECTION 1 – Real-Time Function Logic

1. Payroll System

function calculateSalary(basicSalary, bonusPercentage) 
{
  let bonus = (basicSalary * bonusPercentage) / 100;
  let grossSalary = basicSalary + bonus;
  let tax = grossSalary * 0.05;
  let finalSalary = grossSalary - tax;

  console.log("Basic Salary:", basicSalary);
  console.log("Bonus:", bonus);
  console.log("Tax (5%):", tax);
  console.log("Final Salary:", finalSalary);

  return finalSalary;
}

2. Student Result System

function generateResult(name, marksArray) 
{
  let total = marksArray.reduce((a, b) => a + b, 0);
  let average = total / marksArray.length;
  let grade;

  if (average >= 80) grade = "A";
  else if (average >= 60) grade = "B";
  else if (average >= 40) grade = "C";
  else grade = "Fail";

  return {
    name,
    total,
    average,
    grade
  };
}

SECTION 2 – Scope & Hoisting

3. Debug This Code
function demo() 
{
  if (true) 
  {
    var a = 10;
    let b = 20;
  }
  console.log(a); // 10
  console.log(b); // Error
}


What will happen?

a prints 10, b throws ReferenceError.

Why?

var is function scoped, let is block scoped.

Fix:

function demo() 
{
  let a, b;
  if (true) {
    a = 10;
    b = 20;
  }
  console.log(a);
  console.log(b);
}

4. Hoisting Analysis

console.log(x); // undefined
var x = 100;

console.log(y); // ReferenceError
let y = 200;


Explanation:

var is hoisted with undefined.
let is hoisted but in temporal dead zone.

SECTION 3 – Callback & Higher Order

5. Order Processing System
function processOrder(orderId, callback) 
{
  console.log("Order Processed:", orderId);
  callback(orderId);
}

function generateInvoice(orderId) 
{
  console.log("Invoice Generated for", orderId);
}

6. Bank Transaction System

function transaction(amount, type, callback) 
{
  let balance = 1000;

  if (type === "deposit") balance += amount;
  else if (type === "withdraw") balance -= amount;

  callback(balance);
}

function sendSMS(balance) 
{
  console.log("SMS Sent. Balance:", balance);
}

SECTION 4 – Currying

7. Dynamic Price Builder
function priceBuilder(basePrice) 
{
  return function(discount) {
    return function(tax) {
      let discounted = basePrice - (basePrice * discount / 100);
      let finalPrice = discounted + (discounted * tax / 100);
      return finalPrice;
    };
  };
}

SECTION 5 – IIFE

8. Secure Company Module

const companyModule = (function () 
{
  let companyCode = "ABC123";

  return 
  {
    getCompanyStatus: function () 
    {
      return "Company Active";
    }
  };
})();

SECTION 6 – Generator

9. Unique Order ID Generator

function* orderGenerator() 
{
  let id = 1000;
  while (true) {
    yield "ORD" + (++id);
  }
}

10. Coupon Spin System

function* couponGenerator() 
{
  yield "10% OFF";
  yield "20% OFF";
  yield "50% OFF";
  yield "No Luck";
  yield "Jackpot";
}

SECTION 7 – Mini Project

const shop = (function () 
{
  let cart = [];

  function addToCart(product, price) {
    cart.push({ product, price });
  }

  function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }

  function applyDiscount(total) {
    return priceBuilder(total)(10)(18);
  }

  function* generateCoupon() {
    yield "SAVE10";
    yield "SAVE20";
  }

  function processPayment(callback) {
    console.log("Payment Processing...");
    callback();
  }

  return {
    addToCart,
    calculateTotal,
    applyDiscount,
    generateCoupon,
    processPayment
  };
})();

Concept Questions:

1.Function Declaration vs Expression
    Declaration is hoisted, expression is not.

2.Higher Order Function
    A function that takes or returns another function.

3.Real-time Generator Example
    Order ID generation, coupon system.

4. Why IIFE?
    To protect variables and avoid global pollution.

5.var vs let vs const
    var – function scope
    let – block scope
    const – block scope, value cannot change