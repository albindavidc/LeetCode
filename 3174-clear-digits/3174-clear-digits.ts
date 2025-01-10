function clearDigits(s: string): string {
    const stack: string[] = []; // Stack to store non-digit characters

    for (let char of s) {
        if (!isNaN(Number(char))) {
            // If the current character is a digit and the stack is not empty
            if (stack.length > 0) {
                stack.pop(); // Remove the closest non-digit to the left
            }
        } else {
            // If the character is not a digit, push it onto the stack
            stack.push(char);
        }
    }

    return stack.join(''); // Join remaining characters to form the result string
}
