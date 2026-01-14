function isHappy(n: number): boolean {
    function isHappy(n: number): boolean {
        let finalResult = new Set<number>();

        while (n !== 1 && !finalResult.has(n)) {
            finalResult.add(n)

            let result = 0;
            let stringed = n.toString();
            for (let i = 0; i < stringed.length; i++) {
                let mul = parseInt(stringed[i], 10);

                result += mul * mul
            }

            n = result;
        }

        return n === 1;
    };
};