document.addEventListener('DOMContentLoaded', function() {
    var mainAreaMenuButton = document.querySelector('.mainAreaMenuButton');
    var menuAreaButton = document.getElementById('menuAreaButton');
    var mainArea = document.getElementById('mainArea');
    var ClientInformationZoon = document.querySelector('.ClientInformationZoon');
    var readMoreButton = document.getElementById('readMoreButton');
    var logOutButton = document.getElementById('logOutButton'); // 수정된 부분: 로그아웃 버튼 id

    mainAreaMenuButton.addEventListener('click', function() {
        mainArea.classList.add('mainAreaMoveRight');
        mainArea.classList.remove('mainAreaMoveLeft');
        mainAreaMenuButton.classList.add('menuAreaMenuButtonHidden');
        // 사용자 정보창 애니메이션
        ClientInformationZoon.classList.add('ClientInformationMoveLeft');
        ClientInformationZoon.classList.remove('ClientInformationMoveRight');
        ClientInformationZoon.classList.remove('ClientInformationMoveUpRight');
        // 로그 아웃 버튼 애니메이션
        logOutButton.classList.add('logOutButtonHidden');
        logOutButton.classList.add('logOutButtonHiddenAniOff');
        logOutButton.classList.remove('logOutButtonHiddenAniOn');
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

        logOutButton.classList.add('logOutButtonHiddenAniOff');
        logOutButton.classList.remove('logOutButtonHidden');
        logOutButton.classList.remove('logOutButtonHidden');
    });

    readMoreButton.addEventListener('click', function() {
            switch (readMoreButton.id) {
                case 'readMoreButton':
                    readMoreButton.id = 'readMoreOff';
                    ClientInformationZoon.classList.add('ClientInformationMoveDown');
                    ClientInformationZoon.classList.remove('ClientInformationMoveUp');

                    logOutButton.classList.add('logOutButtonHiddenAniOn');
                    logOutButton.classList.remove('logOutButtonHidden');
                    logOutButton.classList.remove('logOutButtonHiddenAniOff');
                    console.log('On');
                    break;
                case 'readMoreOff':
                    readMoreButton.id = 'readMoreButton';
                    ClientInformationZoon.classList.add('ClientInformationMoveUp');
                    ClientInformationZoon.classList.remove('ClientInformationMoveDown');

                    logOutButton.classList.add('logOutButtonHidden');
                    logOutButton.classList.add('logOutButtonHiddenAniOff');
                    logOutButton.classList.remove('logOutButtonHiddenAniOn');
                    console.log('Off');
                    break;
            }
    });

    // 로그아웃 버튼 클릭 이벤트 처리
    logOutButton.addEventListener('click', function() {
        // 쿠키 삭제
        document.cookie = "isLoggedIn=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // 로그인 페이지로 리디렉션
        location.href = '../index.html';
    });
});
