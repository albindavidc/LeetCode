/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = Array.from({length: n}, () => []);

    for(let [a,b] of connections){
        graph[a].push([b, 1]);
        graph[b].push([a, 0])
    }

    let changes = 0;

    function dfs(node, parent){
        for(let [neighbour, reverse] of graph[node]){
            if(parent === neighbour) continue;

            changes += reverse;
            dfs(neighbour, node);
        }
    }

    dfs(0, -1);
    return changes;
};