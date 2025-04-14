document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll(".side-nav-item");
    const contentTabs = document.querySelectorAll(".main--content-container");
  
    function showTab(tabName) {
      contentTabs.forEach((tab) => {
        tab.style.display = "none";
        if (tab.classList.contains(tabName + "-tab")) {
          tab.style.display = "block";
        }
      });
  
      sidebarLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.dataset.tab === tabName) {
          link.classList.add("active");
        }
      });
    }
  
    sidebarLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const tab = this.dataset.tab;
        if (tab) {
          showTab(tab);
        }
      });
    });
  
    // Set home tab as active by default
    showTab("home");
  
    // Sidebar toggle functionality
    const menuIcon = document.querySelector(".sidebar-menu-icon");
    const sideNav = document.querySelector(".side-nav");
    const sideNavDisplayStyle = window.getComputedStyle(sideNav).display;
  
    menuIcon.addEventListener("click", () => {
      sideNav.classList.toggle("hidden");
      if (!sideNav.classList.contains("hidden")) {
        sideNav.style.display = sideNavDisplayStyle;
      } else {
        setTimeout(() => {
          sideNav.style.display = "none";
        }, 300);
      }
    });
  
    // Login and Register Modal Functions
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    const btnLogin = document.querySelector(".btn-login");
    const btnRegister = document.querySelector(".btn-register");
    const closeLogin = document.querySelector(".close-login");
    const closeRegister = document.querySelector(".close-register");
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");
  
    btnLogin.addEventListener("click", () => {
      loginModal.style.display = "block";
    });
  
    btnRegister.addEventListener("click", () => {
      registerModal.style.display = "block";
    });
  
    closeLogin.addEventListener("click", () => {
      loginModal.style.display = "none";
    });
  
    closeRegister.addEventListener("click", () => {
      registerModal.style.display = "none";
    });
  
    showRegister.addEventListener("click", () => {
      loginModal.style.display = "none";
      registerModal.style.display = "block";
    });
  
    showLogin.addEventListener("click", () => {
      registerModal.style.display = "none";
      loginModal.style.display = "block";
    });
  
    // Close modals when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === loginModal) {
        loginModal.style.display = "none";
      }
      if (event.target === registerModal) {
        registerModal.style.display = "none";
      }
    });
  });