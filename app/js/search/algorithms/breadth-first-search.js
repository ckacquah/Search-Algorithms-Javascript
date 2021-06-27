import { NodeType } from "../structures";

export function breadthFistSearch(startNode, stopNode) {
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
      "[ERROR] breadthFirstSearch(start, stop) -> start should not be equal to stop"
    );
  }

  do {
    if (parentNode == null) break;
    for (let key in parentNode.neighbours) {
      currentNode = parentNode.neighbours[key];
      if (
        currentNode != null &&
        !visited.includes(currentNode) &&
        currentNode.type !== NodeType.NODE_TYPE_OBSTACLE
      ) {
        currentNode.parent = parentNode;
        if (currentNode !== stopNode) {
          queue.push(currentNode);
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
