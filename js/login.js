// 유효성검사

//패스워드
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("loginPassword");
    var passwordImage = document.querySelector("#toggle-loginPassword-visibility .passwordOffIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordImage.src = "../img/passwordOn.webp";
    } else {
        passwordInput.type = "password";
        passwordImage.src = "../img/passwordOff.webp";
    }

    applyStylesToPasswordInput();
}

function applyStylesToPasswordInput() {
    var passwordInput = document.getElementById("loginPassword");

    passwordInput.style.position = "absolute";
    passwordInput.style.top = "55%";
    passwordInput.style.width = "85.5%";
    passwordInput.style.padding = "2.5%";
    passwordInput.style.border = "none";
    passwordInput.style.borderRadius = "5px";
    passwordInput.style.textAlign = "center";
    passwordInput.style.fontSize = "1.3em";
    passwordInput.style.backgroundColor = "rgba(255, 255, 255, 0.4)";

    passwordInput.placeholder.style.textAlign = "center";
    passwordInput.placeholder.style.fontSize = "76.923%";
}

document.addEventListener('DOMContentLoaded', function () {
    var signinTextArea = document.querySelector('.signinTextArea');
    var loginTextArea = document.querySelector('.loginTextArea');
    var isLoginAreaClicked = false;

    signinTextArea.addEventListener('click', function () {
        if (!isLoginAreaClicked) {
            toggleTextAreaPosition();
        }
    });

    function toggleTextAreaPosition() {
        loginTextArea.classList.toggle('moveDown');
        signinTextArea.classList.toggle('moveUp');
    }
    loginTextArea.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var signinTextArea = document.querySelector('.signinTextArea');
    var topRectangle = document.querySelector('.topRectangle');
    var bottomRectangle = document.querySelector('.bottomRectangle');

    signinTextArea.addEventListener('click', function () {
        toggleRectanglesHeight();
    });

    function toggleRectanglesHeight() {
        if (signinTextArea.classList.contains('moveUp')) {
            // signTextArea가 위에 있을 때
            topRectangle.style.height = '46%';
            bottomRectangle.style.height = '41%';
        } else {
            // signTextArea가 아래에 있을 때
            topRectangle.style.height = '33%';
            bottomRectangle.style.height = '54%';
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var signinTextArea = document.querySelector('.signinTextArea');
    var signinText = document.querySelector('.signinText');
    var loginText = document.querySelector('.loginText');

    signinTextArea.addEventListener('click', function () {
        toggleTextColors();
    });

    function toggleTextColors() {
        if (signinTextArea.classList.contains('moveUp')) {
            signinText.style.color = 'white';
            loginText.style.color = '#999999';
        } else {
            signinText.style.color = '';
            loginText.style.color = '';
        }
    }
});

const signinTextArea = document.querySelector('.signinTextArea');

function updateVisibility() {
    const loginInputArea = document.querySelector('.loginInputArea');
    const signinInputArea = document.querySelector('.signinInputArea');

    if (signinTextArea.classList.contains('moveUp')) {
        loginInputArea.style.display = 'none';
        signinInputArea.style.display = 'block';
    } else {
        loginInputArea.style.display = 'block';
        signinInputArea.style.display = 'none';
    }
}

// 페이지 로드 시 초기 상태 업데이트
updateVisibility();

// signinTextArea의 클래스가 변경될 때마다 상태 업데이트
signinTextArea.addEventListener('transitionend', updateVisibility);

const signinInputArea = document.querySelector('.signinInputArea');
const loginImg = document.querySelector('.loginImg');

function updateSigninInputPosition() {
    if (signinTextArea.classList.contains('moveUp')) {
        signinInputArea.style.top = '5%';
        loginImg.style.display = 'none';
    } else {
        loginImg.style.display = 'block';
    }
}

// 페이지 로드 시 초기 위치 설정
updateSigninInputPosition();

// signinTextArea의 클래스가 변경될 때마다 위치 업데이트
signinTextArea.addEventListener('transitionend', updateSigninInputPosition);
