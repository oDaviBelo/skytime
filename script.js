var sun = document.querySelector('.sun');
var moon = document.querySelector('.moon');
var nature = document.querySelector('.nature');
var windows = document.querySelector('.window');
var stars = document.querySelector('.stars-area');
var sky = document.querySelector('body');
setInterval(function time() {
    var date = new Date();
    var hour = date.getHours();
    if (hour >= 17 && hour < 19) {
        stars.style.display = 'none';
        sun.className = 'sun-morning';
        sky.style.backgroundColor = '#333366';
        moon.style.display = 'none';
    }
    else if (hour >= 19 || hour <= 4) {
        sun.style.display = 'none';
        sky.style.backgroundColor = '#000';
        nature.style.backgroundColor = '#006400';
    }
    else if (hour === 5) {
        stars.style.display = 'none';
        sun.className = 'sun-morning';
        sky.style.backgroundColor = '#4aa9b2 ';
        moon.style.display = 'none';
    }
    else if (hour >= 6 || hour <= 10) {
        stars.style.display = 'none';
        sky.style.backgroundColor = '#royalblue ';
        moon.style.display = 'none';
    }
}, 500);
