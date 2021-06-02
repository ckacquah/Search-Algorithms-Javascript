import { createGrid } from "./grid";
import { context, canvas } from "./canvas";

const grid = createGrid({
  context: context,
  gridWidth: canvas.width,
  gridHeight: canvas.height,
  gridXPadding: 30,
  gridYPadding: 30,
  gridXCellSpace: 12,
  gridYCellSpace: 12,
  gridXCellCount: 20,
  gridYCellCount: 10,
});

export { grid, canvas };
