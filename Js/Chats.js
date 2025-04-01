document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-btn");
    const chatMessages = document.getElementById("chat-messages");
    const imageUpload = document.getElementById("image-upload");
    const chatListItems = document.querySelectorAll(".chat-list-item");
    const chatProfileImg = document.querySelector(".chat-profile-img");
    const chatProfileName = document.querySelector(".chat-profile-name");
    const chatTitle = document.getElementById("chat-title");

    // Function to send message
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (!messageText) return;

        const activeUser = document.querySelector(".chat-list-item.active")?.dataset.user;
        if (!activeUser) return;

        // Create message element
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "sent");
        messageDiv.textContent = messageText;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Save message to localStorage
        saveMessage(activeUser, messageText, "sent");

        messageInput.value = "";
    }

    // Function to save messages in localStorage
    function saveMessage(user, message, type) {
        let messages = JSON.parse(localStorage.getItem(`chat_${user}`)) || [];
        messages.push({ text: message, type: type });
        localStorage.setItem(`chat_${user}`, JSON.stringify(messages));
    }

    // Function to load messages from localStorage
    function loadMessages(user) {
        chatMessages.innerHTML = ""; // Clear previous messages
        let messages = JSON.parse(localStorage.getItem(`chat_${user}`)) || [];

        messages.forEach(msg => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", msg.type);
            messageDiv.textContent = msg.text;
            chatMessages.appendChild(messageDiv);
        });

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Set default chat to first user and load messages
    if (chatListItems.length > 0) {
        const firstUser = chatListItems[0];
        chatProfileImg.src = firstUser.querySelector(".chat-user-img").src;
        chatProfileName.textContent = firstUser.dataset.user;
        firstUser.classList.add("active");

        loadMessages(firstUser.dataset.user);
    }

    // Change chat when clicking a user
    chatListItems.forEach(item => {
        item.addEventListener("click", function () {
            chatProfileImg.src = item.querySelector(".chat-user-img").src;
            chatProfileName.textContent = item.dataset.user;

            // Remove active from all, then add to clicked one
            chatListItems.forEach(chat => chat.classList.remove("active"));
            item.classList.add("active");

            // Load saved messages
            loadMessages(item.dataset.user);
        });
    });

    // Send message on button click
    sendButton.addEventListener("click", sendMessage);

    // Send message on Enter key press
    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendMessage();
    });

    // Handle image upload
    imageUpload.addEventListener("change", function () {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = new Image();
                img.src = e.target.result;

                img.onload = function () {
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");

                    // Resize the image
                    const maxWidth = 300;
                    const maxHeight = 300;
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > maxWidth) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);

                    // Convert resized image
                    const resizedImage = canvas.toDataURL("image/png");

                    // Send image as a message
                    const imgElement = document.createElement("img");
                    imgElement.src = resizedImage;
                    imgElement.classList.add("message", "sent", "chat-image");

                    chatMessages.appendChild(imgElement);
                    chatMessages.scrollTop = chatMessages.scrollHeight;

                    // Save image to localStorage
                    const activeUser = document.querySelector(".chat-list-item.active")?.dataset.user;
                    if (activeUser) {
                        saveMessage(activeUser, resizedImage, "sent");
                    }
                };
            };
            reader.readAsDataURL(file);
        }
    });
});
