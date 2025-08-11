/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let queue = [];
    let visited = new Set();
    let provinces = 0;

    for(let i = 0; i<isConnected.length; i++){

        if(!visited.has(i)){
            provinces++;
            visited.add(i);
            queue.push(i);

            while(queue.length >0){
                let node = queue.shift();

                for(let j = 0; j< isConnected[i].length ; j++){
                    if(isConnected[node][j] === 1 && !visited.has(j)){
                        visited.add(j);
                        queue.push(j);
                    }
                }
            }
        }
    }
        return provinces
};