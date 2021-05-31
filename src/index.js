import "./styles.scss";

import "jquery";
import "popper.js";
import "bootstrap";

import { createColorPicker } from "./lib/controllers";

// eslint-disable-next-line no-unused-vars
const startColorPicker = createColorPicker(
  "#startColor",
  "#EE964B",
  // eslint-disable-next-line no-unused-vars
  function (color, source, instance) {
    console.log("#startColor picker is being changed");
  }
);

// eslint-disable-next-line no-unused-vars
const stopColorPicker = createColorPicker(
  "#stopColor",
  "#28AFB0",
  // eslint-disable-next-line no-unused-vars
  function (color, source, instance) {
    console.log("#startColor picker is being changed");
  }
);

// eslint-disable-next-line no-unused-vars
const emptyColorPicker = createColorPicker(
  "#emptyColor",
  "#19647E",
  // eslint-disable-next-line no-unused-vars
  function (color, source, instance) {
    console.log("#startColor picker is being changed");
  }
);

// eslint-disable-next-line no-unused-vars
const obstacleColorPicker = createColorPicker(
  "#obstacleColor",
  "#F4D35E",
  // eslint-disable-next-line no-unused-vars
  function (color, source, instance) {
    console.log("#startColor picker is being changed");
  }
);
