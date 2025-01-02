function isBalanced(num: string): boolean {
    let digit = num.split('').map(Number);

    let evenSum = 0;
    let oddSum = 0;

    for(let i =0; i<digit.length; i++){
        if(i % 2 === 0){
            evenSum += digit[i]
        }else{
            oddSum += digit[i]
        }
    }

    return evenSum === oddSum;
};