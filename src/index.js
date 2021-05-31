import "jquery";
import "bootstrap";

import {
  startColorPicker,
  stopColorPicker,
  pathColorPicker,
  emptyColorPicker,
  obstacleColorPicker,
} from "./lib/controls";

import { grid } from "./lib/canvas";

grid.init();

export {
  grid,
  startColorPicker,
  stopColorPicker,
  pathColorPicker,
  emptyColorPicker,
  obstacleColorPicker,
};
