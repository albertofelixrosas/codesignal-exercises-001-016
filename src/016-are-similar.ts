/*
Two arrays are called similar if one can be obtained from 
another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
solution(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
solution(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
solution(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.
*/

const solution_are_similar = (a: number[] = [], b: number[] = []): boolean => {
    let countOfErrors = 0;
    let indexOfError = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i] && countOfErrors === 0) {
            countOfErrors++;
            indexOfError = i;
        } else if (a[i] !== b[i]) {
            console.log(a[indexOfError]);
            console.log(b[i]);
            console.log(b[indexOfError]);
            console.log(a[i]);
            if (!(a[indexOfError] === b[i] && b[indexOfError] === a[i])) {
                return false;
            }
            countOfErrors++;
        }
    }
    return countOfErrors < 3;
};

const a_016: number[] = [1, 2, 3];
// [1, 2, 3]
const b_016: number[] = [1, 10, 2];
// [2, 1, 1]

console.log(solution_are_similar(a_016, b_016));
