/*
Some people are standing in a row in a park. There are trees between 
them which cannot be moved. Your task is to rearrange the people by 
their heights in a non-descending order without moving the trees. 
People can be very tall!
*/
// For array = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be

const solution_012 = (array: number[]): number[] => {
    const notMinusOneNumbers: number[] = array
        .filter((v) => v !== -1)
        .sort((a, b) => a - b);
    const resultArray: number[] = [];
    for (let i = 0, j = 0; i < array.length; i++) {
        let newValue = 0;
        if (array[i] === -1) {
            newValue = array[i];
        } else {
            newValue = notMinusOneNumbers[j];
            j++;
        }
        resultArray.push(newValue);
    }
    return resultArray;
};
console.log(solution_012([-1, 150, 190, 170, -1, -1, 160, 180]));
