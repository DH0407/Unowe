// 6자리 숫자 코드 생성 함수
function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000); // 100000부터 999999 사이의 랜덤한 숫자 생성
}

let verificationCode = generateRandomCode();

let emailBody = `아래의 코드를 인증화면에서 입력해주세요. \n 인증 코드: ${verificationCode}`;

let emailSMTP = '${verificationCode}'; //인증 코드 저장. 나중에 인증코드랑 비교할 때 써야함



const nodemailer = require('nodemailer');

// transporter 생성
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'unoweteam@gmail.com', // 보내는 이메일 주소
        pass: 'kwqx eiye psdl cvdy' // Gmail 앱 비밀번호
    }
});

// 메일 옵션 설정
let mailOptions = {
    from: 'unoweteam@gmail.com', // 발신자 주소
    to: 'byeolb96@gmail.com', // 수신자 주소 나중에 변수로 받아와야함!!
    subject: 'Unowe 인증번호',
    text: emailBody // 이메일 본문
};

// 이메일 전송
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('이메일 전송 오류:', error);
    } else {
        console.log('이메일 전송 성공:', info.response);
    }
});