// Alert when "Buy Now" button is clicked
document.querySelectorAll(".snack button").forEach(button => {
    button.addEventListener("click", function(event) {
        // Stop the event from propagating further
        event.stopPropagation();
        alert("Item added to cart!");
    });
});

// Form submission alert
document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (!name || !email) {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
        event.preventDefault();  // Prevent the form from actually submitting for demonstration purposes
    }
});
