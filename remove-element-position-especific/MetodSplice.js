/* 
    Removendo elemento em qualquer posição.
    Inserimos no indexOf() o elemento a ser encontrado, retornando a posição.
    Na function usamos splice() para remover o elemento na posição.

*/

const numeros = [1,2,3,4,5,6, 7, 8, 9, 10, 11,12,13,14,15]

console.log(`Index (position) a ser removido: ${numeros.indexOf(12)}`)

function remove(numeros, n) {
    numeros.splice(numeros.indexOf(n), 1);
    return numeros
}

const rm = remove(numeros, 12)

console.log(rm);
