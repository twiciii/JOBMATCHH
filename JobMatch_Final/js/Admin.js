document.addEventListener("DOMContentLoaded", () => {

  // ====== TAB SWITCHING ======
  window.showSection = function (sectionId, button) {
    const sections = document.querySelectorAll(".section");
    const buttons = document.querySelectorAll(".features-box button");

    sections.forEach((section) => section.classList.remove("active"));
    buttons.forEach((btn) => btn.classList.remove("active"));

    document.getElementById(sectionId).classList.add("active");
    button.classList.add("active");
  };

  // ====== DELETE POST FUNCTIONALITY ======
  const deletePostButtons = document.querySelectorAll(".delete-btn");

  deletePostButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const postTable = button.closest(".post-table");
      if (postTable) {
        postTable.remove(); 
      }
    });
  });

  // ====== APPROVE BUTTON FUNCTIONALITY ======
  const approveButtons = document.querySelectorAll(".approve-btn");

  approveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Post approved!");
      const postTable = button.closest(".post-table");
      if (postTable) {
        postTable.remove(); // Optional
      }
    });
  });

  // ====== DECLINE BUTTON FUNCTIONALITY ======
  const declineButtons = document.querySelectorAll(".decline-btn");

  declineButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const confirmDelete = confirm("Are you sure you want to decline this post?");
      if (confirmDelete) {
        const postTable = button.closest(".post-table");
        if (postTable) {
          postTable.remove();
        }
      }
    });
  });

  // ====== LOGOUT BUTTON ======
  const logoutButton = document.querySelector(".logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      const confirmLogout = confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        window.location.href = "../html/login.html"; // Adjust path
      }
    });
  }

});