
const assert = require('assert');

const Graph = require('./graph');
const graphs = ['AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'];
const graph = new Graph(graphs);
// graph.printGraph()

/* CASE-1 */

try {
  assert.strictEqual(graph.calculateCost('ABE'), 4);
  assert.strictEqual(graph.calculateCost('AD'), 10);
  assert.strictEqual(graph.calculateCost('EACF'), 8);
  assert.strictEqual(graph.calculateCost('ADF'), `Invalid path`);
}
catch (err) {
  console.log(`CASE-1 Failure!\n`, err);
}


/* CASE-2 */

try {
  const { count: countED_4Stops, paths } = graph.countPossiblePaths('E', 'D', { stopsLimit: 4 });
  assert.strictEqual(countED_4Stops, 4);

  const { count: countEE_withoutRepeatition } = graph.countPossiblePaths('E', 'E');
  assert.strictEqual(countEE_withoutRepeatition, 5);

  const { count: countEE_with_2Repeatition_20CostThreshold } = graph.countPossiblePaths('E', 'E', { costThreshold: 20, visitLimit: 2 });
  assert.strictEqual(countEE_with_2Repeatition_20CostThreshold, 29);
}

catch (err) {
  console.log(`CASE-2 Failure!\n`, err);
}

/* CASE-3 */

try {
  const { cost: costED, path: pathED } = graph.findShortestPath('E', 'D');
  assert.strictEqual(costED, 9);
  assert.strictEqual(pathED, 'E -> B -> E -> A -> C -> F -> D');

  const { cost: costEE, path: pathEE } = graph.findShortestPath('E', 'E');
  assert.strictEqual(costEE, 6);
  assert.strictEqual(pathEE, 'E -> B -> E');
}

catch (err) {
  console.log(`CASE-3 Failure!\n`, err);
}

console.log('All Test Cases Successfully Passed.')