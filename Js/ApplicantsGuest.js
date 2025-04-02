document.addEventListener("DOMContentLoaded", function () {
    // Open Login Modal
    document.getElementById("openLoginModal").addEventListener("click", function () {
        document.getElementById("loginModal").style.display = "flex";
    });

    // Open Signup Modal
    document.getElementById("openSignupModal").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("signupModal").style.display = "flex";
    });

    // Close Modal when clicking on (X)
    document.querySelectorAll(".close").forEach(closeBtn => {
        closeBtn.addEventListener("click", function () {
            document.getElementById(this.getAttribute("data-modal")).style.display = "none";
        });
    });

    // Close Modal when clicking outside of content
    window.addEventListener("click", function (event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });
});
