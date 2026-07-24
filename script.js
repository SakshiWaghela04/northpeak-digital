const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    alert("Thank you! Your message has been submitted successfully.");

    form.reset();
});