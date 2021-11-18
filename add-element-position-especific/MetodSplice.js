const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function remove(numeros, n) {
    numeros.splice(numeros.indexOf(n), 1);
    return numeros
}

const rm = remove(numeros, 5)

console.log(rm);
