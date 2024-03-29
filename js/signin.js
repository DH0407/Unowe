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

function togglePasswordCheckVisibility() {
    var passwordCheckInput = document.getElementById("passwordCheck");
    var passwordCheckImage = document.getElementById("toggle-passwordCheck-visibility");

    if (passwordCheckInput.type === "password") {
        passwordCheckInput.type = "text";
        passwordCheckImage.src = "../img/passwordOn.png";
    } else {
        passwordCheckInput.type = "password";
        passwordCheckImage.src = "../img/passwordOff.png";
    }
}

document.querySelector('.allCheck').addEventListener('click', function() {
    var checkboxes = document.querySelectorAll('.utilizationCheck, .individualCheck, .marketingCheck');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = document.querySelector('.allCheck').checked;
    });
});

var checkboxes = document.querySelectorAll('.utilizationCheck, .individualCheck, .marketingCheck');

function updateAllCheck() {
    var allChecked = true;
    checkboxes.forEach(function(checkbox) {
        if (!checkbox.checked) {
            allChecked = false;
        }
    });

    document.querySelector('.allCheck').checked = allChecked;
}

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', updateAllCheck);
});

document.querySelector('.allCheck').addEventListener('change', function() {
    var allCheckCheckbox = this;
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = allCheckCheckbox.checked;
    });
});
