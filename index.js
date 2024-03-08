// document.addEventListener('DOMContentLoaded', function() {
//     var menuButton = document.getElementById('menuButton');
//     var rectangle = document.getElementById('rectangle');
  
//     menuButton.addEventListener('click', function() {
//         rectangle.classList.toggle('animate');
//         menuButton.classList.toggle('hiddenButtonani');
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    var offButton = document.getElementById('offButton');
    var rectangle = document.getElementById('rectangle');
  
    menuButton.addEventListener('click', function() {
        // 메뉴 버튼을 클릭하여 메뉴를 열 때
        rectangle.classList.add('animate');
        rectangle.classList.remove('animateoff'); // animateoff 클래스 제거
        
        // 메뉴 버튼 서서히 사라지게 하기
        menuButton.classList.add('hidden');
    });
    
    offButton.addEventListener('click', function() {
        // off 버튼을 클릭하여 메뉴를 닫을 때
        rectangle.classList.remove('animate'); // animate 클래스 제거
        rectangle.classList.add('animateoff');
        
        // 메뉴 버튼 서서히 나타나게 하기
        menuButton.classList.remove('hidden');
    });
    
    
});

// document.addEventListener('DOMContentLoaded', function() {
//     var menuButton = document.getElementById('menuButton');
//     var rectangle = document.getElementById('rectangle');
  
//     menuButton.addEventListener('click', function() {
//         rectangle.classList.toggle('animate');
//         menuButton.classList.toggle('hiddenButtonani');
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var offButton = document.getElementById('offButton');
//     var rectangle = document.getElementById('rectangle');
//     var menuButton = document.getElementById('menuButton');
  
//     offButton.addEventListener('click', function() {
//         rectangle.classList.add('animateoff');
//         setTimeout(function() {
//             menuButton.classList.toggle('hiddenButtonani');
//         }, 1000); // 1초 후에 hiddenButtonani 클래스를 토글
//     });
// });
    





// document.addEventListener('DOMContentLoaded', function() {
//     var menuButton = document.getElementById('menuButton');
//     var menuButton = document.getElementById('menuButton');
  
//     menuButton.addEventListener('click', function() {
//         menuButton.classList.toggle('hiddenButtonani');
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var offButton = document.getElementById('offButton');
//     var offButton = document.getElementById('offButton');
  
//     offButton.addEventListener('click', function() {
//         menuButton.classList.toggle('hiddenButtonanioff');
//     });
// });
