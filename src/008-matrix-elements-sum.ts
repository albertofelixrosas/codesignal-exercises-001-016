/*
After becoming famous, the CodeBots decided to move into a new 
building together. Each of the rooms has a different cost, and 
some of them are free, but there's a rumour that all the free 
rooms are haunted! Since the CodeBots are quite superstitious, 
they refuse to stay in any of the free rooms, or any of the 
rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each 
value represents the cost of the room, your task is to 
return the total sum of all rooms that are suitable for 
the CodeBots (ie: add up all the values that don't appear 
below a 0).
*/
const solution_008 = (matrix: Array<number[]>): number => {
    let total = 0;
    for (let i: number = 0; i < matrix.length; i++) {
        const auxArr = matrix[i];
        for (let j: number = 0; j < auxArr.length; j++) {
            const value: number = auxArr[j];
            if (i === 0) {
                total += value;
            } else {
                total += matrixHaveZeroOnIndex(matrix, i, j) ? 0 : value;
            }
        }
    }
    return total;
};

const matrixHaveZeroOnIndex = (
    matrix: Array<number[]>,
    indexArray: number,
    indexValue: number
): boolean => {
    for (let i = indexArray - 1; i >= 0; i--) {
        const value: number = matrix[i][indexValue];
        if (value === 0) {
            return true;
        }
    }
    return false;
};
const matrix_008: Array<number[]> = [
    [1, 1, 1, 0],
    [0, 5, 0, 1],
    [2, 1, 3, 10],
];

console.log(solution_008(matrix_008));
