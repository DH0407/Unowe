// 문서가 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
    // mainAreaMenuButton 요소 찾기
    var mainAreaMenuButton = document.querySelector('.mainAreaMenuButton');
    // menuAreaButton 요소 찾기
    var menuAreaButton = document.getElementById('menuAreaButton');
    // mainArea 요소 찾기
    var mainArea = document.getElementById('mainArea');
    // ClientInformationZoon 요소 찾기
    var ClientInformationZoon = document.querySelector('.ClientInformationZoon');
    // readMoreButton 요소 찾기
    var readMoreButton = document.getElementById('readMoreButton');
    // logOutButtonZoon 요소 찾기
    var logOutButtonZoon = document.getElementById('logOutButtonZoon');
    // logOutButton 요소 찾기
    var logOutButton = document.getElementById('logOutButton'); // 로그아웃 버튼 추가

    // logOutButton이 존재하는지 확인 후 클래스 추가
    if (logOutButton) {
        logOutButton.classList.add('logOutButtonHidden');
    }

    // mainAreaMenuButton 클릭 이벤트 처리
    mainAreaMenuButton.addEventListener('click', function() {
        mainArea.classList.add('mainAreaMoveRight');
        mainArea.classList.remove('mainAreaMoveLeft');
        mainAreaMenuButton.classList.add('menuAreaMenuButtonHidden');
        // 사용자 정보창 애니메이션
        ClientInformationZoon.classList.add('ClientInformationMoveLeft');
        ClientInformationZoon.classList.remove('ClientInformationMoveRight');
        ClientInformationZoon.classList.remove('ClientInformationMoveUpRight');
        // logOutButtonZoon 애니메이션 제거
        if (logOutButtonZoon) {
            logOutButtonZoon.classList.add('logOutButtonZoonHidden');
        }
        // logOutButton 숨기기
        if (logOutButton) {
            logOutButton.classList.add('logOutButtonHidden');
        }
    });

    // menuAreaButton 클릭 이벤트 처리
    menuAreaButton.addEventListener('click', function() {
        if (readMoreButton.id == 'readMoreButton') {
            ClientInformationZoon.classList.add('ClientInformationMoveRight');
            ClientInformationZoon.classList.remove('ClientInformationMoveUpRight');
            ClientInformationZoon.classList.remove('ClientInformationMoveUp');
        } else if (readMoreButton.id == 'readMoreOff') {
            ClientInformationZoon.classList.add('ClientInformationMoveUpRight');
            ClientInformationZoon.classList.remove('ClientInformationMoveDown');
            readMoreButton.id = 'readMoreButton';
        }
        mainArea.classList.remove('mainAreaMoveRight');
        mainArea.classList.add('mainAreaMoveLeft');
        mainAreaMenuButton.classList.remove('menuAreaMenuButtonHidden');
        ClientInformationZoon.classList.remove('ClientInformationMoveLeft');
        // logOutButtonZoon 애니메이션 제거
        if (logOutButtonZoon) {
            logOutButtonZoon.classList.remove('logOutButtonZoonHidden');
        }
        // logOutButton 숨기기
        if (logOutButton) {
            logOutButton.classList.add('logOutButtonHidden');
        }
    });

    // readMoreButton 클릭 이벤트 처리
    readMoreButton.addEventListener('click', function() {
        switch (readMoreButton.id) {
            case 'readMoreButton':
                readMoreButton.id = 'readMoreOff';
                ClientInformationZoon.classList.add('ClientInformationMoveDown');
                ClientInformationZoon.classList.remove('ClientInformationMoveUp');
                // logOutButton 보이기
                if (logOutButton) {
                    logOutButton.classList.remove('logOutButtonHidden');
                }
                console.log('On');
                break;
            case 'readMoreOff':
                readMoreButton.id = 'readMoreButton';
                ClientInformationZoon.classList.add('ClientInformationMoveUp');
                ClientInformationZoon.classList.remove('ClientInformationMoveDown');
                // logOutButton 숨기기
                if (logOutButton) {
                    logOutButton.classList.add('logOutButtonHidden');
                }
                console.log('Off');
                break;
        }
    });

    // 로그아웃 버튼 클릭 이벤트 처리
    if (logOutButton) {
        logOutButton.addEventListener('click', function() {
            // 쿠키 삭제
            document.cookie = "isLoggedIn=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            // 로그인 페이지로 리디렉션
            location.href = '../index.html';
        });
    }
});
