document.addEventListener("DOMContentLoaded", function () {
    const butterflies = document.querySelectorAll(".butterfly");
    butterflies.forEach(butterfly => {
        butterfly.style.left = Math.random() * window.innerWidth + "px";
    });
});