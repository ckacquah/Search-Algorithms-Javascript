import { createGrid } from "./grid";
import { context, canvas } from "./canvas";

canvas.width = 1000;
canvas.height = 500;

const grid = createGrid({
  context: context,
  gridWidth: canvas.width,
  gridHeight: canvas.height,
  gridXPadding: 10,
  gridYPadding: 10,
  gridXCellSpace: 10,
  gridYCellSpace: 10,
  gridXCellCount: 20,
  gridYCellCount: 10,
});

export { grid, canvas };
