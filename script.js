// script.js
document.getElementById('submitForm').addEventListener('click', function() {
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        telegramUser: document.getElementById('telegramUser').value,
        department: document.getElementById('department').value,
        stage: document.getElementById('stage').value
    };

    // Send this data to a server-side script (e.g., PHP or Node.js) using AJAX
    fetch('saveData.php', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Handle response here (e.g., show a success message)
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error here
    });
});
