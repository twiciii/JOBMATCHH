document.addEventListener("DOMContentLoaded", function () {
    const addFriendInput = document.querySelector(".add-friend input");
    const addFriendButton = document.querySelector(".add-btn");
    const friendsList = document.querySelector(".friends-list");

    // Load existing friends and requests
    function loadFriends() {
        friendsList.innerHTML = "";
        let friends = JSON.parse(localStorage.getItem("friends")) || [];

        friends.forEach(friend => {
            addFriendToList(friend);
        });
    }

    function loadFriendRequests() {
        let requests = JSON.parse(localStorage.getItem("friendRequests")) || [];
        const requestsContainer = document.getElementById("friend-requests");

        requestsContainer.innerHTML = "";
        requests.forEach((request, index) => {
            const requestDiv = document.createElement("div");
            requestDiv.classList.add("friend-request");
            requestDiv.innerHTML = `
                <span>${request}</span>
                <button class="accept-btn" data-index="${index}">Accept</button>
                <button class="reject-btn" data-index="${index}">Reject</button>
            `;
            requestsContainer.appendChild(requestDiv);
        });
    }

    // Add a new friend request
    addFriendButton.addEventListener("click", function () {
        const friendName = addFriendInput.value.trim();
        if (!friendName) return;

        let requests = JSON.parse(localStorage.getItem("friendRequests")) || [];
        if (!requests.includes(friendName)) {
            requests.push(friendName);
            localStorage.setItem("friendRequests", JSON.stringify(requests));
            loadFriendRequests();
        }
        addFriendInput.value = "";
    });

    // Handle accepting or rejecting requests
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("accept-btn")) {
            let index = event.target.dataset.index;
            let requests = JSON.parse(localStorage.getItem("friendRequests")) || [];
            let friends = JSON.parse(localStorage.getItem("friends")) || [];

            let acceptedFriend = requests.splice(index, 1)[0];
            if (!friends.includes(acceptedFriend)) {
                friends.push(acceptedFriend);
                localStorage.setItem("friends", JSON.stringify(friends));
                addFriendToList(acceptedFriend);
            }

            localStorage.setItem("friendRequests", JSON.stringify(requests));
            loadFriendRequests();
        }

        if (event.target.classList.contains("reject-btn")) {
            let index = event.target.dataset.index;
            let requests = JSON.parse(localStorage.getItem("friendRequests")) || [];

            requests.splice(index, 1);
            localStorage.setItem("friendRequests", JSON.stringify(requests));
            loadFriendRequests();
        }
    });

    function addFriendToList(friendName) {
        const friendDiv = document.createElement("div");
        friendDiv.classList.add("friend");
        friendDiv.innerHTML = `
            <span>${friendName}</span>
            <button class="remove-btn">Remove</button>
        `;
        friendsList.appendChild(friendDiv);
    }

    // Handle removing a friend
    friendsList.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-btn")) {
            const friendName = event.target.previousElementSibling.textContent;
            let friends = JSON.parse(localStorage.getItem("friends")) || [];
            friends = friends.filter(friend => friend !== friendName);
            localStorage.setItem("friends", JSON.stringify(friends));
            loadFriends();
        }
    });

    loadFriends();
    loadFriendRequests();
});
