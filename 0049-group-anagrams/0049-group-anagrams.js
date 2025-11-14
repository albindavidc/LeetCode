/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [];
    let signature = [];

    for(let i = 0; i<strs.length; i++){
        let sorted = strs[i].split('').sort().join('');
        signature.push(sorted);
    }

    let used = Array(strs).fill(false);

    for(let i =0; i<strs.length; i++){
        if(used[i]) continue;

        let grp  = [strs[i]];
        used[i] = true;

        for(let j = 0; j<strs.length; j++){
            if(!used[j] && signature[i] === signature[j]){
                grp.push(strs[j]);
                used[j] = true;
            }
        }

        result.push([...grp])
    }

    return result
};