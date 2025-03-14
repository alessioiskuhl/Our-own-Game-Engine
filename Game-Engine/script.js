const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

// Game Loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(100, 100, 50, 50);
    
    requestAnimationFrame(gameLoop);
}

gameLoop();

