// Open video modal
function openVideoModal() {
    const modal = document.getElementById("videoModal");
    modal.style.display = "flex";
}

// Close video modal
function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    modal.style.display = "none";
    modal.querySelector("video").pause(); // Pause the video when closing
}

// Close modal when clicking outside the video content
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeVideoModal();
    }
};
