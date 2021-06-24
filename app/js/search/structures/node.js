const X_MAX = 10;
const Y_MAX = 20;

const NodeType = {
  NODE_TYPE_PATH: 1,
  NODE_TYPE_STOP: 2,
  NODE_TYPE_EMPTY: 3,
  NODE_TYPE_START: 4,
  NODE_TYPE_OBSTACLE: 5,
};

function createNode({
  x,
  y,
  type = NodeType.NODE_TYPE_EMPTY,
  heuristic = 0,
  neighbours = { top: null, down: null, left: null, right: null },
}) {
  if (Number.isInteger(x) && Number.isInteger(y) && x < X_MAX && y < Y_MAX) {
    return Object.freeze({
      x,
      y,
      type,
      heuristic,
      neighbours,
      parent: null,
    });
  } else {
    throw new Error(
      `createNode(x,y... x and y must be integers, where x < ${X_MAX} and y < ${Y_MAX}`
    );
  }
}

export { NodeType, createNode };
