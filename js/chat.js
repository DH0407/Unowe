const socket = new WebSocket('ws://110.15.29.199:80');
const chatWindow = document.getElementById('chat-window');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');

socket.onopen = function(event) {
  console.log('WebSocket connected');
};

socket.onmessage = function(event) {
  const data = JSON.parse(event.data);
  const messageElement = document.createElement('div');
  const messageClass = data.ownMessage ? 'own-message' : 'other-message';
  
  messageElement.classList.add('message-container');
  messageElement.innerHTML = `<div class="message ${messageClass}"><strong>${data.username}</strong><br>${data.message}</div>`;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // 채팅방 헤더 업데이트
  document.getElementById('chat-header').innerText = `${data.username}의 채팅`;
};

function sendMessage() {
  const username = usernameInput.value.trim() || 'Anonymous';
  const message = messageInput.value.trim();
  if (message !== '') {
    const data = { username, message, ownMessage: true };
    socket.send(JSON.stringify(data));
    const messageElement = document.createElement('div');
    messageElement.classList.add('own-container');
    messageElement.innerHTML = `<div class="message own-message">
                                    <div class="username">${username}</div>
                                    <div class="massage">${message}</div>
                                </div>`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    messageInput.value = '';
  }
}