/*
Given a year, return the century it is in. The first 
century spans from the year 1 up to and including the 
year 100, the second - from the year 101 up to and 
including the year 200, etc.

Dado un año, devuelva el siglo en el que se encuentra. 
El primer siglo abarca desde el año 1 hasta el año 100 
inclusive, el segundo, desde el año 101 hasta el año 
200 inclusive, etc.

For year = 1905, the output should be solution(year) = 20;
For year = 1700, the output should be solution(year) = 17.

Para año = 1905, la salida debe ser solución (año) = 20;
Para año = 1700, la salida debe ser solución (año) = 17.
*/

const solution_002 = (year: number) => {
    const residue: number = year % 100;
    let century: number = Math.trunc(year / 100);

    if (residue > 0) {
        century++;
    }
    return century;
};

console.log(solution_002(2022));
