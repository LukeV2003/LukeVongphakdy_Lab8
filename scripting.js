document.getElementById("enlarge-text-btn").addEventListener("click", () => {
    document.body.classList.toggle("enlarged-text");
});

document.getElementById("change-color-btn").addEventListener("click", () => {
    document.body.classList.toggle("alt-background");
});


document.getElementById("show-alt-text-btn").addEventListener("click", () => {
    const images = document.querySelectorAll(".gallery-image");
    const altTextArray = Array.from(images).map(img => img.alt).join(", ");
    document.getElementById("alt-text-display").innerText = "Alt Text: " + altTextArray;
});
