SECTION 1 – Date Object Tasks

Task 1: Custom Digital Clock

<p id="clock"></p>

<script>
function updateClock() 
{
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  document.getElementById("clock").innerHTML =
    "Current Time: " + h + " : " + m + " : " + s;
}

setInterval(updateClock, 1000);
</script>

Task 2: Find Current Day Name

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = new Date().getDay();

console.log("Today is " + days[today]);

Task 3: Age Calculator

let birthYear = 2003;
let currentYear = new Date().getFullYear();

console.log("Your age is " + (currentYear - birthYear));

Task 4: Create Specific Date

let date = new Date();

date.setFullYear(2020);
date.setMonth(7);     // August (0 based)
date.setDate(15);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);

console.log(date.toLocaleString());

SECTION 2 – setTimeout & setInterval

Task 5: Delayed Message
setTimeout(() => {
  console.log("Welcome Naveen");
}, 3000);

Task 6: Stop Interval After 5 Seconds

let count = 1;

let interval = setInterval(() => {
  console.log(count);
  count++;

  if (count > 5) {
    clearInterval(interval);
    console.log("Stopped");
  }
}, 1000);

SECTION 3 – Promise Practice

Task 7: Simple Promise

let num = 15;

let checkNumber = new Promise((resolve, reject) => {
  if (num > 10)
    resolve("Valid number");
  else
    reject("Invalid number");
});

checkNumber
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("Done"));

SECTION 4 – Fetch API Task

Task 8: Fetch Product Prices

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    data.forEach(product => {
      console.log("Product: " + product.title);
      console.log("Price: " + product.price);
      console.log("-----------------");
    });
  })
  .catch(err => console.log(err));

SECTION 5 – Execution Order

Code
function one(){
  console.log("one");
}

function two(){
  console.log("two");
}

function three(){
  console.log("three");
}

one()
setTimeout(two,0)
three()

Output
one
three
two

Explanation

one() runs first (synchronous).

setTimeout(two,0) goes to the event queue.

three() runs next.

Finally, the event loop executes two().