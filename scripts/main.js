document.addEventListener("DOMContentLoaded", function() { // Wait for the DOM to load
    const buttons = document.querySelectorAll('.nav-button'); // Get all buttons

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() { // Mouse hover
            this.style.transform = 'scale(1.05)'; // Slightly enlarge
            this.style.transition = 'transform 0.2s'; // Smooth animation
        });

        button.addEventListener('mouseleave', function() { // Mouse out
            this.style.transform = 'scale(1)'; // Return to original size
        });
    });
});
