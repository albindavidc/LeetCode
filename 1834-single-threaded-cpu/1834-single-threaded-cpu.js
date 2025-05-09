/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    // Create array with index information and sort by enqueue time
    const taskInfo = tasks.map((task, idx) => [task[0], task[1], idx]);
    taskInfo.sort((a, b) => a[0] - b[0]);
    
    const result = [];
    let time = 0;
    let i = 0;
    
    // Use an array to store available tasks
    const available = [];
    
    while (result.length < tasks.length) {
        // Add all tasks that have arrived
        while (i < taskInfo.length && taskInfo[i][0] <= time) {
            available.push(taskInfo[i]);
            i++;
        }
        
        if (available.length === 0) {
            // No tasks available, jump to next arrival time
            if (i < taskInfo.length) {
                time = taskInfo[i][0];
                continue;
            } else {
                // No more tasks to process
                break;
            }
        }
        
        // Find the task with shortest processing time
        available.sort((a, b) => {
            // Sort by processing time first
            if (a[1] !== b[1]) {
                return a[1] - b[1];
            }
            // If processing times are equal, sort by original index
            return a[2] - b[2];
        });
        
        // Process the next task
        const [_, processingTime, originalIndex] = available.shift();
        result.push(originalIndex);
        time += processingTime;
    }
    
    return result;
};