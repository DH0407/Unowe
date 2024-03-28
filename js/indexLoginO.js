document.addEventListener('DOMContentLoaded', function() {
    var mainAreaMenuButton = document.querySelector('.mainAreaMenuButton');
    var menuAreaButton = document.getElementById('menuAreaButton');
    var mainArea = document.getElementById('mainArea');

    mainAreaMenuButton.addEventListener('click', function() {
        mainArea.classList.add('mainAreaMoveRight');
        mainArea.classList.remove('mainAreaMoveLeft');
        mainAreaMenuButton.classList.add('menuAreaMenuButtonHidden');
    });

    menuAreaButton.addEventListener('click', function() {

        mainArea.classList.remove('mainAreaMoveRight');
        mainArea.classList.add('mainAreaMoveLeft');
        mainAreaMenuButton.classList.remove('menuAreaMenuButtonHidden'); 
    });

});
function clickLogout() {
    document.cookie = "isLoggedIn=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // 로그인 페이지로 리디렉션
    location.href = '../index.html';
}


// 쿠키 값을 가져오는 함수
function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  }
  
  // 페이지로 이동하는 함수
  function redirectToPage() {
    const cookieValue = getCookie('isLoggedIn'); // 여기에 쿠키 이름을 입력하세요
    if (cookieValue !== 'true') { // 여기에 이동하고자 하는 쿠키 값과 비교할 값 입력
      window.location.href = './index.html'; // 여기에 이동할 페이지 URL 입력
    }
  }
  
  // 페이지 로드 시 실행
  window.onload = redirectToPage;
