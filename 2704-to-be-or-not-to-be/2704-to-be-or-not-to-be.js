/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe(value){
            if(value === val){
                return true;
            }else{
                throw 'Not Equal'
            }
        },

        notToBe(value){
            if(value !== val){
                return true;
            }else{
                throw  'Equal'
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */