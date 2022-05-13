/*
Given an array of integers, find the pair of adjacent 
elements that has the largest product and return that 
product.

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.

Dada una matriz de enteros, encuentra el par de elementos 
adyacentes que tiene el producto más grande y devuelve ese 
producto.

Para inputArray = [3, 6, -2, -5, 7, 3], la salida debe ser 
solution(inputArray) = 21.

7 y 3 producen el producto más grande.
*/

const solution_004 = (inputArray: number[]) => {
    let majorProduct = 0;
    for (let index = 0; index < inputArray.length - 1; index++) {
        const firstValue: number = inputArray[index];
        const secondValue: number = inputArray[index + 1];
        const newProduct: number = firstValue * secondValue;
        if (newProduct > majorProduct) {
            majorProduct = newProduct;
        }
    }
};

console.log([3, 6, -2, -5, 7, 3]);
