export function drawNetwork(grid, graph, colorsPickers) {
  const network = graph.network;
  for (let i = 0; i < network.length; i++) {
    for (let j = 0; j < network[i].length; j++) {
      const node = network[i][j];
      grid.drawCell(i, j, colorsPickers[node.type].getColor().toRGBA());
    }
  }
}
