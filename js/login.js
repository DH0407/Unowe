function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordImage = document.getElementById("toggle-password-visibility");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordImage.src = "../img/passwordOn.png";
    } else {
        passwordInput.type = "password";
        passwordImage.src = "../img/passwordOff.png";
    }
}