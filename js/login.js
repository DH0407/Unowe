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
    passwordInput.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
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
    passwordInput.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

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
    passwordInput_check.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
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
            signinText.style.color = '#999999';
            loginText.style.color = 'white';
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
        signinInputArea.style.top = '-38.8%';
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
    var signinInputArea = document.querySelector('.signinInputArea');
    
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
            topRectangle.style.backgroundColor = 'rgb(228, 230, 217)';
            leftRectangle.style.backgroundColor = 'rgb(228, 230, 217)';
            bottomRectangle.style.backgroundColor = 'rgb(228, 230, 217)';
            container.style.backgroundColor = 'rgb(139,168,136)';
            signinTextArea.style.backgroundColor = 'rgb(228, 230, 217)';
            container.style.backgroundColor = 'rgb(139,168,136)';
            loginTextArea.style.backgroundColor = 'rgb(139,168,136)';


            signinTextArea.style.width = '10%';
            signinTextArea.style.top = '44%';

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

// 이메일 전송 버튼 클릭 시 이벤트 처리
document.getElementById('emailCheck').addEventListener('click', function() {
    // 이메일 입력 값 가져오기
    var email = document.getElementById('signinEmailText').value;

    // 서버로 GET 요청 보내기
    fetch(`https://unowe.kro.kr:652/sendEmail?email=${email}`)
        .then(response => response.text())
        .then(data => {
            console.log(data); // 서버에서 보낸 응답 로그
            alert('인증번호가 이메일로 전송되었습니다.'); // 전송 완료 메시지 표시
        })
        .catch(error => {
            console.error('에러 발생:', error); // 에러 메시지 표시
            alert('인증번호 전송에 실패했습니다. 다시 시도해주세요.'); // 전송 실패 메시지 표시
        });
});
