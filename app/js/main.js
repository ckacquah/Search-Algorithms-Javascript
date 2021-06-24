import "jquery";
import "bootstrap";

import {
  startColorPicker,
  stopColorPicker,
  pathColorPicker,
  emptyColorPicker,
  obstacleColorPicker,
} from "./controls";

import { grid, canvas } from "./canvas";

grid.init();

export {
  grid,
  canvas,
  startColorPicker,
  stopColorPicker,
  pathColorPicker,
  emptyColorPicker,
  obstacleColorPicker,
};
