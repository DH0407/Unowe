// 웹 소켓 연결
const socket = new WebSocket('ws://110.15.29.199:80');

// 연결이 열렸을 때 실행되는 함수
socket.onopen = function(event) {
  console.log('웹 소켓 연결 성공');
};

// 메시지를 받았을 때 실행되는 함수
socket.onmessage = function(event) {
  const receivedData = JSON.parse(event.data);
  displayMessage(receivedData);
};

// 전송 버튼 클릭 시 실행되는 함수
function sendMessage() {
  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;
  const sentTime = new Date().toLocaleTimeString();
  const deviceIP = getDeviceIP();

  // 데이터를 JSON 형식으로 만듦
  const data = {
    username: username,
    message: message,
    sentTime: sentTime,
    deviceIP: deviceIP
  };

  // JSON 데이터를 문자열로 변환하여 서버로 전송
  socket.send(JSON.stringify(data));

  // 메시지 입력란 초기화
  document.getElementById('message').value = '';
}

// 메시지를 화면에 표시하는 함수
function displayMessage(data) {
  const chatWindow = document.getElementById('chat-window');
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${data.username}:</strong> ${data.message} (${data.sentTime})`;
  chatWindow.appendChild(messageElement);
}

// 사용자의 디바이스 IP 주소를 가져오는 함수 (간단한 예시)
function getDeviceIP() {
  // 실제로는 사용자의 IP 주소를 가져오는 더 복잡한 로직이 필요할 수 있음
  return '123.456.789.123';
}