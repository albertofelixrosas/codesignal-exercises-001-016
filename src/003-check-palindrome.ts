/*
Given the string, check if it is a palindrome.

For inputString = "aabaa", the output should be solution(inputString) = true;
For inputString = "abac", the output should be solution(inputString) = false;
For inputString = "a", the output should be solution(inputString) = true.

Dada la cuerda, comprueba si es un palíndromo.

Para inputString = "aabaa", la salida debe ser solution(inputString) = true;
Para inputString = "abac", la salida debe ser solution(inputString) = false;
Para inputString = "a", la salida debe ser solution(inputString) = true.
*/

const isPalindrome = (input: string) => [...input].reverse().join('') === input;

console.log(isPalindrome('bob'));
