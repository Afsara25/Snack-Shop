// Change background color when Buy Now button is clicked
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});

document.querySelector("form").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});
