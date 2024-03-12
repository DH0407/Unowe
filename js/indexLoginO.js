//애니메이션 관련 js코드
document.addEventListener('DOMContentLoaded', function() {
    var mainAreaMenuButton = document.querySelector('.mainAreaMenuButton');
    var menuAreaButton = document.getElementById('menuAreaButton');
    var mainArea = document.getElementById('mainArea');
    var ClientInformationZoon = document.querySelector('.ClientInformationZoon');
    var readMoreButton = document.getElementById('readMoreButton')
    var logOutButtonZoon = document.getElementById('logOutButtonZoon')


    mainAreaMenuButton.addEventListener('click', function() {
        mainArea.classList.add('mainAreaMoveRight');
        mainArea.classList.remove('mainAreaMoveLeft');

        mainAreaMenuButton.classList.add('menuAreaMenuButtonHidden');

        ClientInformationZoon.classList.add('ClientInformationMoveLeft');
        ClientInformationZoon.classList.remove('ClientInformationMoveRight');
        ClientInformationZoon.classList.remove('ClientInformationMoveUpRight');
        
        logOutButtonZoon.classList.add('logOutButtonZoonHidden');
        logOutButtonZoon.classList.add('logOutButtonZoonHiddenAniOn');
        logOutButtonZoon.classList.remove('logOutButtonZoonHiddenAniOff');
        
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
        ClientInformationZoon.classList.remove('ClientInformationMoveLeft');
        mainAreaMenuButton.classList.remove('menuAreaMenuButtonHidden');

        logOutButtonZoon.classList.remove('logOutButtonZoonHidden');
        logOutButtonZoon.classList.remove('logOutButtonZoonHiddenAniOn');
        logOutButtonZoon.classList.add('logOutButtonZoonHiddenAniOff');
        
            
    });

    readMoreButton.addEventListener('click', function() {
            switch (readMoreButton.id) {
                case 'readMoreButton':
                    readMoreButton.id = 'readMoreOff';
                    ClientInformationZoon.classList.add('ClientInformationMoveDown');
                    ClientInformationZoon.classList.remove('ClientInformationMoveUp');

                    logOutButtonZoon.classList.remove('logOutButtonZoonHidden');
                    logOutButtonZoon.classList.remove('logOutButtonZoonHiddenAniOn');
                    logOutButtonZoon.classList.add('logOutButtonZoonHiddenAniOff');

                    console.log('On');
                    break;
                case 'readMoreOff':
                    readMoreButton.id = 'readMoreButton';
                    ClientInformationZoon.classList.add('ClientInformationMoveUp');
                    ClientInformationZoon.classList.remove('ClientInformationMoveDown');

                    logOutButtonZoon.classList.add('logOutButtonZoonHidden');
                    logOutButtonZoon.classList.add('logOutButtonZoonHiddenAniOn');
                     logOutButtonZoon.classList.remove('logOutButtonZoonHiddenAniOff');
                    
                    console.log('Off');
                    break;
            }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // 페이지가 로드될 때 실행되는 코드 작성
    var username = getCookie('email');
    if (username == 'false') {
        location.href = '../index.html'
    }
    let ClientEmail = window.ClientEmail;
    console.log(ClientEmail);
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
