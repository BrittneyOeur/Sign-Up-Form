const userEmail = document.getElementById("user_email");
const userPhone = document.getElementById("user_phone");
const passwordInput = document.getElementById("user_password");
const confirmPassword = document.getElementById("password_confirm");
const submitButton = document.getElementById("submit_button");

const inputs = document.querySelectorAll("input");
const messageElement = document.getElementById("message");

function emptyInput(userInput) {
    const input = userInput.target;
    if (input.value.trim() === "") {
        input.style.borderColor = "black";
    }

    else {
        input.style.borderColor = input.checkValidity() ? "green" : "red";
    }
}

function formCompletion() {
    const inputs = [userEmail, userPhone, passwordInput, confirmPassword];
    const invalidInputs = inputs.find(input => !input.checkValidity());

    if (invalidInputs) {
        alert("ERROR: Required field(s) are incorrect.");

        inputs.forEach(input => {
            if(input.value.trim() === "") {
                input.placeholder = "ERROR: Required";
            }
        });
    }

    else {
        alert("FORM SUBMITTED!");
    }
}

inputs.forEach(input => {
    if (input.value.trim() === "") {
        input.style.borderColor = "black";
    }
    
    input.addEventListener("input", emptyInput)
});

confirmPassword.addEventListener("input", function() {
    if (confirmPassword.value !== passwordInput.value) {
        messageElement.textContent = "Password do not match";
        confirmPassword.style.borderColor = "red";
        messageElement.style.color = "red";
    }

    else {
        messageElement.textContent = "";
    }
});


submitButton.addEventListener("click", formCompletion);