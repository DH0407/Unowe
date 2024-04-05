const socket = new WebSocket('ws://110.15.29.199:80');
let chatWindow = document.getElementById('chat-window');

socket.onopen = function(event) {
  console.log('WebSocket connected');
};

socket.onmessage = function(event) {
  console.log('Received:', event.data);
  const data = JSON.parse(event.data);
  if (!data.error) {
    displayMessages(data);
  } else {
    console.error('Error from server:', data.error);
  }
};

function sendMessage() {
  const usernameInput = document.getElementById('username');
  const messageInput = document.getElementById('message');
  const username = usernameInput.value.trim() || 'Anonymous';
  const message = messageInput.value.trim();
  if (message !== '') {
    const data = { action: 'sendMessage', username, message };
    socket.send(JSON.stringify(data));
    messageInput.value = '';
  }
}

function displayMessages(messages) {
  chatWindow.innerHTML = ''; // 이전에 있던 메시지를 모두 삭제 
  messages.forEach(message => {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<div class="message-max-continer">
                                    <div class="massge-continer">
                                        <div class="userName"> ${message.username}</div>
                                        <div class="userMassge"> ${message.message}</div>
                                    </div>
                                </div>
                                `;
    if (message.isSent) {
      messageElement.classList.add('sent-message');
    } else {
      messageElement.classList.add('received-message');
    }
    chatWindow.appendChild(messageElement);
  });
  chatWindow.scrollTop = chatWindow.scrollHeight; // 스크롤을 항상 아래로 이동
}
