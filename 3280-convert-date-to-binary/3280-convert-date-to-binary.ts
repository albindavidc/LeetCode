function convertDateToBinary(date: string): string {
    const [year, month, day] = date.split('-');

    const yearBinary = parseInt(year).toString(2);
    const monthBinary = parseInt(month).toString(2);
    const dayBinary = parseInt(day).toString(2);

    return `${yearBinary}-${monthBinary}-${dayBinary}`
};