const socket = io();
const toneInput = document.getElementById("toneInput");
const submitToneButton = document.getElementById("submitTone");

submitToneButton.addEventListener("click", function () {
    const composition = toneInput.value;
    socket.emit("newTone", composition); // Sending composition to server
    toneInput.value = ""; // Clear input field
});

socket.on("newTone", (data) => {
    // Here you would trigger the flower blooming animation
    console.log("Received new tone:", data);
    bloomFlower();
});

function bloomFlower() {
    // this function would trigger p5.js bloom animation
}