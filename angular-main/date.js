//Dates

//Instance Getter methods
const date = new Date();  // Current date and time

console.log(date.getDate());           // → Day of the month (1-31)
console.log(date.getDay());            // → Day of the week (0=Sun, ..., 6=Sat)
console.log(date.getFullYear());       // → Full year (e.g., 2025)
console.log(date.getHours());          // → Hour (0–23)
console.log(date.getMilliseconds());   // → Milliseconds (0–999)
console.log(date.getMinutes());        // → Minutes (0–59)
console.log(date.getMonth());          // → Month (0=Jan, ..., 11=Dec)
console.log(date.getSeconds());        // → Seconds (0–59)
console.log(date.getTime());           // → Milliseconds since Jan 1, 1970

//UTC Getter methods
console.log(date.getUTCDate());          // → UTC Day of the month
console.log(date.getUTCDay());           // → UTC Day of the week
console.log(date.getUTCFullYear());      // → UTC Year
console.log(date.getUTCHours());         // → UTC Hours
console.log(date.getUTCMilliseconds());  // → UTC Milliseconds
console.log(date.getUTCMinutes());       // → UTC Minutes
console.log(date.getUTCMonth());         // → UTC Month
console.log(date.getUTCSeconds());       // → UTC Seconds


//instance Setter methods
const newDate = new Date();  // current date

newDate.setDate(15);            // Set day of month to 15
newDate.setFullYear(2023);      // Set year to 2023
newDate.setHours(10);           // Set hour to 10 AM
newDate.setMilliseconds(123);   // Set milliseconds
newDate.setMinutes(45);         // Set minutes to 45
newDate.setMonth(5);            // Set month to June (0-indexed)
newDate.setSeconds(30);         // Set seconds to 30
newDate.setTime(1620000000000); // Set timestamp (milliseconds since 1970)
newDate.setUTCDate(20);         // Set UTC day of the month


//Static Methods
console.log(Date.now())  //-> Current timestamp in ms
console.log(Date.parse("2025-01-10"))  //-> Parse date string -> timestamp (ms)

const parseDate = new Date(Date.parse("2025-01-10"));
console.log(parseDate.toString())


// Practice
const today = new Date();

//Get date part
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDay();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const milli = today.getMilliseconds();

console.log(`Date today: ${today}`)