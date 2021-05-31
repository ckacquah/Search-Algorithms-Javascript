import { createColorPicker } from "./color";

const startColorPicker = createColorPicker("#startColor", "#EE964B");

const stopColorPicker = createColorPicker("#stopColor", "#28AFB0");

const pathColorPicker = createColorPicker("#pathColor", "#F4D35E");

const emptyColorPicker = createColorPicker("#emptyColor", "#DEFFF2");

const obstacleColorPicker = createColorPicker("#obstacleColor", "#19647E");

export {
  startColorPicker,
  stopColorPicker,
  pathColorPicker,
  emptyColorPicker,
  obstacleColorPicker,
  createColorPicker,
};
