/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

const solution_010 = (s1: string, s2: string): number => {
    let count: number = 0;
    const s1LettersCount: { [letter: string]: number } = countOfLetters(s1);
    const s2LettersCount: { [letter: string]: number } = countOfLetters(s2);
    const s1LettersKeys: string[] = Object.keys(s1LettersCount);
    for (const element of s1LettersKeys) {
        if (s1LettersCount[element] && s2LettersCount[element]) {
            count += Math.min(s1LettersCount[element], s2LettersCount[element]);
        }
    }
    return count;
};

const countOfLetters = (word: string): { [letter: string]: number } => {
    let result: { [letter: string]: number } = {};
    [...word.toLowerCase()].forEach((letter) => {
        if (!result[letter]) {
            result[letter] = 1;
        } else {
            result[letter] += 1;
        }
    });
    return result;
};

const s1_010: string = 'aabcc';
const s2_010: string = 'adcaa';

console.log(solution_010(s1_010, s2_010));
