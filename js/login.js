    // 유효성검사


        //패스워드
        function togglePasswordVisibility() {
            var passwordInput = document.getElementById("password");

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }

            applyStylesToPasswordInput();
        }
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