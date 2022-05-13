/*
Ticket numbers usually consist of an even number of digits. 
A ticket number is considered lucky if the sum of the first 
half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Los números de boleto generalmente consisten en un número par de dígitos.
Un número de billete se considera afortunado si la suma de la primera mitad 
de los dígitos es igual a la suma de la segunda mitad.

Dado un número de boleto n, determine si es afortunado o no.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.
*/

const solution_011 = (n: number) => {
    // Integer number
    if (Math.floor(n) !== n) {
        return false;
    }
    // Even number
    if (n.toString().length % 2 !== 0) {
        return false;
    }
    const firstHalfString: string[] = [
        ...n.toString().substring(0, n.toString().length / 2),
    ];
    const firstHalfNumbers: number[] = firstHalfString.map((v) =>
        Number.parseInt(v)
    );
    const secondHalfString: string[] = [
        ...n.toString().substring(n.toString().length / 2, n.toString().length),
    ];
    const secondHalfNumbers: number[] = secondHalfString.map((v) =>
        Number.parseInt(v)
    );
    const firstSum: number = firstHalfNumbers.reduce((pv, cv) => cv + pv, 0);
    const secondSum: number = secondHalfNumbers.reduce((pv, cv) => cv + pv, 0);
    return firstSum === secondSum;
};

console.log(solution_011(239017));
