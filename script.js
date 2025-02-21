function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === "wry01" && password === "ngrok") {
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('info').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}
