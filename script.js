// ==========================
// Part 1: Variables & Conditionals
// ==========================
let username = "Guest";
let age = 20;

if(age >= 18) {
    console.log(`${username} is an adult.`);
} else {
    console.log(`${username} is not an adult.`);
}

// ==========================
// Part 2: Custom Functions
// ==========================

// Function 1: greet user
function greetUser(name) {
    alert(`Welcome to the page, ${name}!`);
}

// Function 2: validate password match
function validatePassword(password, confirmPassword) {
    if(password === confirmPassword) {
        return true;
    } else {
        alert("Passwords do not match!");
        return false;
    }
}

// ==========================
// Part 3: Loops
// ==========================

// Loop 1: For loop to list numbers
for(let i = 1; i <= 5; i++) {
    console.log(`Number ${i}`);
}

// Loop 2: Array iteration with forEach
const features = ["HTML5", "CSS3", "JavaScript"];
features.forEach(feature => {
    console.log(`Feature: ${feature}`);
});

// ==========================
// Part 4: DOM Interactions
// ==========================

// Interaction 1: Change page subtitle
const subtitle = document.querySelector(".subtitle");
subtitle.textContent = "Enhanced HTML5 Page with JS Features";

// Interaction 2: Add new list item dynamically
const featuresList = document.getElementById("features-list");
const newItem = document.createElement("li");
newItem.textContent = "Dynamic DOM Manipulation";
featuresList.appendChild(newItem);

// Interaction 3: Form submission handling
const form = document.getElementById("registration-form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual submission
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if(validatePassword(password, confirmPassword)) {
        alert(`Thank you for registering, ${document.getElementById("fullname").value}!`);
        form.reset();
    }
});
