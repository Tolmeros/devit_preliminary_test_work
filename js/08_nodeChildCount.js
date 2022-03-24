const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');
p.appendChild(span);
div.appendChild(p);

function nodeChildCount(node, depth = null) {
  if (depth == 0) {
    return 0;
  }
  
  if (node.hasChildNodes()) {
    var count = node.childElementCount;
    for (const child of node.childNodes.values()) {
      count += nodeChildCount(child, depth-1);
    }
    return count;
  }

  return 0;
}

console.log(nodeChildCount(div)); // 2
console.log(nodeChildCount(div, 1)); // 1
console.log(nodeChildCount(div, 2)); // 2
