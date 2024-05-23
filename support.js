console.log("ok");

const email_opening = document.getElementByClassName("email-box-unopened");
const icon_path = document.getElementById("email_icon");
icon_path.src = "/sidebar/email-aperta.png";

email_opening.forEach(email => {
    email.addEventListener('click', () => {
        email.className("")
        email_icon_path = icon_path;
        email.className("email-box-opened")
    })
});