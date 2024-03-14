document.addEventListener('DOMContentLoaded', function() {
    var mainAreaMenuButton = document.querySelector('.mainAreaMenuButton');
    var menuAreaButton = document.getElementById('menuAreaButton');
    var mainArea = document.getElementById('mainArea');
    var loginZoon = document.querySelector('.loginZoon');
    var loginButton = document.getElementById('loginButton');
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var lefttMoveButton = document.getElementById('lefttMoveButton');
    var rightMoveButton = document.getElementById('rightMoveButton');

    var moveAdvertisementCheck = 1;

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

    rightMoveButton.addEventListener('click', function() {
        if(moveAdvertisementCheck == 1){
            img1.classList.add('imgNumber1Move1');
            img1.classList.remove('imgNumber1Move2');
            img1.classList.remove('imgNumber1Move3');

            img2.classList.remove('imgNumber2Move1');
            img2.classList.add('imgNumber2Move2');
            img2.classList.remove('imgNumber2Move3');

            img3.classList.remove('imgNumber3Move1');
            img3.classList.remove('imgNumber3Move2');
            img3.classList.add('imgNumber3Move3');

            moveAdvertisementCheck = 2
        }else if(moveAdvertisementCheck == 2) {
            img1.classList.remove('imgNumber1Move1');
            img1.classList.add('imgNumber1Move2');
            img1.classList.remove('imgNumber1Move3');

            img2.classList.remove('imgNumber2Move1');
            img2.classList.remove('imgNumber2Move2');
            img2.classList.add('imgNumber2Move3');

            img3.classList.add('imgNumber3Move1');
            img3.classList.remove('imgNumber3Move2');
            img3.classList.remove('imgNumber3Move3');

            moveAdvertisementCheck = 3
        }else if(moveAdvertisementCheck == 3) {
            img1.classList.remove('imgNumber1Move1');
            img1.classList.remove('imgNumber1Move2');
            img1.classList.add('imgNumber1Move3');

            img2.classList.add('imgNumber2Move1');
            img2.classList.remove('imgNumber2Move2');
            img2.classList.remove('imgNumber2Move3');

            img3.classList.remove('imgNumber3Move1');
            img3.classList.add('imgNumber3Move2');
            img3.classList.remove('imgNumber3Move3');

            moveAdvertisementCheck = 1
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
    var loginCheck = getCookies("isLoggedIn");

    if (loginCheck == "true") {
        location.href = '../indexLoginO.html';
    }
}
