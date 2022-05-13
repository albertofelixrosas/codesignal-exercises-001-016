/*
Below we will define an n-interesting polygon. 
Your task is to find the area of a polygon for a given n.

A continuación definiremos un polígono n-interesante.
Tu tarea es encontrar el área de un polígono para un n dado.
*/

const solution_005 = (n: number) => {
    let result: number = 0;
    let width: number = n + (n - 1);
    result = width;
    let row: number = width - 2;
    for (let i = 0; i < n - 1; i++) {
        result += row * 2;
        row -= 2;
    }
    return result;
};

console.log(4);
