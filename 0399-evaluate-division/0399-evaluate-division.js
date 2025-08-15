/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let graph = {};

    for(let i = 0; i<equations.length; i++){
        let [a,b] = equations[i];
        let val = values[i];

        if(!graph[a]) graph[a] = [];
        if(!graph[b]) graph[b] = [];

        graph[a].push([b, val]);
        graph[b].push([a, 1/val]);
    }

    let dfs = (start, end, visited) => {
        if(!graph[start] || !graph[end]) return -1.0;
        if(start === end) return 1.0;

        visited.add(start);

        for(let [neighbour, weight] of graph[start]){
            if(!visited.has(neighbour)){
                let result = dfs(neighbour, end, visited);
                if(result !== -1.0){
                    return result * weight;
                }
            }
        }

        return -1.0
    }

    let result = [];
    for(let [a,b] of queries){
        result.push(dfs(a,b,new Set()))
    }

    return result
};