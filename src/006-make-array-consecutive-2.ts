/*
Ratiorg got statues of different sizes as a present from 
CodeMaster for his birthday, each statue having an 
non-negative integer size. Since he likes to make things 
perfect, he wants to arrange them from smallest to 
largest so that each statue will be bigger than the 
previous one exactly by 1. He may need some additional 
statues to be able to accomplish that. Help him figure 
out the minimum number of additional statues needed.

Ratiorg recibió estatuas de diferentes tamaños como regalo 
de CodeMaster para su cumpleaños, cada estatua tenía un 
tamaño entero no negativo. Como le gusta hacer las cosas 
perfectas, quiere ordenarlas de menor a mayor para que 
cada estatua sea más grande que la anterior exactamente 
en 1. Es posible que necesite estatuas adicionales para 
poder lograrlo. Ayúdalo a calcular el número mínimo de 
estatuas adicionales necesarias.
*/

const solution_006 = (arrayInput: number[]): number => {
    const min: number = Math.min(...arrayInput);
    const max: number = Math.max(...arrayInput);

    const resultNumbers: number[] = [];
    for (let index: number = min + 1; index < max; index++) {
        if (arrayInput.indexOf(index) === -1) {
            resultNumbers.push(index);
        }
    }
    return resultNumbers.length;
};

console.log(solution_006([6, 2, 3, 8]));
// almost-increasing-sequence
