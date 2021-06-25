import "jquery";
import "bootstrap";

import {
  startColorPicker,
  stopColorPicker,
  pathColorPicker,
  emptyColorPicker,
  obstacleColorPicker,
} from "./controls";

import { grid } from "./canvas";

import { drawNetwork } from "./draw";
import { createGraph } from "./search/structures";
import { depthFirstSearch } from "./search/algorithms";

const colorsPickers = [
  pathColorPicker,
  stopColorPicker,
  emptyColorPicker,
  startColorPicker,
  obstacleColorPicker,
];

const graph = createGraph(grid.gridXCellCount, grid.gridYCellCount);
graph.setStart(0, 0);
graph.setStop(19, 9);
graph.solve(depthFirstSearch);

let updated = true;

const draw = () => {
  if (updated) {
    grid.clear([256, 256, 256]);
    drawNetwork(grid, graph.network, colorsPickers);
    updated = false;
  }
  window.requestAnimationFrame(draw);
};

grid.init(draw);

export {
  colorsPickers,
  pathColorPicker,
  stopColorPicker,
  emptyColorPicker,
  startColorPicker,
  obstacleColorPicker,
};
