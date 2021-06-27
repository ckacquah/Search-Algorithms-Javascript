import { NodeType } from "./node";

export function buildCreateGraph(createNode) {
  return (x, y) => {
    const update = () => {};

    let path, visited, startNode, stopNode, obstacles, obstacleCount;

    const solve = (searchAlgorithm) => {
      const t0 = performance.now();
      const results = searchAlgorithm(startNode, stopNode);
      const t1 = performance.now();
      path = results.path;
      visited = results.visited;
      return Object.freeze({
        time: t1 - t0,
        path,
        visited,
      });
    };

    const generateRandomBlocks = (count) => {
      obstacles = [[], []];
      let exist, _x, _y;
      for (let i = 0; i < count; i++) {
        do {
          _x = Math.floor(Math.random() * x);
          _y = Math.floor(Math.random() * y);
          for (let j = 0; j < i; j++) {
            if (obstacles[0][j] === x && obstacles[1][j] === y) {
              exist = true;
              break;
            }
          }
        } while (
          exist ||
          (_x === stopNode.x && _y === stopNode.y) ||
          (_x === startNode.x && _y === startNode.y)
        );
        obstacles[0].push(_x);
        obstacles[1].push(_y);
      }
      return obstacles;
    };

    const addRandomObstacles = (count) => {
      obstacleCount = count;
      generateRandomBlocks(count);
      for (let i = 0; i < count; i++) {
        const _x = obstacles[0][i];
        const _y = obstacles[1][i];
        network[_x][_y].type = NodeType.NODE_TYPE_OBSTACLE;
      }
    };

    const removeRandomObstacles = () => {
      for (let i = 0; i < obstacleCount; i++) {
        const _x = obstacles[0][i];
        const _y = obstacles[1][i];
        network[_x][_y].type = NodeType.NODE_TYPE_EMPTY;
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
      removeRandomObstacles,
      generateRandomBlocks,
    };
  };
}
