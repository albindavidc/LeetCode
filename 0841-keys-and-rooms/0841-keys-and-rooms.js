/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    if(rooms.length < 1) return false;

    let queue = [0];
    let visited = new Set([0]);

    while(queue.length >0){
        let node = queue.shift();

        for(let key of rooms[node]){
            if(!visited.has(key)){
                visited.add(key);
                queue.push(key)
            }
        }

    }

    return rooms.length === visited.size

};