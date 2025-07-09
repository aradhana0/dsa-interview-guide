/**
*
* Graph Representation
* Concept: How to store and navigate graphs efficiently. Choose based on graph density and operations required.
** Common Questions:
*** Design a data structure for graph traversal.
*** Convert edge list to adjacency list.
* 
**/
// Adjacency List
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B'],
  E: ['C']
};

// Adjacency Matrix
const matrix = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0]
];

// Edge List
const edges = [
  ['A', 'B'], ['A', 'C'], ['B', 'D'], ['C', 'E']
];

/**
*
* Graph Traversal
** Concept: Visit all nodes or connected components. 
*** DFS is good for backtracking, 
*** BFS for shortest paths in unweighted graphs.
* Common Questions:
* 1. Number of connected components
* 2. Detect if graph is connected
* 3. Clone a graph
*
**/
// Depth-First Search (DFS)
function dfs(graph, node, visited=new Set()){
  if(visited.has(node)) return;
  visited.add(node);
  console.log(node); // log or add nodes to result list
  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}
    
    
