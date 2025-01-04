function finalPositionOfSnake(n: number, commands: string[]): number {
    let row = 0;
    let column = 0;

    for (const num of commands) {
        switch (num) {
            case 'UP':
                row -= 1;
                break;
            case 'DOWN':
                row += 1;
                break;
            case 'RIGHT':
                column += 1;
                break;
            case 'LEFT':
                column -= 1;
                break;
        }
    }
    return (row * n) + column;
};