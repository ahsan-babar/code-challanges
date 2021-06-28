# Graph
## Class to initialize Graph Data Structure

Graph is a javascript class that allows to feed edges of a graph in its Graph Data Structure.

## Features

- Intantiate graph with provided edges 
- Print Graph adjency list
- Calculate cost of path between nodes
- Compute all the possible paths between source and destination nodes
- Compute all the possible paths between source and destination nodes with constraint including cost, stops, and revisits
- Find the cheapest path between source and destination nodes
 
# Usage
## Graph Initialization: 

```
const edges = ['AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'];
const graph = new Graph(edges);
graph.printGraph();
// Output
// [
//     [ 'A', { B: 1, C: 4, D: 10 } ],
//     [ 'B', { E: 3 } ],
//     [ 'C', { D: 4, F: 2 } ],
//     [ 'D', { E: 1 } ],
//     [ 'E', { B: 3, A: 2 } ],
//     [ 'F', { D: 1 } ]
//   ]
```

## Calculate cost of Path:

```
console.log(graph.calculateCost('ABE')); // 4
console.log(graph.calculateCost('AD'));  // 10
console.log(graph.calculateCost('EACF'));// 8
console.log(graph.calculateCost('ADF')); // No D -> F edge found in graph. 
                                         // null
```

# Path counting constraints
- costThreshold: The exclusive upper bound of cost of a path, with default value as `Infinity`
- visitLimit: allowed edge repetition, with default value as `1`
- stopsLimit: allowed stop or number of edges between source and destination path, with default value as `Infinity`

## Count all possible paths without repetition

```
const { count: count1, paths } = graph.countPossiblePaths('E', 'D');
console.log(count1); // 18

const { count: count2 } = graph.countPossiblePaths('E', 'E');
console.log(count2); // 5
```

## Count all possible Paths with `stopsLimit` constraint

```
const { count, paths } = graph.countPossiblePaths('E', 'D', { stopsLimit: 4 });
console.log(count); // 4
console.log(paths);
// Output:
// [
//   { path: 'EBEAD', cost: 18 },
//   { path: 'EACD', cost: 10 },
//   { path: 'EACFD', cost: 9 },
//   { path: 'EAD', cost: 12 }
// ]
```

## Count all possible Paths with `costThreshold` and `visitLimit` constraints

```
const { count } = graph.countPossiblePaths('E', 'E', { costThreshold: 20, visitLimit: 2 });
console.log(count); // 29
```

## Find the cheapest path between source and destination nodes

```
console.log(
    graph.findShortestPath('E', 'D'), '\n', 
    graph.findShortestPath('E', 'E')
);

// Output:
// { path: 'E -> B -> E -> A -> C -> F -> D', cost: 9 } 
// { path: 'E -> B -> E', cost: 6 }
```

## Authors
- [Ahsan Babar](https://github.com/ahsan-babar)

