// Replace with your web app URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbz5DSGtJaQcrsCUwtU4QcvvJ7e9CJqdArmYqTeo8VFwkD5xcVkyHKyDhuDhIsPT8VpLbw/exec';

document.getElementById('dataForm').addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData(e.target);
    fetch(scriptURL, { method: 'POST', body: form })
        .then(response => alert("Success!"))
        .catch(error => console.error('Error!', error.message));
});
