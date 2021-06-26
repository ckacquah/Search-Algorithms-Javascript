import "jquery";
import "bootstrap";

import { colorInputData } from "./controls";

import { grid } from "./canvas";

import { drawNetwork } from "./draw";
import { createGraph, NodeType } from "./search/structures";
import { breadthFistSearch } from "./search/algorithms";

const colorsPickerIds = [
  "pathColor",
  "stopColor",
  "emptyColor",
  "startColor",
  "obstacleColor",
];

const graph = createGraph(grid.gridXCellCount, grid.gridYCellCount);
graph.setStart(0, 0);
graph.setStop(19, 9);
graph.solve(breadthFistSearch);

let last = 0;

function updateGraph() {
  setInterval(() => {
    if (graph != null && last != graph.getPath().length) {
      const _colorInputData = {};
      for (let key in colorInputData) {
        _colorInputData[key] = colorInputData[key].toRGBA();
      }
      grid.clear([256, 256, 256]);
      drawNetwork(grid, graph, _colorInputData, colorsPickerIds);
      graph.getPath()[graph.getPath().length - 1 - last++].type =
        NodeType.NODE_TYPE_PATH;
    }
  }, 500);
}

updateGraph();
