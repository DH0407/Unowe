document.addEventListener('DOMContentLoaded', function() {
    var mainAreaMenuButton = document.querySelector('.mainAreaMenuButton');
    var menuAreaButton = document.getElementById('menuAreaButton');
    var mainArea = document.getElementById('mainArea');
    var loginZoon = document.querySelector('.loginZoon');
    var loginButton = document.getElementById('loginButton')

    mainAreaMenuButton.addEventListener('click', function() {
        mainArea.classList.add('mainAreaMoveRight');
        mainArea.classList.remove('mainAreaMoveLeft');
        mainAreaMenuButton.classList.add('menuAreaMenuButtonHidden');
        loginZoon.classList.add('loginZoonMoveLeft');
        loginZoon.classList.remove('loginZoonMoveRight');    
    });

    menuAreaButton.addEventListener('click', function() {
        mainArea.classList.remove('mainAreaMoveRight');
        mainArea.classList.add('mainAreaMoveLeft');
        mainAreaMenuButton.classList.remove('menuAreaMenuButtonHidden');    
        loginZoon.classList.add('loginZoonMoveRight');
        loginZoon.classList.remove('ClientInformationMoveUp');
        loginZoon.classList.remove('ClientInformationMoveDown');
        loginButton.classList.remove('loginZoonMoveLeft');
    });
});
//쿠키 관련 js코드
function getCookies(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
    var loginCheck = getCookies("isLoggedIn");

    if (loginCheck == "true") {
        location.href = '../indexLoginO.html';
    }
}
