// remove the elements in the of end of array
// Simulate stack basic

const numbers = [1,2,3,4,5]

numbers.pop()
console.log(numbers);

for (let i = numbers.length - 1; i >= 0; i--) {
    numbers[i] = numbers[i - 1]
}
console.log(numbers);
