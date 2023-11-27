document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before executing the script

    // Get the button and add a click event listener
    var colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', function () {
        // Change the background color randomly
        var randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
