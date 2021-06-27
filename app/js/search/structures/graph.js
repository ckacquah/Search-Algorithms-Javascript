import { NodeType } from "./node";

export function buildCreateGraph(createNode) {
  return (x, y) => {
    const update = () => {};

    let path, visited, startNode, stopNode;

    const solve = (searchAlgorithm) => {
      const results = searchAlgorithm(startNode, stopNode);
      path = results.path;
      visited = results.visited;
      return Object.freeze({
        time: 0,
        path,
        visited,
      });
    };

    const generateRandomBlocks = (count) => {
      const indexes = [[], []];
      let exist, _x, _y;
      for (let i = 0; i < count; i++) {
        do {
          _x = Math.floor(Math.random() * x);
          _y = Math.floor(Math.random() * y);
          for (let j = 0; j < i; j++) {
            if (indexes[0][j] === x && indexes[1][j] === y) {
              exist = true;
            }
          }
        } while (
          exist &&
          _x !== stopNode.x &&
          _y !== stopNode.y &&
          _x !== startNode.x &&
          _y !== startNode.y
        );
        indexes[0].push(_x);
        indexes[1].push(_y);
      }
      return indexes;
    };

    const addRandomObstacles = (count) => {
      let obstacles = generateRandomBlocks(count);
      for (let i = 0; i < count; i++) {
        const x = obstacles[0][i];
        const y = obstacles[1][i];
        network[x][y].type = NodeType.NODE_TYPE_OBSTACLE;
      }
    };

    const network = [];

    const init = () => {
      let prevRow = [];
      for (let i = 0; i < x; i++) {
        const row = [];
        for (let j = 0; j < y; j++) {
          const newNode = createNode({ x: i, y: j });
          if (j > 0) {
            row[j - 1].neighbours.right = newNode;
            newNode.neighbours.left = row[j - 1];
          }
          if (prevRow.length !== 0) {
            prevRow[j].neighbours.down = newNode;
            newNode.neighbours.top = prevRow[j];
          }
          row.push(newNode);
        }
        network.push(row);
        prevRow = row;
      }
    };

    const setStart = (x, y) => {
      startNode = network[x][y];
      startNode.type = NodeType.NODE_TYPE_START;
    };

    const setStop = (x, y) => {
      stopNode = network[x][y];
      stopNode.type = NodeType.NODE_TYPE_STOP;
    };

    const getPath = () => path;

    const getVisited = () => visited;

    const getStop = () => stopNode;

    const getStart = () => startNode;

    const reset = () => {};

    const forward = () => {};

    const backward = () => {};

    const complete = () => {};

    return {
      network,
      path,
      visited,
      init,
      solve,
      reset,
      update,
      forward,
      backward,
      complete,
      setStop,
      setStart,
      getStop,
      getStart,
      getPath,
      getVisited,
      addRandomObstacles,
      generateRandomBlocks,
    };
  };
}
