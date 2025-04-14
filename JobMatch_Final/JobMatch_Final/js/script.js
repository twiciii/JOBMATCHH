// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

        document.addEventListener("DOMContentLoaded", function () {
            const sidebarLinks = document.querySelectorAll(".side-nav-item");
            const contentTabs = document.querySelectorAll(".main--content-container");
            const userProfileName = document.querySelector(".user-profile-name");
            const userProfileContainer = document.querySelector(".user-profile-container");
            const mainContentContainers = document.querySelectorAll('.main--content-container:not(.user-profile-container)');
            const profileTabButtons = document.querySelectorAll(".action-profile-tabs .btn-profile-tab");
            const postProfileDiv = document.querySelector(".post-profile");
            const friendsUserProfileDiv = document.querySelector(".friends-userprofile");
            const editProfileDiv = document.querySelector(".edit-profile");

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
                        userProfileContainer.style.display = "none";
                    }
                });
            });

            showTab("home");

            userProfileName.addEventListener('click', (event) => {
                event.preventDefault();
                userProfileContainer.style.display = "block";
                mainContentContainers.forEach(container => {
                    container.style.display = "none";
                });
                // Initially show the post section and activate the post button
                postProfileDiv.style.display = "block";
                friendsUserProfileDiv.style.display = "none";
                editProfileDiv.style.display = "none";
                setActiveProfileTab("post-profile");
            });

            function setActiveProfileTab(tabName) {
                profileTabButtons.forEach(button => {
                    button.classList.remove("active-profile-tab");
                    if (button.dataset.tab === tabName) {
                        button.classList.add("active-profile-tab");
                    }
                });

                postProfileDiv.style.display = tabName === "post-profile" ? "block" : "none";
                friendsUserProfileDiv.style.display = tabName === "friends-userprofile" ? "block" : "none";
                editProfileDiv.style.display = tabName === "edit-profile" ? "block" : "none";
            }

            profileTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const tab = this.dataset.tab;
                    setActiveProfileTab(tab);
                });
            });

            const friendRequestButton = document.querySelector(".btn-friend-request");
            const addFriendButton = document.querySelector(".btn-add-request");
            const friendRequestList = document.querySelector(".friend-request-list");
            const addFriendList = document.querySelector(".add-friend-list");

            friendRequestButton.addEventListener("click", () => {
                friendRequestList.style.display = "block";
                addFriendList.style.display = "none";
                friendRequestButton.classList.add("active");
                addFriendButton.classList.remove("active");
            });

            addFriendButton.addEventListener("click", () => {
                friendRequestList.style.display = "none";
                addFriendList.style.display = "block";
                friendRequestButton.classList.remove("active");
                addFriendButton.classList.add("active");
            });

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

            const notificationIcon = document.querySelector(".btn-notif");
            const notificationDropdown = document.querySelector(".notification-dropdown");

            notificationIcon.addEventListener("click", () => {
                notificationDropdown.classList.toggle("show");
            });

            document.addEventListener("click", (event) => {
                if (!notificationIcon.contains(event.target) && !notificationDropdown.contains(event.target)) {
                    notificationDropdown.classList.remove("show");
                }
            });
        });
