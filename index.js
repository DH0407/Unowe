document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    var rectangle = document.getElementById('rectangle');
  
    menuButton.addEventListener('click', function() {
        rectangle.classList.toggle('animate');
    });
});