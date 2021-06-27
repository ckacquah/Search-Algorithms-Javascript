import "jquery";
import "bootstrap";

import { colorInputData } from "./controls";

import { grid } from "./canvas";

import { drawNetwork } from "./draw";
import {
  createGraph,
  NodeType,
  // breadthFistSearch,
  depthFirstSearch,
} from "./search";

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
graph.addRandomObstacles(50);

async function draw() {
  const _colorInputData = {};
  for (let key in colorInputData) {
    _colorInputData[key] = colorInputData[key].toRGBA();
  }
  grid.clear([256, 256, 256]);
  await drawNetwork(grid, graph, _colorInputData, colorsPickerIds);
}

let last = 0;
let paused = true;
let drawn = false;
let path = [];

setInterval(async () => {
  if (!drawn) {
    await draw();
    drawn = true;
  }
  if (!paused && graph != null && last != path.length) {
    await draw();
    path[path.length - 1 - last++].type = NodeType.NODE_TYPE_PATH;
  }
}, 100);

async function play(e) {
  e.preventDefault();
  graph.solve(depthFirstSearch);
  path = graph.getPath();
  paused = false;
}

async function pause(e) {
  e.preventDefault();
  paused = true;
}

async function reset(e) {
  e.preventDefault();
  if (path.length > 0) {
    for (let i = 0; i < path.length; i++) {
      path[i].type = NodeType.NODE_TYPE_EMPTY;
    }
    path = [];
  }
  last = 0;
  paused = true;
  await draw();
}

document.querySelector("#btn-play").addEventListener("click", play);
document.querySelector("#btn-pause").addEventListener("click", pause);
document.querySelector("#btn-reset").addEventListener("click", reset);
