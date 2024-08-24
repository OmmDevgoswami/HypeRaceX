// Loading animation
window.addEventListener('load', () => {
    document.querySelector('.loading-overlay').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.getElementById("mode-toggle");
    const signupLink = document.getElementById("signup-link");
    const loginLink = document.getElementById("login-link");
    const loginBox = document.querySelector(".login-box");
    const signupBox = document.querySelector(".signup-box");
    const body = document.body;

    document.getElementById('mode-toggle').addEventListener('click', () => {
        const body = document.body;
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            document.getElementById('mode-toggle').textContent = 'Switch to Dark Mode';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            document.getElementById('mode-toggle').textContent = 'Switch to Light Mode';
        }
    });

    signupLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginBox.classList.add("hidden");
        signupBox.classList.remove("hidden");
    });

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        signupBox.classList.add("hidden");
        loginBox.classList.remove("hidden");
    });
});
