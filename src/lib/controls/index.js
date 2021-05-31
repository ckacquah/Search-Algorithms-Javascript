import { buildCreateColorPicker } from "./color";

const colorInputData = {
  startColor: "#EE964B",
  stopColor: "#28AFB0",
  pathColor: "#F4D35E",
  emptyColor: "#DEFFF2",
  obstacleColor: "#19647E",
};

const createColorPicker = buildCreateColorPicker(colorInputData);

const stopColorPicker = createColorPicker("stopColor");
const pathColorPicker = createColorPicker("pathColor");
const startColorPicker = createColorPicker("startColor");
const emptyColorPicker = createColorPicker("emptyColor");
const obstacleColorPicker = createColorPicker("obstacleColor");

export {
  colorInputData,
  stopColorPicker,
  pathColorPicker,
  startColorPicker,
  emptyColorPicker,
  obstacleColorPicker,
};
