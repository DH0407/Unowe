// 페이지가 로드될 때 실행되는 함수
document.addEventListener("DOMContentLoaded", function() {
    console.log("페이지가 로드되었습니다.");

    // 로그인 버튼에 이벤트 리스너를 추가하여 폼 유효성 검사를 수행합니다.
    var loginButton = document.querySelector("button[type='button']");
    if (loginButton) {
        loginButton.addEventListener("click", function() {
            var userEmail = document.getElementById("email").value;
            alert(userEmail);
            window.ClientEmail = userEmail;
            f1.submit();
        });
    }

    // 패스워드 표시 여부를 전환하는 함수
    function togglePasswordVisibility() {
        var passwordInput = document.getElementById("password");
        var passwordImage = document.querySelector("#toggle-password-visibility .passwordOffIcon");

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordImage.src = "../img/passwordOn.webp";
        } else {
            passwordInput.type = "password";
            passwordImage.src = "../img/passwordOff.webp";
        }

        applyStylesToPasswordInput();
    }

    // 패스워드 입력 필드에 스타일을 적용하는 함수
    function applyStylesToPasswordInput() {
        var passwordInput = document.getElementById("password");

        passwordInput.style.position = "absolute";
        passwordInput.style.top = "55%";
        passwordInput.style.width = "85.5%";
        passwordInput.style.padding =  "2.5%";
        passwordInput.style.border =  "none";
        passwordInput.style.borderRadius = "5px";
        passwordInput.style.textAlign = "center";
        passwordInput.style.fontSize = "1.3em";
        passwordInput.style.backgroundColor = "rgba(255, 255, 255, 0.4)";

        passwordInput.placeholder.style.textAlign = "center";
        passwordInput.placeholder.style.fontSize = "76.923%";
    }
});
