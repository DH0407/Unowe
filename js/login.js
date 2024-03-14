// 유효성검사

//패스워드
// 여긴 로그인 아이콘 토글
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("loginPassword");
    var passwordImage = document.querySelector("#toggle-loginPassword-visibility .loginPasswordOffIcon");

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

// 여긴 회원가입 아이콘 토글
function toggleSigninPasswordVisibility() {
    var passwordInput = document.getElementById("signinPassword");
    var passwordInput_check = document.getElementById("passwordCheck");
    var passwordImage = document.querySelector("#toggle-signinPassword-visibility .signinPasswordOffIcon");
    var passwordImage_check = document.querySelector("#toggle-signinPasswordCheck-visibility .signinPasswordOffIcon-Check");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordImage.src = "../img/passwordOn.webp";
    } else {
        passwordInput.type = "password";
        passwordImage.src = "../img/passwordOff.webp";
    }

    if (passwordInput_check.type === "password") {
        passwordInput_check.type = "text";
        passwordImage_check.src = "../img/passwordOn.webp";
    } else {
        passwordInput_check.type = "password";
        passwordImage_check.src = "../img/passwordOff.webp";
    }

    applyStylesToSigninPasswordInput();
}

function applyStylesToSigninPasswordInput() {
    var passwordInput = document.getElementById("signinPassword");
    var passwordInput_check = document.getElementById("passwordCheck");

    passwordInput.style.position = "absolute";
    passwordInput.style.top = "43%";
    passwordInput.style.left = "5%";
    passwordInput.style.width = "85.5%";
    passwordInput.style.padding = "2.5%";
    passwordInput.style.border = "none";
    passwordInput.style.borderRadius = "5px";
    passwordInput.style.textAlign = "center";
    passwordInput.style.fontSize = "1.3em";
    passwordInput.style.backgroundColor = "rgba(255, 255, 255, 0.4)";

    passwordInput_check.style.position = "absolute";
    passwordInput_check.style.top = "61%";
    passwordInput_check.style.left = "5%";
    passwordInput_check.style.width = "85.5%";
    passwordInput_check.style.padding = "2.5%";
    passwordInput_check.style.border = "none";
    passwordInput_check.style.borderRadius = "5px";
    passwordInput_check.style.textAlign = "center";
    passwordInput_check.style.fontSize = "1.3em";
    passwordInput_check.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
}
//---------------------------
// 여기부턴 애니메이션
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
        loginInputArea.style.opacity = '0'; // 투명도를 0으로 설정하여 요소를 숨김
        signinInputArea.style.opacity = '1';
    } else {
        loginInputArea.style.opacity = '1'; // 투명도를 0으로 설정하여 요소를 숨김
        signinInputArea.style.opacity = '0';
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
        loginImg.style.opacity = '0';
    } else {
        loginImg.style.opacity = '1';
    }
}

// 페이지 로드 시 초기 위치 설정
updateSigninInputPosition();

// signinTextArea의 클래스가 변경될 때마다 위치 업데이트
signinTextArea.addEventListener('transitionend', updateSigninInputPosition);

const signinInputAreaScrollbar = document.querySelector('.signinInputArea::-webkit-scrollbar');

// signinInputArea의 opacity가 변경될 때 스크롤바 투명도 조절
signinInputArea.addEventListener('transitionend', updateScrollbarOpacity);

function updateScrollbarOpacity() {
    if (signinInputArea.style.opacity === '1') {
        // 스크롤바가 보이도록 설정
        signinInputAreaScrollbar.style.opacity = '1';
        // 1초 뒤에 스크롤바를 다시 투명하게 만듦
        setTimeout(() => {
            signinInputAreaScrollbar.style.opacity = '0';
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var signinTextArea = document.querySelector('.signinTextArea');
    var loginTextArea = document.querySelector('.loginTextArea')
    var topRectangle = document.querySelector('.topRectangle');
    var leftRectangle = document.querySelector('.leftRectangle');
    var bottomRectangle = document.querySelector('.bottomRectangle');
    var container = document.querySelector('.container');
    var signinInputArea = document.querySelector('.signInputArea');
    
    signinTextArea.addEventListener('click', function () {
        toggleBackground();
    });
    
    function toggleBackground() {
        if (signinTextArea.classList.contains('moveUp')) {
            topRectangle.style.transition = 'background-color 1s ease';
            leftRectangle.style.transition = 'background-color 1s ease';
            bottomRectangle.style.transition = 'background-color 1s ease';
            container.style.transition = 'background-color 1s ease';
            signinTextArea.style.transition = 'background-color 1s ease';
            loginTextArea.style.transition = 'background-color 1s ease';

            // signTextArea가 위에 있을 때
            topRectangle.style.backgroundColor = '#E37B58';
            leftRectangle.style.backgroundColor = '#E37B58';
            bottomRectangle.style.backgroundColor = '#E37B58';
            container.style.backgroundColor = '#E37B58';
            signinTextArea.style.backgroundColor = '#E37B58';
            container.style.backgroundColor = '#F1ECE2';
            loginTextArea.style.backgroundColor = '#F1ECE2';

            signinTextArea.style.width = '10%';
            signinTextArea.style.top = '44%';

            signinInputArea.style.backgroundColor = 'rgba(227, 123, 88, 0.4)';


        } else {
            // signTextArea가 아래에 있을 때
            topRectangle.style.transition = 'background-color 1s ease';
            leftRectangle.style.transition = 'background-color 1s ease';
            bottomRectangle.style.transition = 'background-color 1s ease';
            container.style.transition = 'background-color 1s ease';
            signinTextArea.style.transition = 'background-color 1s ease';
            loginTextArea.style.transition = 'background-color 1s ease';

            topRectangle.style.backgroundColor = '#F1ECE2';
            leftRectangle.style.backgroundColor = '#F1ECE2';
            bottomRectangle.style.backgroundColor = '#F1ECE2';
            container.style.backgroundColor = '#E37B58';
            loginTextArea.style.backgroundColor = '#E37B58';
            signinTextArea.style.backgroundColor = '#F1ECE2';
            signinTextArea.style.top = '48%';
        }
    }
});
