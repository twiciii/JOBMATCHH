function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

function openSignUpModal() {
    closeLoginModal();
    document.getElementById("signUpModal").style.display = "flex";
}

function closeSignUpModal() {
    document.getElementById("signUpModal").style.display = "none";
}

function login() {
    alert("Login functionality to be implemented!");
}

function signUp() {
    alert("Sign-up functionality to be implemented!");
}
// Get modal elements
const loginModal = document.getElementById('login-modal');
const signUpModal = document.getElementById('signup-modal');

// Function to close the modal when clicked outside
window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signUpModal) {
        signUpModal.style.display = 'none';
    }
});
