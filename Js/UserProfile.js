document.addEventListener("DOMContentLoaded", function () {
    // Retrieve applicant data from localStorage
    const applicantData = JSON.parse(localStorage.getItem("applicantData"));

    if (applicantData) {
        // Update profile section
        document.querySelector(".profile-info h2").textContent = applicantData.name;
        document.querySelector(".profile-info p").textContent = applicantData.role;
        document.querySelector(".profile-pic").src = applicantData.image;

        // Update post content
        document.querySelector(".post p").textContent = applicantData.post;

        // Update skills dynamically
        const skillsContainer = document.querySelector(".skills");
        skillsContainer.innerHTML = "<h3>Skills and Interests</h3>";
        applicantData.skills.forEach(skill => {
            let span = document.createElement("span");
            span.textContent = skill;
            skillsContainer.appendChild(span);
        });
    }

    // Show the default tab (Posts) when page loads
    showTab(null, 'posts');
});

// Function to save applicant data before navigating
function saveApplicantData(event, name, role, skills, image, post) {
    event.preventDefault();

    const applicantData = {
        name: name,
        role: role,
        skills: skills.split(","),
        image: image,
        post: post
    };

    localStorage.setItem("applicantData", JSON.stringify(applicantData));

    // Redirect to UserProfile.html
    window.location.href = "UserProfile.html";
}

// Function to switch between tabs
function showTab(event, tabId) {
    document.querySelectorAll('.content').forEach(content => content.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    
    if (event) {
        event.currentTarget.classList.add('active');
    } else {
        document.querySelector(`button[onclick="showTab(event, '${tabId}')"]`).classList.add('active');
    }
}
