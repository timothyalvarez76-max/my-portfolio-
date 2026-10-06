// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you for contacting me!");

    contactForm.reset();

});


// Current Year
const year = new Date().getFullYear();

console.log("Portfolio loaded successfully - " + year);