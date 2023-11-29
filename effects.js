/* website animation*/
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Apply the animation to specific elements */
body {
  animation: fadeIn 1s ease-in-out;
}

/* Add a hover effect to portfolio items */
.portfolio-item {
  transition: transform 0.5s ease-in-out;
}

.portfolio-item:hover {
  transform: scale(1.1);
}

/* Create a pulse effect for a call-to-action button */
.cta-button {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}



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
