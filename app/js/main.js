import "jquery";
import "bootstrap";
import "./controls";

import {
  startColorPicker,
  stopColorPicker,
  pathColorPicker,
  emptyColorPicker,
  obstacleColorPicker,
} from "./controls";

import { grid, canvas } from "./canvas";

grid.init();

console.log(canvas);

export {
  grid,
  canvas,
  startColorPicker,
  stopColorPicker,
  pathColorPicker,
  emptyColorPicker,
  obstacleColorPicker,
};