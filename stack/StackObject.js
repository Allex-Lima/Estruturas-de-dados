class StackObject {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    pop() {
        if(this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    
    peek() {
        return this.items;
    }
}

const stackObj = new StackObject();

stackObj.push(5);
stackObj.push(4);
stackObj.push(1);
stackObj.push(9);

stackObj.pop();

console.log(stackObj.size())
