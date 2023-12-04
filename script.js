function showContactAlert() {
    var phoneNumber = '0324-2952477';
    var alertMessage = 'Please contact me on this number ' + phoneNumber;
    alert(alertMessage);
}

function downloadFile() {
    const filename = 'Muhammad Usama Hassan.pdf';  
    const filePath = filename;
    const anchor = document.createElement('a');
    anchor.href = filePath;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Create a JavaScript object in JSON format
    var formData = {
        name: name,
        email: email,
        message: message
    };

    // Retrieve existing form data from local storage
    var existingFormData = JSON.parse(localStorage.getItem('formDataArray')) || [];

    // Add the new form data
    existingFormData.push(formData);

    // Save the updated form data back to local storage
    localStorage.setItem('formDataArray', JSON.stringify(existingFormData));

    // Print form data to console
    console.log(existingFormData);

    // Display an alert to the user
    alert('Your details have been submitted!');

    // Optionally, you can clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
