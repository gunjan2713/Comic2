
// let Layer1Shape=document.getElementById("Layer_1")
// let Layer2Shape=document.getElementById("Layer_2")

// Layer1Shape.addEventListener("click", () => {
//     window.location.href = "scene3a.html";
// })

// Layer2Shape.addEventListener("click", () => {
//     window.location.href = "scene3b.html";
// })

let Layer1Path = document.getElementById("Layer_1_Path");
let Layer2Path = document.getElementById("Layer_2_Path");

document.addEventListener("click", function(event) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const yCoordinate = event.clientY;

    // Calculate the threshold percentage based on the viewport width
    const thresholdPercentage = (viewportWidth / 40); // Adjust as needed

    // Calculate the threshold based on the percentage of viewport height
    const threshold = (viewportHeight * thresholdPercentage) / 100;

    if (yCoordinate < threshold) {
        // Clicked in the upper part, treat it as Layer_1
        window.location.href = "scene3a.html";
    } else {
        // Clicked in the lower part, treat it as Layer_2
        window.location.href = "scene3b.html";
    }
});

