document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const formData = new FormData(this);
    
    // Make a POST request to your Spring Boot API
    fetch('/save', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Successful submission, you can redirect or display a success message
            console.log('Form submitted successfully');
        } else {
            // Handle errors, such as validation errors from the API
            console.error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
