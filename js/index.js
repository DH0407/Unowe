document.addEventListener('DOMContentLoaded', function() {
    var mainAreaMenuButton = document.querySelector('.mainAreaMenuButton');
    var menuAreaButton = document.getElementById('menuAreaButton');
    var mainArea = document.getElementById('mainArea');
    var loginZoon = document.querySelector('.loginZoon');
    var loginButton = document.getElementById('loginButton');
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var leftMoveButton = document.getElementById('lefttMoveButton');
    var rightMoveButton = document.getElementById('rightMoveButton');

    var moveAdvertisementCheck = 123;

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
        if(moveAdvertisementCheck == 123){
            img1.classList.add('imgNumber1Move1Right');
            img1.classList.remove('imgNumber1Move2Right');
            img1.classList.remove('imgNumber1Move3Right');
            img1.classList.remove('imgNumber1Move1Left');
            img1.classList.remove('imgNumber1Move2Left');
            img1.classList.remove('imgNumber1Move3Left');

            img2.classList.remove('imgNumber2Move1Right');
            img2.classList.add('imgNumber2Move2Right');
            img2.classList.remove('imgNumber2Move3Right');
            img2.classList.remove('imgNumber2Move1Left');
            img2.classList.remove('imgNumber2Move2Left');
            img2.classList.remove('imgNumber2Move3Left');

            img3.classList.remove('imgNumber3Move1Right');
            img3.classList.remove('imgNumber3Move2Right');
            img3.classList.add('imgNumber3Move3Right');
            img3.classList.remove('imgNumber3Move1Left');
            img3.classList.remove('imgNumber3Move2Left');
            img3.classList.remove('imgNumber3Move3Left');

            moveAdvertisementCheck = 231
        }else if(moveAdvertisementCheck == 231) {
            img1.classList.remove('imgNumber1Move1Right');
            img1.classList.add('imgNumber1Move2Right');
            img1.classList.remove('imgNumber1Move3Right');
            img1.classList.remove('imgNumber1Move1Left');
            img1.classList.remove('imgNumber1Move2Left');
            img1.classList.remove('imgNumber1Move3Left');

            img2.classList.remove('imgNumber2Move1Right');
            img2.classList.remove('imgNumber2Move2Right');
            img2.classList.add('imgNumber2Move3Right');
            img2.classList.remove('imgNumber2Move1Left');
            img2.classList.remove('imgNumber2Move2Left');
            img2.classList.remove('imgNumber2Move3Left');

            img3.classList.add('imgNumber3Move1Right');
            img3.classList.remove('imgNumber3Move2Right');
            img3.classList.remove('imgNumber3Move3Right');
            img3.classList.remove('imgNumber3Move1Left');
            img3.classList.remove('imgNumber3Move2Left');
            img3.classList.remove('imgNumber3Move3Left');

            moveAdvertisementCheck = 312
        }else if(moveAdvertisementCheck == 312) {
            img1.classList.remove('imgNumber1Move1Right');
            img1.classList.remove('imgNumber1Move2Right');
            img1.classList.add('imgNumber1Move3Right');
            img1.classList.remove('imgNumber1Move1Left');
            img1.classList.remove('imgNumber1Move2Left');
            img1.classList.remove('imgNumber1Move3Left');

            img2.classList.add('imgNumber2Move1Right');
            img2.classList.remove('imgNumber2Move2Right');
            img2.classList.remove('imgNumber2Move3Right');
            img2.classList.remove('imgNumber2Move1Left');
            img2.classList.remove('imgNumber2Move2Left');
            img2.classList.remove('imgNumber2Move3Left');

            img3.classList.remove('imgNumber3Move1Right');
            img3.classList.add('imgNumber3Move2Right');
            img3.classList.remove('imgNumber3Move3Right');
            img3.classList.remove('imgNumber3Move1Left');
            img3.classList.remove('imgNumber3Move2Left');
            img3.classList.remove('imgNumber3Move3Left');

            moveAdvertisementCheck = 123
        }
    });

    leftMoveButton.addEventListener('click', function() {
        if(moveAdvertisementCheck == 123){
            img1.classList.remove('imgNumber1Move1Right');
            img1.classList.remove('imgNumber1Move2');
            img1.classList.remove('imgNumber1Move3');
            img1.classList.add('imgNumber1Move1Left');
            img1.classList.remove('imgNumber1Move2Left');
            img1.classList.remove('imgNumber1Move3Left');

            img2.classList.remove('imgNumber2Move1');
            img2.classList.remove('imgNumber2Move2');
            img2.classList.remove('imgNumber2Move3');
            img2.classList.remove('imgNumber2Move1Left');
            img2.classList.add('imgNumber2Move2Left');
            img2.classList.remove('imgNumber2Move3Left');

            img3.classList.remove('imgNumber3Move1');
            img3.classList.remove('imgNumber3Move2');
            img3.classList.remove('imgNumber3Move3');
            img3.classList.remove('imgNumber3Move1Left');
            img3.classList.remove('imgNumber3Move2Left');
            img3.classList.add('imgNumber3Move3Left');

            moveAdvertisementCheck = 312
        }else if(moveAdvertisementCheck == 231) {
            img1.classList.remove('imgNumber1Move1');
            img1.classList.remove('imgNumber1Move2');
            img1.classList.remove('imgNumber1Move3');
            img1.classList.remove('imgNumber1Move1Left');
            img1.classList.add('imgNumber1Move2Left');
            img1.classList.remove('imgNumber1Move3Left');

            img2.classList.remove('imgNumber2Move1');
            img2.classList.remove('imgNumber2Move2');
            img2.classList.remove('imgNumber2Move3');
            img2.classList.remove('imgNumber2Move1Left');
            img2.classList.remove('imgNumber2Move2Left');
            img2.classList.add('imgNumber2Move3Left');

            img3.classList.remove('imgNumber3Move1');
            img3.classList.remove('imgNumber3Move2');
            img3.classList.remove('imgNumber3Move3');
            img3.classList.add('imgNumber3Move1Left');
            img3.classList.remove('imgNumber3Move2Left');
            img3.classList.remove('imgNumber3Move3Left');

            moveAdvertisementCheck = 123
        }else if(moveAdvertisementCheck == 312) {
            img1.classList.remove('imgNumber1Move1');
            img1.classList.remove('imgNumber1Move2');
            img1.classList.remove('imgNumber1Move3');
            img1.classList.remove('imgNumber1Move1Left');
            img1.classList.remove('imgNumber1Move2Left');
            img1.classList.add('imgNumber1Move3Left');

            img2.classList.remove('imgNumber2Move1');
            img2.classList.remove('imgNumber2Move2');
            img2.classList.remove('imgNumber2Move3');
            img2.classList.add('imgNumber2Move1Left');
            img2.classList.remove('imgNumber2Move2Left');
            img2.classList.remove('imgNumber2Move3Left');

            img3.classList.remove('imgNumber3Move1');
            img3.classList.remove('imgNumber3Move2');
            img3.classList.remove('imgNumber3Move3');
            img3.classList.remove('imgNumber3Move1Left');
            img3.classList.add('imgNumber3Move2Left');
            img3.classList.remove('imgNumber3Move3Left');

            moveAdvertisementCheck = 231
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

function loginFirstMsg() {
    event.preventDefault();
    alert('로그인후 이용가능합니다.');
    location.href = './login.html';
}

// 쿠키 값을 가져오는 함수
function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  }
  
  // 페이지로 이동하는 함수
  function redirectToPage() {
    const cookieValue = getCookie('isLoggedIn'); // 여기에 쿠키 이름을 입력하세요
    if (cookieValue === 'true') { // 여기에 이동하고자 하는 쿠키 값과 비교할 값 입력
      window.location.href = './indexLoginO.html'; // 여기에 이동할 페이지 URL 입력
    }
  }
  
  // 페이지 로드 시 실행
  window.onload = redirectToPage;
  
