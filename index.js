document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    var rectangle = document.getElementById('rectangle');
  
    menuButton.addEventListener('click', function() {
        rectangle.classList.toggle('animate');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    var menuButton = document.getElementById('menuButton');
  
    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('hiddenButtonani');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var offButton = document.getElementById('offButton');
    var rectangle = document.getElementById('rectangle');
  
    offButton.addEventListener('click', function() {
        rectangle.classList.toggle('animateoff');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var offButton = document.getElementById('offButton');
    var offButton = document.getElementById('offButton');
  
    offButton.addEventListener('click', function() {
        menuButton.classList.toggle('hiddenButtonanioff');
    });
});
