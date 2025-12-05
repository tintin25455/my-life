// 1. Dynamic Greeting Function
function setGreeting() {
    const greetingElement = document.getElementById('dynamic-greeting');
    const now = new Date();
    const hour = now.getHours();
    let message;

    if (hour < 12) {
        message = "Good Morning!";
    } else if (hour < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }

    if (greetingElement) {
        greetingElement.textContent = message;
    }
}

// 2. Dark Mode Toggle Function
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-btn');
    
    // Toggle the class on the body
    body.classList.toggle("dark-mode");

    // Check if dark mode is active to change button text
    if (body.classList.contains("dark-mode")) {
        btn.textContent = "☀️ Light Mode";
    } else {
        btn.textContent = "🌙 Dark Mode";
    }
}

// Run the greeting function as soon as the window loads
window.onload = setGreeting;