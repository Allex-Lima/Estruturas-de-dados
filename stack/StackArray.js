class StackArray {
    constructor() {
        this.count = 0;
        this.element = {};
    }

    push(element) {
        this.element[this.count] = element;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.element[this.count];
        delete this.element[this.count];
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.element[this.count - 1];
    }

    view() {
        return this.element;
    }

    clear() {
        this.element = {};
        this.count = 0;
    }
}

const stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(4);

stack.clear();

console.log(stack.view());