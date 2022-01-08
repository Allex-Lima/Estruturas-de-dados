/* 
Removendo elemento na posição específica
e visualizando o Array no console
*/

const numbers = [1,2,3,4,5]

const elementRemoved = 3
let pos
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === elementRemoved) {
        pos = i
    }
    numbers[pos] = numbers[i + 1]
}

const newArray = []

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] !== undefined) {
        newArray.push(numbers[i])
    }
}
console.log(newArray);
