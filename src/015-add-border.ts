/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/
const solution_015 = (picture: string[]) => {
    const len: number = picture[0].length + 2;
    const arrayResult: string[] = picture.map((v) => `*${v}*`);
    const stringConAsteriscos: string = ''.padStart(len, '*');
    arrayResult.unshift(stringConAsteriscos);
    arrayResult.push(stringConAsteriscos);
    return arrayResult;
};
const pictureExample: string[] = ['abc', 'ded'];
console.log(solution_015(pictureExample));
