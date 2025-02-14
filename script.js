// Change background color when Buy Now button is clicked
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = "#ffcccb";
        alert("Item added to cart!");
    });
});
