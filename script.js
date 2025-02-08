document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Modo Claro/Escuro
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeIcon.src = savedTheme === "dark-mode" ? "sun.svg" : "moon.svg";
    }

    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            body.classList.replace("dark-mode", "light-mode");
            themeIcon.src = "moon.svg";
            localStorage.setItem("theme", "light-mode");
        } else {
            body.classList.replace("light-mode", "dark-mode");
            themeIcon.src = "sun.svg";
            localStorage.setItem("theme", "dark-mode");
        }
    });
});

// Login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("login-error");

    if (username === "adminWry" && password === "Qf1wnK5orS") {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("site-content").style.display = "block";
    } else {
        errorMsg.textContent = "Usuário ou senha incorretos!";
        errorMsg.style.color = "red";
    }
}
