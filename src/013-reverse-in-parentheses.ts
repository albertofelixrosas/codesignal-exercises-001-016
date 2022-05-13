/*
Write a function that reverses characters in (possibly nested) 
parentheses in the input string.

Input strings will always be well-formed with matching ()s.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Escriba una función que invierta los caracteres entre paréntesis 
(posiblemente anidados) en la cadena de entrada.

Las cadenas de entrada siempre estarán bien formadas con ()s 
coincidentes.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and 
then "foobazrabblim".
*/

const solution_013 = (s: string): string => {
    let result: string = s;
    while (result.includes('(')) {
        const indexOfClosingParenthesis: number = result.indexOf(')');
        const subStringPart: string = [
            ...result.substring(0, indexOfClosingParenthesis),
        ].join('');
        const invertedIndexOfOpeningParenthesis: number = [...subStringPart]
            .reverse()
            .indexOf('(');
        const indexOfOpeningParenthesis: number =
            subStringPart.length - invertedIndexOfOpeningParenthesis;
        const subStringPartWithoutParenthesis = result.substring(
            indexOfOpeningParenthesis,
            indexOfClosingParenthesis
        );
        const invertedSubStringPart = [...subStringPartWithoutParenthesis]
            .reverse()
            .join('');
        result = result.replace(
            `(${subStringPartWithoutParenthesis})`,
            invertedSubStringPart
        );
    }
    return result;
};

const inputString_013: string = 'foo(bar)baz';
console.log(solution_013(inputString_013));
