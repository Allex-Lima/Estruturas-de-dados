// remove the elements in the of end of array
// Simulate stack basic

const numbers = [1,2,3,4,5]

let novo = []

numbers.pop()

console.log(numbers);

numbers.pop()
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1]
}
console.log(numbers);
