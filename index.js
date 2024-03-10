document.addEventListener('DOMContentLoaded', function() {
    var mainAreaMenuButton = document.querySelector('.mainAreaMenuButton');
    var menuAreaButton = document.getElementById('menuAreaButton');
    var mainArea = document.getElementById('mainArea');
    var ClientInformationZoon = document.querySelector('.ClientInformationZoon'); // 변경: ID에서 클래스로 수정
  
    mainAreaMenuButton.addEventListener('click', function() {
        // 메뉴 버튼을 클릭하여 메뉴를 열 때
        mainArea.classList.add('mainAreaMoveRight');
        mainArea.classList.remove('mainAreaMoveLeft'); // mainAreaMoveLeft 클래스 제거
        ClientInformationZoon.classList.add('ClientInformationMoveLeft');
        ClientInformationZoon.classList.remove('ClientInformationMoveRight');  

        // 메뉴 버튼 서서히 사라지게 하기
        mainAreaMenuButton.classList.add('menuAreaMenuButtonHidden'); // 클래스 이름 변경
    });
   
    menuAreaButton.addEventListener('click', function() {
        // off 버튼을 클릭하여 메뉴를 닫을 때
        mainArea.classList.remove('mainAreaMoveRight'); // mainAreaMoveRight 클래스 제거
        mainArea.classList.add('mainAreaMoveLeft');
        ClientInformationZoon.classList.add('ClientInformationMoveRight'); 
        ClientInformationZoon.classList.remove('ClientInformationMoveLeft');
        
        // 메뉴 버튼 서서히 나타나게 하기
        mainAreaMenuButton.classList.remove('menuAreaMenuButtonHidden'); // 클래스 이름 변경
    });
});


