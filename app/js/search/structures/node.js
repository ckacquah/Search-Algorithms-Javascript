const NodeType = {
  NODE_TYPE_PATH: 0,
  NODE_TYPE_STOP: 1,
  NODE_TYPE_EMPTY: 2,
  NODE_TYPE_START: 3,
  NODE_TYPE_OBSTACLE: 4,
};

function createNode({
  x,
  y,
  type = NodeType.NODE_TYPE_EMPTY,
  heuristic = 0,
  neighbours = { top: null, down: null, left: null, right: null },
}) {
  return {
    x,
    y,
    type,
    heuristic,
    neighbours,
    parent: null,
  };
}

export { NodeType, createNode };
