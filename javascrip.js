<script>
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-bar");

    skillBars.forEach(bar => {
        let progress = parseInt(bar.getAttribute("data-progress")); // Get the skill percentage
        let fill = document.createElement("div");
        fill.classList.add("skill-bar-fill");
        fill.innerText = progress + "%"; // Display percentage text inside

        // Set dynamic fill color based on progress
        if (progress >= 90) {
            fill.style.backgroundColor = "#008000"; // Dark Green
        } else if (progress >= 80) {
            fill.style.backgroundColor = "#4CAF50"; // Green
        } else if (progress >= 60) {
            fill.style.backgroundColor = "#FFC107"; // Yellow
        } else if (progress >= 40) {
            fill.style.backgroundColor = "#FF9800"; // Orange
        } else {
            fill.style.backgroundColor = "#F44336"; // Red
        }

        // Set dynamic border thickness relative to progress
        let borderThickness = (progress / 100) * 10 + "px"; // Scales between 1px to 10px
        bar.style.border = `${borderThickness} solid ${fill.style.backgroundColor}`;

        // Append the fill inside the skill bar
        bar.appendChild(fill);

        // Start animation
        setTimeout(() => {
            fill.style.width = progress + "%";
        }, 300); // Small delay before filling
    });
});

        </script>