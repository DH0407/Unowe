const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sendEmail', (req, res) => {
    const toEmail = req.body.Email; // 클라이언트에서 전송한 이메일 주소

    // 이메일 전송 코드
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'unoweteam@gmail.com', // 보내는 이메일 주소
            pass: 'cahu ddjp wtrw mqup' // Gmail 앱 비밀번호
        }
    });

    const verificationCode = generateRandomCode();
    const expirationTime = generateExpirationTime();
    const emailBody = `아래의 코드를 인증화면에서 입력해주세요. \n \n 인증 코드 : ${verificationCode} \n \n 인증 코드는 3분 후 만료됩니다.`;

    const mailOptions = {
        from: 'unoweteam@gmail.com', // 발신자 주소
        to: toEmail, // 수신자 주소
        subject: 'Unowe 인증번호',
        text: emailBody // 이메일 본문
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('이메일 전송 오류:', error);
            res.status(500).send('이메일 전송 실패');
        } else {
            console.log('이메일 전송 성공:', info.response);
            res.status(200).send('이메일 전송 성공');
        }
    });
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

// 6자리 숫자 코드 생성 함수
function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000); // 100000부터 999999 사이의 랜덤한 숫자 생성
}

// 만료 시간 생성 함수
function generateExpirationTime() {
    let expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 3); // 현재 시간에서 3분 후로 설정
    return expirationTime;
}
