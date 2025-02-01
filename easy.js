document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li");
    const requestButtons = document.querySelectorAll("button");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            alert(`You clicked on ${this.textContent}`);
        });
    });

    requestButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Request Invite button clicked");
        });
    });
});