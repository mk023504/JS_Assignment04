// Function to fetch a random cat image from The Cat API
document.getElementById('loadCat').addEventListener('click', function () {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search'; // URL for The Cat API endpoint

    // Get the image element where the random cat image will be displayed
    const catImage = document.getElementById('catImage');

    // Clear the previous image to provide a better user experience
    // Display a placeholder 'Loading...' text in the alt attribute while the new image is being fetched
    catImage.src = '';
    catImage.alt = 'Loading...';

    // Make a fetch request to the API to get a random cat image
    fetch(apiUrl)
        .then(response => response.json()) // Convert the response to JSON format
        .then(data => {
            // Check if the API returned valid data
            if (data && data.length > 0) {
                // If data is valid, set the 'src' of the image to the URL provided by the API
                catImage.src = data[0].url;
                catImage.alt = 'Random Cat Image'; // Update the alt text to describe the new image
            } else {
                // If no data is returned, display an error message in the alt attribute
                catImage.alt = 'No cat found. Try again!';
            }
        })
        .catch(error => {
            // Handle any errors that occur during the fetch request
            console.error('Error fetching the cat image:', error); // Log the error to the console for debugging
            // Display an error message in the alt attribute to inform the user
            catImage.alt = 'Error loading the cat image. Please try again.';
        });
});
