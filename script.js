
function verifyAge(isAdult) {
    if (isAdult) {
        document.getElementById('age-check').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        document.getElementById('age-check').innerHTML = '<h2>Access Denied</h2><p>You must be 18 or older to view this site.</p>';
    }
}
