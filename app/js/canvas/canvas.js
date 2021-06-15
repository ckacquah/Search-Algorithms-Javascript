const canvas = document.getElementById("main-canvas");
const context = canvas.getContext("2d");

var rect = canvas.parentNode.getBoundingClientRect();
canvas.width = rect.width;
canvas.height = rect.height;

context.fillStyle = "#000";
context.fillRect(0, 0, canvas.width, canvas.height);

export { canvas, context };
