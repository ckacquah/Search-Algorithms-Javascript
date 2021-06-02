import "jquery";
import "bootstrap";

import {
  startColorPicker,
  stopColorPicker,
  pathColorPicker,
  emptyColorPicker,
  obstacleColorPicker,
} from "./lib/controls";

import { grid, canvas } from "./lib/canvas";

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
