class Stack {
	#list = [];
	push(item) {
		this.#list.push(item);
	}
	pop() {
		return this.#list.pop();
	}
	peek() {
		return this.#list[this.#list.length - 1];
		// return this.#list.at(-1)
	}
	get size() {
		return this.#list.length;
	}
}

lizard;
goose;
fox;

class Queue {
	#list = [];
	enqueue(item) {
		this.#list.unshift(item);
		// this.list.push(item)
	}

	dequeue() {
		return this.#list.pop();
	}

	hasNext() {
		if (this.#list.length >= 1) {
			return true;
		}
	}
}

// function reverse() {
// 	this._reverse(this.top - 1);
// }
// function _reverse(index) {
// 	if (index != 0) {
// 		this._reverse(index - 1);
// 	}
// 	console.log(this.data[index]);
// }

function reverse(arr) {
	const stack = new Stack();
	for (let item of arr) {
		stack.push(item);
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i] = stack.pop();
	}
}
// if the current element is an opening bracket, paren or curly:
// record the correct closing bracket
// if the current element is a closing bracket,
// check the record to make sure it is the correct closing bracket
// if all the opening and closing brackets are matched and in the correct order:
// return true

let parenArr = [];

for (let paren of arr) {
	let parenIndex = input.indexOf(paren);
}

if (parenList % 2 === 0) {
	// check for pairs
}
[-1];
//  save the order of the parens in the stack
//  check the order

// I think of a stack as being an array that’s been all sealed up so that it’s inaccessible, except for one door. New things can be pushed in through the door, but then only the most recently added thing, the one directly in front of the door, can be accessed or manipulated
