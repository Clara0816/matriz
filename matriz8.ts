/*
8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
*/

console.clear
let teclado = require (`Prompt-sync`)();
let matriz: number[][] = new Array(3);
let posicaoI = 0;
let posicaoJ = 0;

for (let i = 0; i < 3; i++){
 matriz[i] = new Array(3);

 for (let j = 0; j < 3; j++){
    let numero: number = Math.floor(Math.random() * 21);
    matriz[i][j] = numero;
 }
}
console.log(matriz);

let meuArray: number [] = [];
let maior: number = 0

for (let i = 0; i < 3; i++){

   
    for (let j = 0; j < 3; j++){
       if(matriz[i][j] > maior) {
        maior = matriz[i][j];
        posicaoI = i;
        posicaoJ = j;
       }
    }
   }
console.log(maior);
console.log(`Ele esta na coluna ${posicaoI} e na linha ${posicaoJ}`)