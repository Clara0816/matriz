/*
6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
*/

console.clear
let teclado = require (`Prompt-sync`)();
let matriz: number[][] = new Array(3);

for (let i = 0; i < 3; i++){
 matriz[i] = new Array(3);

 for (let j = 0; j < 3; j++){
    let n1: number = teclado(`Digite o número que vai estar no endereço [${i}, ${j}] da matriz:`);
    if( n1 >= 0 && n1 <= 9){
        matriz[i][j] = n1;
    }
    else{
        j--;
    }
 }
}
console.log(matriz);