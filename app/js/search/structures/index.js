import { buildCreateGraph } from "./graph";
import { NodeType, createNode } from "./node";

const createGraph = buildCreateGraph(createNode);

export { NodeType, createNode, createGraph };
