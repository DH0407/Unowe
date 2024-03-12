document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
    console.log("페이지가 로드되었습니다.");

    // 클라이언트 이메일을 가져옴
    let ClientEmail = window.ClientEmail;
    console.log(ClientEmail);

    // 만약 클라이언트 이메일이 존재한다면
    if (ClientEmail) {
        // 해당 이메일을 쿠키로 설정
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        document.cookie = ClientEmail + "=true; expires=" + expirationDate.toUTCString() + "; path=/";
        console.log("쿠키 설정 완료");
    } else {
        console.log("클라이언트 이메일이 존재하지 않습니다.");
    }
}
