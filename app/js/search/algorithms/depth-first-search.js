import { NodeType } from "../structures";

export function depthFirstSearch(startNode, stopNode) {
  let currentNode, parentNode;
  const path = [];
  const queue = [];
  const visited = [];

  startNode.parent = null;
  queue.push(startNode);
  visited.push(startNode);
  parentNode = queue.shift();

  if (startNode === stopNode) {
    throw new Error(
      "[ERROR] depthFirstSearch(start, stop) -> start should not be equal to stop"
    );
  }

  do {
    for (let key in parentNode.neighbours) {
      currentNode = parentNode.neighbours[key];
      if (
        currentNode != null &&
        !visited.includes(currentNode) &&
        currentNode.type !== NodeType.NODE_TYPE_OBSTACLE
      ) {
        currentNode.parent = parentNode;
        if (currentNode !== stopNode) {
          queue.unshift(currentNode);
          visited.push(currentNode);
        } else break;
      }
    }
    parentNode = queue.shift();
  } while (currentNode !== stopNode);

  while (currentNode.parent) {
    path.push(currentNode);
    currentNode = currentNode.parent;
  }

  return Object.freeze({
    path,
    visited,
  });
}
