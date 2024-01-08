//1st Container//
//1st Container - Changing background//
document.addEventListener('DOMContentLoaded', function () {
    const backgroundContainer = document.getElementById('background-container');
    const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
    let index = 0;

    function changeBackground() {
        backgroundContainer.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }

    // Initial background change
    changeBackground();

    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
});

