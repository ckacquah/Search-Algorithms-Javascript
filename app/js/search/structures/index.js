import { buildCreateGraph } from "./graph";
import { NodeType, createNode } from "./node";

const createGraph = (x, y) => {
  const graph = buildCreateGraph(createNode)(x, y);
  graph.init();
  return graph;
};

export { NodeType, createNode, createGraph };
