document.addEventListener('DOMContentLoaded', function() {
    // Get references to buttons and sections
    const requestBtn = document.getElementById('requestBtn');
    const friendsBtn = document.getElementById('friendsBtn');
    const friendsList = document.getElementById('friendsList');
    const requestsList = document.getElementById('requestsList');
    
    // Set initial state
    friendsList.classList.add('active');
    friendsBtn.classList.add('active');
    requestsList.classList.remove('active');
    
    // Friend Request button click event
    requestBtn.addEventListener('click', function() {
        // Update buttons appearance
        requestBtn.classList.add('active');
        friendsBtn.classList.remove('active');
        
        // Show request list, hide friends list
        requestsList.classList.add('active');
        friendsList.classList.remove('active');
    });
    
    // Add Friend button click event
    friendsBtn.addEventListener('click', function() {
        // Update buttons appearance
        friendsBtn.classList.add('active');
        requestBtn.classList.remove('active');
        
        // Show friends list, hide request list
        friendsList.classList.add('active');
        requestsList.classList.remove('active');
    });
    
    // Add functionality for the Accept/Decline buttons
    const acceptButtons = document.querySelectorAll('.accept-btn');
    const declineButtons = document.querySelectorAll('.decline-btn');
    
    acceptButtons.forEach(button => {
        button.addEventListener('click', function() {
            const requestItem = this.closest('.request-item');
            
            // You can add code here to handle the acceptance
            // For example, moving the accepted request to the friends list
            
            // For now, just remove the request item with animation
            requestItem.style.opacity = '0';
            setTimeout(() => {
                requestItem.remove();
            }, 300);
        });
    });
    
    declineButtons.forEach(button => {
        button.addEventListener('click', function() {
            const requestItem = this.closest('.request-item');
            
            // Simply remove the request item with animation
            requestItem.style.opacity = '0';
            setTimeout(() => {
                requestItem.remove();
            }, 300);
        });
    });
    
    // Add functionality for the Add Friend buttons
    const addFriendButtons = document.querySelectorAll('.add-friend-action');
    
    addFriendButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle button text between "ADD FRIEND" and "REQUESTED"
            if (this.textContent === 'ADD FRIEND') {
                this.textContent = 'REQUESTED';
                this.style.backgroundColor = '#999';
            } else {
                this.textContent = 'ADD FRIEND';
                this.style.backgroundColor = '#003366';
            }
        });
    });
});