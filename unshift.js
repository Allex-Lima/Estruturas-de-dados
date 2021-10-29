// Insert the elements in the first position

let numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers);

Array.prototype.insertPosition = function(value) {
    let index
    for (let i = this.length; i >= 0 ; i--) {
        index = i
        this[index] = this[index - 1]
    }
    this[index] = value
}

numbers.insertPosition(-1)

console.log(numbers);

// Usered method unshift

numbers.unshift(10, 11, 12)
console.log(numbers);