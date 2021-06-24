export function buildCreateGraph(createNode) {
  return (x, y) => {
    const update = () => {};

    let path, visited, startNode, stopNode;

    const solve = (searchAlgorithm) => {
      path, (visited = searchAlgorithm(startNode, stopNode));
      return Object.freeze({
        time: 0,
        path,
        visited,
      });
    };

    const network = [];

    const init = () => {
      let prevRow = [];
      for (let i = 0; i < x; i++) {
        const row = [];
        for (let j = 0; j < y; j++) {
          const newNode = createNode(i, j);
          if (j > 0) {
            row[j - 1].neighbours.right = newNode;
            newNode.neighbours.left = row[j - 1];
          }
          if (prevRow) {
            prevRow[j].neighbours.down = newNode;
            newNode.neighbours.top = prevRow[j];
          }
          row.push(newNode);
        }
        network.push(row);
        prevRow = row;
      }
    };

    const reset = () => {};

    const forward = () => {};

    const backward = () => {};

    const complete = () => {};

    return Object.freeze({
      network,
      path,
      visited,
      startNode,
      stopNode,
      init,
      solve,
      reset,
      update,
      forward,
      backward,
      complete,
    });
  };
}
