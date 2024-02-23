let width = 0; // Starting from 0 to increment in smaller steps
        const timerBar = document.getElementById("timerBar");
        const interval = setInterval(function () {
            if (width >= 100) {
                clearInterval(interval);
                //Logik für Zeit abgelaufen

            } else {
                width += 0.125; // Increment width by 0.125%
                timerBar.style.width = width + '%';
                // Optionally, uncomment the next line to display the percentage
                // timerBar.textContent = Math.round(width) + '%'; // Round the width to avoid decimal places in the text


                //auswerten des Ergebnises
            }
        }, 25); // Adjusted the interval to 25 ms for smaller steps over a 20-second duration