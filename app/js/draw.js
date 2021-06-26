export function drawNetwork(grid, graph, colorInputData, colorsPickerIds) {
  const network = graph.network;
  for (let i = 0; i < network.length; i++) {
    for (let j = 0; j < network[i].length; j++) {
      const node = network[i][j];
      grid.drawCell(i, j, colorInputData[colorsPickerIds[node.type]]);
    }
  }
}
