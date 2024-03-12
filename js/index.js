//애니메이션 js코드
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
document.addEventListener("DOMContentLoaded", function() {
    // 페이지가 로드될 때 실행되는 코드 작성
    var checkLogin = getCookie('email');
    if (checkLogin) {
        location.href = '../indexLoginO.html'
    }
});

// 특정 이름의 쿠키 값을 가져오는 함수
function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // 쿠키 이름과 값 분리
        var parts = cookie.split('=');
        if (parts[0] === name) {
            return decodeURIComponent(parts[1]);
        }
    }
    return null;
}