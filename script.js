// script.js

// Handle login form submission
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Simple hardcoded credentials for demonstration
    if (username === "admin" && password === "password123") {
    // Redirect to admin dashboard
    window.location.href = "admin_dashboard.html";
    } else {
    // Display error message
    document.getElementById("error-message").textContent = "Invalid username or password!";
    }
    });
    
    // Logout function
    function logout() {
    alert('You have logged out!');
    window.location.href = 'admin_login.html'; // Redirect to login page
    }
    
    // Function to redirect to Add Product page
    function addProduct() {
    window.location.href = 'add_product.html';
    }
    
    // Function to redirect to View Customers page
    function viewCustomers() {
    window.location.href = 'view_customers.html';
    }
    
    // Function to redirect to View Orders page
    function viewOrders() {
    window.location.href = 'view_orders.html';
    }