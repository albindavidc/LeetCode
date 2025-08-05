/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for(let asteroid of asteroids){
        let destroyed = false;

        while(stack.length && stack[stack.length -1] > 0 && asteroid < 0){
            let last = stack[stack.length -1];
            if(last < -asteroid){
                stack.pop();
                continue;
            }else if(last === -asteroid){
                stack.pop();
                destroyed = true;
                break;
            }else{
                destroyed = true;
                break;
            }
        }

        if(!destroyed){
            stack.push(asteroid);
        }
    }

    return stack
};