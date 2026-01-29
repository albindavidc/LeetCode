/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    if (source === destination) return true;

    let graph = Array.from({ length: n }, () => []);

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let visited = Array(n).fill(false);
    let queue = [source];
    visited[source] = true;

    while (queue.length > 0) {
        const node = queue.shift();

        for (let neighbour of graph[node]) {
            if (!visited[neighbour]) {
                if (neighbour === destination) return true;
                visited[neighbour] = true;
                queue.push(neighbour);
            }
        }
    }


    return false;
};