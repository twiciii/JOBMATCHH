document.getElementById("post-image").addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                const maxWidth = 400;
                const maxHeight = 250;
                let width = img.width;
                let height = img.height;

                // Maintain aspect ratio
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

                // Convert the resized image to a new file
                const resizedImage = canvas.toDataURL("image/png");

                // Display preview in post-box
                const previewContainer = document.getElementById("image-preview-container");
                const previewImage = document.getElementById("image-preview");
                previewImage.src = resizedImage;
                previewContainer.style.display = "block";
            };
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("post-button").addEventListener("click", function () {
    const postText = document.getElementById("post-text").value;
    const previewImage = document.getElementById("image-preview").src;

    if (!postText && previewImage === "") {
        alert("Please enter text or upload an image.");
        return;
    }

    const feed = document.querySelector(".feed");

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const postHeader = document.createElement("div");
    postHeader.classList.add("post-header");

    postHeader.innerHTML = `
        <span class="poster-name">You</span>
        <span class="post-time">Just now</span>
    `;

    const postContent = document.createElement("p");
    postContent.textContent = postText;

    postDiv.appendChild(postHeader);
    postDiv.appendChild(postContent);

    if (previewImage) {
        const imageElement = document.createElement("img");
        imageElement.src = previewImage;
        imageElement.classList.add("image-preview");
        postDiv.appendChild(imageElement);
    }

    const postActions = document.createElement("div");
    postActions.classList.add("post-actions");
    postActions.innerHTML = `
        <button>👍 Like</button>
        <button>💬 Comment</button>
    `;

    postDiv.appendChild(postActions);
    feed.appendChild(postDiv);

    document.getElementById("post-text").value = "";
    document.getElementById("post-image").value = "";
    document.getElementById("image-preview-container").style.display = "none";
});
