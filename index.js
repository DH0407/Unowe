document.addEventListener('DOMContentLoaded', function() {
    var mainAreaMenuButton = document.querySelector('.mainAreaMenuButton');
    var menuAreaButton = document.getElementById('menuAreaButton');
    var mainArea = document.getElementById('mainArea');
    var ClientInformationZoon = document.querySelector('.ClientInformationZoon');
    var readMoreButton = document.getElementById('readMoreButton')

    mainAreaMenuButton.addEventListener('click', function() {
        mainArea.classList.add('mainAreaMoveRight');
        mainArea.classList.remove('mainAreaMoveLeft');
        ClientInformationZoon.classList.add('ClientInformationMoveLeft');
        ClientInformationZoon.classList.remove('ClientInformationMoveRight');
        mainAreaMenuButton.classList.add('menuAreaMenuButtonHidden');
    });

    menuAreaButton.addEventListener('click', function() {
        mainArea.classList.remove('mainAreaMoveRight');
        mainArea.classList.add('mainAreaMoveLeft');
        ClientInformationZoon.classList.add('ClientInformationMoveRight');
        ClientInformationZoon.classList.remove('ClientInformationMoveLeft');
        mainAreaMenuButton.classList.remove('menuAreaMenuButtonHidden');
    });

    readMoreButton.addEventListener('click', function() {
        switch (readMoreButton.id) {
            case 'readMoreButton':
                readMoreButton.id = 'readMoreOff';
                ClientInformationZoon.classList.add('ClientInformationMoveDown');
                ClientInformationZoon.classList.remove('ClientInformationMoveUp');
                console.log('On');
                console.log(readMoreButton.className);
                break;
            case 'readMoreOff':
                readMoreButton.id = 'readMoreButton';
                ClientInformationZoon.classList.add('ClientInformationMoveUp');
                ClientInformationZoon.classList.remove('ClientInformationMoveDown');
                console.log('Off');
                console.log(readMoreButton.className);
                break;
        }
    });
});