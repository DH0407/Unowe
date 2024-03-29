const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: function (origin, callback) {
      // 허용할 도메인을 정의
      const allowedOrigins = ['http://127.0.0.1:5500', 'http://localhost:5500'];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));

// const port = 3000;

// 이메일 전송 함수
function sendEmail(email) {
    // 이메일 전송 설정
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'unoweteam@gmail.com', // Gmail 계정
            pass: 'kwqx eiye psdl cvdy' // Gmail 앱 비밀번호
        }
    });

    // 인증 코드 생성
    let verificationCode = generateRandomCode();

    // 이메일 내용
    let emailBody = `아래의 코드를 인증화면에서 입력해주세요. \n \n 인증 코드 : ${verificationCode} \n \n 인증 코드는 3분 후 만료됩니다.`;

    // 메일 옵션 설정
    let mailOptions = {
        from: 'unoweteam@gmail.com', // 발신자 이메일 주소
        to: email, // 수신자 이메일 주소
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
}

// 랜덤한 6자리 숫자 생성 함수
function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 999999); // 100000부터 999999 사이의 랜덤한 숫자 생성
}

function generateExpirationTime() {
    let expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 3); // 현재 시간에서 3분 후로 설정
    return expirationTime;
}

let expirationTime = generateExpirationTime();
let emailSMTP = '${verificationCode}'; //인증 코드 저장. 나중에 인증코드랑 비교할 때 써야함


// GET 요청 처리
app.get('/sendEmail', (req, res) => {
    const email = req.query.email; // GET 파라미터에서 이메일 주소 가져오기

    // 이메일 전송
    sendEmail(email);

    res.send('이메일 전송 완료'); // 응답 보내기
});


// 서버 시작
// app.listen(port, () => {
//     console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
// });
//110.15.29.199:652
