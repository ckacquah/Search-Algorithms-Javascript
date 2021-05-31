import { createGrid } from "./grid";
import { context, canvas } from "./canvas";

canvas.width = 900;
canvas.height = 400;

const grid = createGrid({
  context: context,
  gridWidth: canvas.width,
  gridHeight: canvas.height,
  gridXPadding: 10,
  gridYPadding: 10,
  gridXCellSpace: 9,
  gridYCellSpace: 9,
  gridXCellCount: 10,
  gridYCellCount: 5,
});

export { grid, canvas };
