document.addEventListener("DOMContentLoaded", function () {
    const contactToggleBtn = document.getElementById("contactToggle");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    contactToggleBtn.addEventListener("click", function () {
        email.classList.toggle("hidden");
        phone.classList.toggle("hidden");
    });
});
