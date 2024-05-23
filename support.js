const email_opening = document.querySelectorAll(".email-box-unopened");

email_opening.forEach((email) => {
    email.addEventListener('click', () => {
        email.classList.remove("email-box-unopened");
        email.classList.add("email-box-opened");

        const emailIcon = email.querySelector(".email-icon");
        emailIcon.src = "/sidebar/email-aperta.png";
    });
});