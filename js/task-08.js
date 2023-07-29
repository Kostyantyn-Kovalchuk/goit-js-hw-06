const loginFormElement = document.querySelector(".login-form");

loginFormElement.addEventListener("submit", handleEvent);

function handleEvent(event) {
    event.preventDefault();
    let userData = {};
    
    if (loginFormElement.elements.email.value === "" || loginFormElement.elements.password.value === "") {
        alert("WARNING: All fields must be filled in.");
    } else {
        userData.email = loginFormElement.elements.email.value;
        userData.password = loginFormElement.elements.password.value;
        console.log(userData);
        event.currentTarget.reset();
    };
};
