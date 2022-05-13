/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].
*/

const solution_009 = (words: string[]): string[] => {
    const largestLength = largestWordLength(words);
    return words.filter((val) => val.length === largestLength);
};

const largestWordLength = (words: string[]): number => {
    let maxLength = 0;
    for (const element of words) {
        if (element.length > maxLength) {
            maxLength = length;
        }
    }
    return maxLength;
};

console.log(solution_009(['aba', 'aa', 'ad', 'vcd', 'aba']));
