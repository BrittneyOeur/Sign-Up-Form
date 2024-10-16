const userEmail = document.getElementById("user_email");
const userPhone = document.getElementById("user_phone");
const passwordInput = document.getElementById("user_password");
const confirmPassword = document.getElementById("password_confirm");
const submitButton = document.getElementById("submit_button");

const inputs = document.querySelectorAll("input");
const messageElement = document.getElementById("message");

// Checks if any input is empty
function emptyInput(userInput) {
    const input = userInput.target;

    // If input is empty
    if (input.value.trim() === "") {
        // Set border to black
        input.style.borderColor = "black";
    }

    // If the input is not empty
    else {
        // If valid, the border will be green
        // If invalid, the border will be red
        input.style.borderColor = input.checkValidity() ? "green" : "red";
    }
}

// Checks if the form is completed (the submit button must be clicked)
function formCompletion() {
    // Store inputs into an array
    const inputs = [userEmail, userPhone, passwordInput, confirmPassword];

    // Detect the first invalid input
    const invalidInputs = inputs.find(input => !input.checkValidity());

    // If any invalid input exists
    if (invalidInputs) {
        alert("ERROR: Required field(s) are incorrect.");

        // Iterate through each invalid inputs
        inputs.forEach(input => {
            if(input.value.trim() === "") {
                input.placeholder = "ERROR: Required";
            }
        });
    }

    // If there are not invalid inputs
    else {
        alert("FORM SUBMITTED!");
    }
}

// Iterates through each inputs
inputs.forEach(input => {
    // If the input was initially empty, set border to black
    if (input.value.trim() === "") {
        input.style.borderColor = "black";
    }
    
    // Otherwise, call emptyInput
    input.addEventListener("input", emptyInput)
});

// Prints out message if the passwords are invalid
confirmPassword.addEventListener("input", function() {
    // If confirm password does not equal password
    if (confirmPassword.value !== passwordInput.value) {
        messageElement.textContent = "Password do not match";
        confirmPassword.style.borderColor = "red";
        messageElement.style.color = "red";
    }

    // If match, set message to blank
    else {
        messageElement.textContent = "";
    }
});

submitButton.addEventListener("click", formCompletion);