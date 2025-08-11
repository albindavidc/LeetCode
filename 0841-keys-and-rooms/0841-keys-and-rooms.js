/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    if(rooms.length <1) return false;

    let queue = [0];
    let visited = new Set([0]);

    while(queue.length >0){
        let node = queue.shift();

        for(let neighbour of rooms[node]){
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                queue.push(neighbour)
            }
        }
    }

    return rooms.length === visited.size
};