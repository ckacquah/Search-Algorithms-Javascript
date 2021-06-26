const createGrid = function ({
  context,
  gridWidth,
  gridHeight,
  gridXPadding,
  gridYPadding,
  gridXCellSpace,
  gridYCellSpace,
  gridXCellCount,
  gridYCellCount,
}) {
  context.lineJoin = "round";
  context.globalCompositeOperation = "lighter";
  const gridXCellSize = calculateCellSize({
    size: gridWidth,
    count: gridXCellCount,
    space: gridXCellSpace,
    padding: gridXPadding,
  });
  const gridYCellSize = calculateCellSize({
    size: gridHeight,
    count: gridYCellCount,
    space: gridYCellSpace,
    padding: gridYPadding,
  });
  const clear = (color) => {
    context.clearRect(0, 0, gridWidth, gridHeight);
    const fillColor =
      "rgba(" + color[0] + "," + color[1] + "," + color[2] + ", 0.2 )";
    context.fillStyle = fillColor;
    context.fillRect(0, 0, gridWidth, gridHeight);
  };
  const drawCell = (x, y, color) => {
    drawGridCell({
      blur: 10,
      color,
      context,
      gridXIndex: x,
      gridYIndex: y,
      gridXPadding,
      gridYPadding,
      gridXCellSize,
      gridYCellSize,
      gridXCellSpace,
      gridYCellSpace,
    });
  };

  return {
    clear,
    drawCell,
    context,
    gridWidth,
    gridHeight,
    gridXPadding,
    gridYPadding,
    gridXCellSize,
    gridYCellSize,
    gridXCellSpace,
    gridYCellSpace,
    gridXCellCount,
    gridYCellCount,
  };
};

const drawGridCell = function ({
  blur,
  color,
  context,
  gridXIndex,
  gridYIndex,
  gridXPadding,
  gridYPadding,
  gridXCellSize,
  gridYCellSize,
  gridXCellSpace,
  gridYCellSpace,
}) {
  drawNeonRect({
    context,
    startX: calculateCellStart({
      padding: gridXPadding,
      index: gridXIndex,
      space: gridXCellSpace,
      size: gridXCellSize,
    }),
    startY: calculateCellStart({
      padding: gridYPadding,
      index: gridYIndex,
      space: gridYCellSpace,
      size: gridYCellSize,
    }),
    width: gridXCellSize,
    height: gridYCellSize,
    color,
    blur,
  });
};

const calculateCellSize = ({ padding, count, space, size }) =>
  (size - 2 * padding - (count - 1) * space) / count;

const calculateCellStart = ({ padding, index, space, size }) =>
  padding + index * (space + size);

const drawRectangle = function ({
  context,
  startX,
  startY,
  width,
  height,
  border,
}) {
  context.beginPath();
  context.moveTo(startX + border, startY);
  context.lineTo(startX + width - border, startY);
  context.quadraticCurveTo(
    startX + width - border,
    startY,
    startX + width,
    startY + border
  );
  context.lineTo(startX + width, startY + height - border);
  context.quadraticCurveTo(
    startX + width,
    startY + height - border,
    startX + width - border,
    startY + height
  );
  context.lineTo(startX + border, startY + height);
  context.quadraticCurveTo(
    startX + border,
    startY + height,
    startX,
    startY + height - border
  );
  context.lineTo(startX, startY + border);
  context.quadraticCurveTo(startX, startY + border, startX + border, startY);
  context.closePath();
  context.stroke();
};

const drawNeonRect = function ({
  context,
  startX,
  startY,
  width,
  height,
  color,
  blur,
}) {
  const border = 1.5;
  const strokeColor =
    "rgba(" + color[0] + "," + color[1] + "," + color[2] + ", 1.0)";
  const shadowColor =
    "rgba(" + color[0] + "," + color[1] + "," + color[2] + ", 0.2 )";
  context.shadowBlur = blur;
  context.shadowColor = shadowColor;
  context.strokeStyle = strokeColor;
  context.lineWidth = blur * 0.75;
  drawRectangle({ context, startX, startY, width, height, border });
  context.strokeStyle = strokeColor;
  context.lineWidth = blur * 0.65;
  drawRectangle({ context, startX, startY, width, height, border });
  context.strokeStyle = strokeColor;
  context.lineWidth = blur * 0.45;
  drawRectangle({ context, startX, startY, width, height, border });
  context.strokeStyle = strokeColor;
  context.lineWidth = blur * 0.25;
  drawRectangle({ context, startX, startY, width, height, border });
  context.strokeStyle = "#fff";
  context.lineWidth = blur * 0.15;
  drawRectangle({ context, startX, startY, width, height, border });
  context.fillStyle = strokeColor;
  context.fillRect(startX, startY, width, height);
};

export { createGrid };
