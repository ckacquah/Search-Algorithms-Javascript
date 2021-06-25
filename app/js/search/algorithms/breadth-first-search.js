import { NodeType } from "../structures";

export function breadthFistSearch(startNode, stopNode) {
  let currentNode, parentNode;
  const path = [];
  const queue = [];
  const visited = [];

  startNode.parent = null;
  queue.push(startNode);
  visited.push(startNode);
  parentNode = queue.pop();

  do {
    if (parentNode !== stopNode) {
      for (let key in parentNode.neighbours) {
        currentNode = parentNode.neighbours[key];
        if (currentNode.type !== NodeType.NODE_TYPE_OBSTACLE) {
          currentNode.parent = parentNode;
          if (currentNode !== stopNode) {
            queue.push(startNode);
            visited.push(currentNode);
          }
        }
      }
      parentNode = queue.pop();
    }
  } while (parentNode !== stopNode);

  currentNode = parentNode;
  while (currentNode.parent) {
    currentNode.type = NodeType.NODE_TYPE_PATH;
    path.push(currentNode);
    currentNode = currentNode.parent;
    return Object.freeze({
      path,
      visited,
    });
  }
}
