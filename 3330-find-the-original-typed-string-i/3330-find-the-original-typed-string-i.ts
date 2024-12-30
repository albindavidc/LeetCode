function possibleStringCount(word: string): number {

    let result = 1;
    let i =0;

    while(i < word.length){
        let count = 1;

        while(i+1 < word.length && word[i] === word[i+1]){
            count++;
            i++;
        }

        if(count > 1){
            result += count  - 1;
        }
        i++;
    }
    
    return result;
};