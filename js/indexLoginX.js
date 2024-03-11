document.addEventListener('DOMContentLoaded', function() {
    var mainAreaMenuButton = document.querySelector('.mainAreaMenuButton');
    var menuAreaButton = document.getElementById('menuAreaButton');
    var mainArea = document.getElementById('mainArea');
    var loginZoon = document.querySelector('.loginZoon');
    var loginButton = document.getElementById('loginButton')

    mainAreaMenuButton.addEventListener('click', function() {
        mainArea.classList.add('mainAreaMoveRight');
        mainArea.classList.remove('mainAreaMoveLeft');
        mainAreaMenuButton.classList.add('menuAreaMenuButtonHidden');
        loginZoon.classList.add('loginZoonMoveLeft');
        loginZoon.classList.remove('loginZoonMoveRight');    
    });

    menuAreaButton.addEventListener('click', function() {
        mainArea.classList.remove('mainAreaMoveRight');
        mainArea.classList.add('mainAreaMoveLeft');
        mainAreaMenuButton.classList.remove('menuAreaMenuButtonHidden');    
        loginZoon.classList.add('loginZoonMoveRight');
        loginZoon.classList.remove('ClientInformationMoveUp');
        loginZoon.classList.remove('ClientInformationMoveDown');
        loginButton.classList.remove('loginZoonMoveLeft');
    });
});