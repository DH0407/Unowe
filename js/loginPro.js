document.addEventListener("DOMContentLoaded", onPageLoad);
function onPageLoad() {
    console.log("페이지가 로드되었습니다.");
    // 쿠키 만료 날짜를 설정 (예: 현재 날짜로부터 1일 후)
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);

    // 쿠키 설정
    document.cookie = "isLoggedIn=true; expires=" + expirationDate.toUTCString() + "; path=/";
    location.href = 'indexLoginO.html'
}

