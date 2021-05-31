const createGrid = function (context) {
  context.lineJoin = "round";
  context.globalCompositeOperation = "lighter";
  return {
    ctx: context,
    init: () => {
      createNeonRect(context, 125, 125, 50, 50, 13, 213, 252);
    },
  };
};

const drawRectangle = function (gridContext, x, y, w, h, border) {
  gridContext.beginPath();
  gridContext.moveTo(x + border, y);
  gridContext.lineTo(x + w - border, y);
  gridContext.quadraticCurveTo(x + w - border, y, x + w, y + border);
  gridContext.lineTo(x + w, y + h - border);
  gridContext.quadraticCurveTo(x + w, y + h - border, x + w - border, y + h);
  gridContext.lineTo(x + border, y + h);
  gridContext.quadraticCurveTo(x + border, y + h, x, y + h - border);
  gridContext.lineTo(x, y + border);
  gridContext.quadraticCurveTo(x, y + border, x + border, y);
  gridContext.closePath();
  gridContext.stroke();
};

const createNeonRect = function (gridContext, x, y, w, h, r, g, b) {
  gridContext.shadowColor = "rgb(" + r + "," + g + "," + b + ")";
  gridContext.shadowBlur = 10;
  gridContext.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
  gridContext.lineWidth = 7.5;
  drawRectangle(gridContext, x, y, w, h, 1.5);
  gridContext.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
  gridContext.lineWidth = 6;
  drawRectangle(gridContext, x, y, w, h, 1.5);
  gridContext.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
  gridContext.lineWidth = 4.5;
  drawRectangle(gridContext, x, y, w, h, 1.5);
  gridContext.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
  gridContext.lineWidth = 3;
  drawRectangle(gridContext, x, y, w, h, 1.5);
  gridContext.strokeStyle = "#fff";
  gridContext.lineWidth = 1.5;
  drawRectangle(gridContext, x, y, w, h, 1.5);
};

export { createGrid, createNeonRect, drawRectangle };
