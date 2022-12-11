// // Import stylesheets
// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const timestamp = new Date().getTime();
console.log(timestamp); // 👉️ 1642664853302

const date = new Date(timestamp);
console.log(date); // 👉️ Thu Jan 20 2022 09:48:00

console.log(date.toString()); // 👉️ "Thu Jan 20 2022 09:48:00"

// 👇️ Format date and time using different locales
console.log(date.toLocaleString('en-US')); // 👉️ "1/20/2022, 9:50:15 AM"
console.log(date.toLocaleString('en-GB')); // 👉️ "20/01/2022 09:50:15"
console.log(date.toLocaleString('sv')); // 👉️ "2022-01-20 09:50:15"

// 👇️ Display only date
console.log(date.toLocaleDateString('en-US')); // 👉️ "1/20/2022"

// 👇️ Display only time
console.log(date.toLocaleTimeString('en-US')); // 👉️ "9:50:15 AM"
