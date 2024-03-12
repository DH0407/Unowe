//애니메이션 관련 js코드
document.addEventListener('DOMContentLoaded', function() {
    var mainAreaMenuButton = document.querySelector('.mainAreaMenuButton');
    var menuAreaButton = document.getElementById('menuAreaButton');
    var mainArea = document.getElementById('mainArea');
    var ClientInformationZoon = document.querySelector('.ClientInformationZoon');
    var readMoreButton = document.getElementById('readMoreButton');
    var logOutButtonZoon = document.getElementById('logOutButtonZoon');

    mainAreaMenuButton.addEventListener('click', function() {
        mainArea.classList.add('mainAreaMoveRight');
        mainArea.classList.remove('mainAreaMoveLeft');
        mainAreaMenuButton.classList.add('menuAreaMenuButtonHidden');
        //사용자 정보창 애니메이션
        ClientInformationZoon.classList.add('ClientInformationMoveLeft');
        ClientInformationZoon.classList.remove('ClientInformationMoveRight');
        ClientInformationZoon.classList.remove('ClientInformationMoveUpRight');
        //로그 아웃 버튼 애니메이션
        logOutButtonZoon.classList.add('logOutButtonZoonHidden');
        logOutButtonZoon.classList.add('logOutButtonZoonHidden'); 
        logOutButtonZoon.classList.add('logOutButtonZoonHidden');    
    });

    menuAreaButton.addEventListener('click', function() {
        if(readMoreButton.id == 'readMoreButton') {
            ClientInformationZoon.classList.add('ClientInformationMoveRight');
            ClientInformationZoon.classList.remove('ClientInformationMoveUpRight');
            ClientInformationZoon.classList.remove('ClientInformationMoveUp');
        }else if(readMoreButton.id == 'readMoreOff') {
            ClientInformationZoon.classList.add('ClientInformationMoveUpRight');
            ClientInformationZoon.classList.remove('ClientInformationMoveDown');
            readMoreButton.id = 'readMoreButton';
        }
        mainArea.classList.remove('mainAreaMoveRight');
        mainArea.classList.add('mainAreaMoveLeft');
        mainAreaMenuButton.classList.remove('menuAreaMenuButtonHidden');
        ClientInformationZoon.classList.remove('ClientInformationMoveLeft');
        logOutButtonZoon.classList.remove('logOutButtonZoonHidden');
    });

    readMoreButton.addEventListener('click', function() {
            switch (readMoreButton.id) {
                case 'readMoreButton':
                    readMoreButton.id = 'readMoreOff';
                    ClientInformationZoon.classList.add('ClientInformationMoveDown');
                    ClientInformationZoon.classList.remove('ClientInformationMoveUp');
                    console.log('On');
                    break;
                case 'readMoreOff':
                    readMoreButton.id = 'readMoreButton';
                    ClientInformationZoon.classList.add('ClientInformationMoveUp');
                    ClientInformationZoon.classList.remove('ClientInformationMoveDown');
                    console.log('Off');
                    break;
            }
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
    // 여기에 실행하고자 하는 코드를 추가
    var loginCheck = getCookies("isLoggedIn");

    if (loginCheck == "false") {
        location.href = '../index.html';
    }

    
}