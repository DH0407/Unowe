window.onload = function() {
    // 쿠키를 삭제하는 함수
    function deleteCookie(name) {
        // 쿠키 만료 날짜를 과거로 설정하여 쿠키를 삭제
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    // 페이지 로드될 때 실행되는 함수
    function onPageLoad() {
        console.log("로그아웃 페이지가 로드되었습니다.");
        
        // 전역 변수인 window.ClientEmail 가져오기
        let ClientEmail = window.ClientEmail;
        console.log(window.ClientEmail);
        // 해당 이메일을 쿠키 이름으로 사용하여 쿠키 삭제
        deleteCookie(ClientEmail);
    }

    // 페이지 로드 시 실행
    onPageLoad();
}
