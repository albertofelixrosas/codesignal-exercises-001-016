/*
Varias personas están de pie en una fila y deben dividirse en dos equipos. 
La primera persona entra en el equipo 1 , la segunda entra en el equipo 2 , 
la tercera entra de nuevo en el equipo 1 , la cuarta en el equipo 2 , y 
así sucesivamente.

Se le da una matriz de números enteros positivos: los pesos de las personas. 
Devuelve una matriz de dos enteros, donde el primer elemento es el peso 
total del equipo 1 y el segundo elemento es el peso total del equipo 2 
después de completar la división.

Ejemplo

Para a = [50, 60, 60, 45, 70], la salida debería ser
solution(a) = [180, 105].
*/

const solution_014 = (a: number[]): number[] => {
    const pairNumbers: number[] = a.filter((_v, i) => i % 2 === 0);
    const oddNumbers: number[] = a.filter((_v, i) => i % 2 !== 0);
    const totalWeightOfTeam1: number = pairNumbers.reduce((p, c) => p + c, 0);
    const totalWeightOfTeam2: number = oddNumbers.reduce((p, c) => p + c, 0);
    return [totalWeightOfTeam1, totalWeightOfTeam2];
};

const alternating_sums_arr_014 = [50, 60, 60, 45, 70];

console.log(solution_014(alternating_sums_arr_014));
