const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("color");
const sizePicker = document.getElementById("size");
const clearButton = document.getElementById("clear");

canvas.width = 500;
canvas.height = 400;

let drawing = false;
let brushColor = "#000000";
let brushSize = 5;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", draw);

colorPicker.addEventListener("change", (e) => brushColor = e.target.value);
sizePicker.addEventListener("input", (e) => brushSize = e.target.value);
clearButton.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));

function draw(event) {
    if (!drawing) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = brushColor;

    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}
