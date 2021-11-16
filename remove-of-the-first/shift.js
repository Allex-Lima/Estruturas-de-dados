// remove the elements in the of start of array

const numbers = [1,2,3,4,5]


/* for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1]
} */

console.log(numbers);

Array.prototype.reIndex = function(myArray) {
    const newArray = []

    for(let i = 0; i < myArray.length; i++) {
        if(myArray[i] !== undefined) {
            newArray.push(myArray[i])
        }
    }
    return newArray
}

Array.prototype.removefirstPosition = function() {
    for(let i = 0; i < this.length; i++) {
        this[i] = this[i + 1]
    }
    return this.reIndex(this)
}

const n = numbers.removefirstPosition()

console.log(n);