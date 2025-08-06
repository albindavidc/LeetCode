/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let radiant = [];
    let dire = [];

    let i = 0
    for(let member of senate){
        if(member === 'R'){
            radiant.push(i);
        }else{
            dire.push(i);
        }

        i++
    }

    while(radiant.length && dire.length){
        let rIndex = radiant.shift();
        let dIndex = dire.shift();

        if(rIndex < dIndex){
            radiant.push(rIndex + senate.length)
        }else{
            dire.push(dIndex + senate.length)
        }
    }

    return radiant.length ? 'Radiant' : 'Dire'
};