import Pickr from "@simonwep/pickr";

function buildCreateColorPicker(colorInputData) {
  return (id) => {
    const colorPicker = _createColorPicker("#" + id, colorInputData[id]);
    colorPicker.on("change", (color) => {
      colorPicker.applyColor(false);
      colorInputData[id] = color;
    });
    return colorPicker;
  };
}

function _createColorPicker(id, defaultColor) {
  const colorPicker = Pickr.create({
    el: id,
    theme: "nano",

    default: defaultColor,

    swatches: [
      "rgba(244, 67, 54, 1)",
      "rgba(233, 30, 99, 1)",
      "rgba(156, 39, 176, 1)",
      "rgba(103, 58, 183, 1)",
      "rgba(63, 81, 181, 1)",
      "rgba(33, 150, 243, 1)",
      "rgba(3, 169, 244, 1)",
      "rgba(0, 188, 212, 1)",
      "rgba(0, 150, 136, 1)",
      "rgba(76, 175, 80, 1)",
      "rgba(139, 195, 74, 1)",
      "rgba(205, 220, 57, 1)",
      "rgba(255, 235, 59, 1)",
      "rgba(255, 193, 7, 1)",
    ],

    components: {
      preview: true,
      hue: true,

      interaction: {
        rgba: true,
        hex: true,
        input: true,
      },
    },
  });
  return colorPicker;
}

export { buildCreateColorPicker };
