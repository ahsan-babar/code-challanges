
class Graph {

  constructor(edges) {
    this.nodes = {};
    this.initializeGraph(edges)
  }

  initializeGraph(edges) {

    for (const edge of edges) {


      const from = edge.slice(0, 1);

      if (!this.nodes.hasOwnProperty(from))
        this.nodes[from] = {};

      const to = edge.slice(1, 2);

      if (!this.nodes[from].hasOwnProperty(to))
        this.nodes[from][to] = parseInt(edge.slice(2));

    }
  }

  shortestDistanceNode(distances, visited) {
    let nearest = null;

    for (const [node, cost] of Object.entries(distances)) {

      if ((nearest === null || cost < distances[nearest].cost) && !visited.includes(node))
        nearest = node;

    }
    return nearest;
  }

  executeDijkstraAlgo(source, destination, distances = {}, visited = []) {

    if (source == null)
      return distances;

    const children = this.nodes[source];

    for (const [node, cost] of Object.entries(children)) {

      if (node == source) continue;

      const newCost = cost + distances[source].cost;

      if (newCost < distances[node].cost || distances[node].cost == 0)
        distances[node] = { cost: newCost, prev: source };
    }

    visited.push(source);

    return this.executeDijkstraAlgo(this.shortestDistanceNode(distances, visited), destination, distances, visited);

  }

  getVertices() {
    return Object.keys(this.nodes);
  }

  printGraph() {
    console.log(Object.entries(this.nodes));
  }

  calculateCost(path, total = 0) {

    if (path.length == 1) {
      return total;
    }

    const [source, destination] = [...path.slice(0, 2)];

    if (this.nodes.hasOwnProperty(source) && this.nodes[source].hasOwnProperty(destination)) {
      const distance = this.nodes[source][destination];
      return this.calculateCost(path.slice(1), total + distance);
    }
    else {
      // console.log(`No ${source} -> ${destination} edge found in graph.`);
      return 'Invalid path';
    }

  }

  countPossiblePaths(source, destination, { costThreshold = Infinity, visitLimit = 1, stopsLimit = Infinity } = {}, count = [0], visited = [], path = '', cost = 0, paths = []) {

    const stops = visited.length;
    const recentVisit = visited.pop() || null;
    const countOccurrences = (arr, val) => arr.reduce((accumulator, current) => (current === val ? accumulator + 1 : accumulator), 0);
    const visitsCount = countOccurrences(visited, recentVisit);
    const occurrence = recentVisit && visitsCount > visitLimit ? true : false;

    if (recentVisit)
      visited.push(recentVisit)

    let revisitsCheck = !occurrence;

    if (source == destination && cost > 0 && cost < costThreshold && stops <= stopsLimit) {

      if (revisitsCheck) {
        count[0] += 1;
        paths.push({ path: path + source, cost })

        if (costThreshold == Infinity) return;

      }

    }

    if (revisitsCheck) {

      const children = Object.keys(this.nodes[source]);

      for (const child of children) {
        this.countPossiblePaths(
          child, destination, { costThreshold, visitLimit, stopsLimit }, count,
          [...visited, source + child], path + source, cost + this.nodes[source][child], paths
        );
      }
      return { paths, count: count[0] };
    }
  }

  findShortestPath(source, destination) {

    const distances = {};
    for (const vertex of this.getVertices()) {
      distances[vertex] = { cost: Infinity, prev: null };
    }

    distances[destination] = { cost: Infinity, prev: null };
    distances[source] = { cost: 0, prev: null };

    const mapping = this.executeDijkstraAlgo(source, destination, distances, []);
    // console.log(mapping)

    let { cost, prev } = mapping[destination];
    let path = destination;

    while (prev) {
      path = `${prev} -> ${path}`
      prev = mapping[prev].prev;

      if (path.indexOf(prev) > 0) {
        path = `${prev} -> ${path}`
        break;
      }
    }

    return { path, cost };
  }

}

module.exports = Graph;