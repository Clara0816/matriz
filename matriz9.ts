/*
9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
*/

console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number[][] = [];
let soma: number = 0

for(let i = 0; i < 6; i++){
    minhaMatriz[i] = [];
    for(let j = 0; j < 6; j++){
        let n1: number = parseInt(teclado(`Digite o número que vai estar no endereço [${i}, ${j}] da matriz:`));
        minhaMatriz[i][j] = n1

        if(j % 2 == 0){
           soma += minhaMatriz[i][j] 
        }
    }
}console.log(minhaMatriz)
console.log(`A soma das colunas pares é: ${soma}`);