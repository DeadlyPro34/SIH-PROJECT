document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.querySelector('.explore-btn');

    // Example of a basic JS functionality
    exploreButton.addEventListener('click', (e) => {
        e.preventDefault(); // Stop the button from acting like a link
        console.log("Exploring Opportunities clicked!");
        // alert("Redirecting to the opportunities page!"); 
        // In a real application, you'd navigate the user here.
    });

    console.log("PLACEMINT website loaded successfully.");
});