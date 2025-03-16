// Add event listener for the submit button
document.getElementById('submit-comment').addEventListener('click', function() {
    const commentBox = document.getElementById('comment-box');
    const commentText = commentBox.value;

    // Check if the comment box is not empty
    if (commentText) {
        const commentsDisplay = document.getElementById('comments-display');
        const newComment = document.createElement('div');
        newComment.textContent = commentText;
        newComment.style.border = "1px solid #ff6f61"; // Match border color with header
        newComment.style.padding = "10px";
        newComment.style.margin = "5px 0";
        newComment.style.borderRadius = "5px";
        newComment.style.backgroundColor = "#ffe6e6"; // Light pink background
        commentsDisplay.appendChild(newComment);
        commentBox.value = ''; // Clear the comment box
    } else {
        alert("Please enter a comment before submitting.");
    }
});

// Function to create hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random fall duration
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove(); // Remove heart after animation
    }, 5000); // Match with animation duration
}

// Generate hearts every 300ms
setInterval(createHeart, 300);