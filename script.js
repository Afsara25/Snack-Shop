// Change background color when Buy Now button is clicked
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});
