function showSection(sectionId, button) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));


  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('active');
  }

  
  const buttons = document.querySelectorAll('.admin-sidebar button');
  buttons.forEach(btn => btn.classList.remove('active'));

  button.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  // Approve button
  const approveButtons = document.querySelectorAll(".approve-btn");
  approveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "Approved";
      button.disabled = true;
    });
  });

  // Decline button
  const declineButtons = document.querySelectorAll(".decline-btn");
  declineButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const entry = button.closest(".account-entry");
      if (entry) {
        entry.remove();
      }
    });
  });
});
