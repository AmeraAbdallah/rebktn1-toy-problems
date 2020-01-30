/*
Sorted Insert

Given a sorted stack of integers (smallest integer at the top) and an element to insert, write a function – sortedInsert(stack, element) – which inserts the element into the correct position of the stack.

sortedInsert should manipulate the original stack and return the original stack.

The stack will have the methods:
  • isEmpty
  • peek
  • push
  • pop. 
  
You can also use count to view how many elements are in the stack. 
The stack implementation is available to view below.
*/

// the stack class is exposed here for reference, you may or may not utilize additional stacks in your algorithm.

var Stack = function(initialValue) {
  this.store = {};
  this.count = 0;

  if (initialValue !== undefined) {
    this.push(initialValue);
  }
};

Stack.prototype.isEmpty = function() {
  return !this.count;
};

Stack.prototype.peek = function() {
  return this.store[this.count];
};

Stack.prototype.push = function(val) {
  this.store[++this.count] = val;
};

Stack.prototype.pop = function() {
  if (!this.isEmpty()) {
    var tmp = this.store[this.count];
    delete this.store[this.count--];
    return tmp;
  }
};

function sortedInsert(stack, element) {
  let counterHolder = null;
  let elementHolder = null;
  for(let i = 1; i <= stack.count; i++){
    if(element > stack.store[i] && element < stack.store[i+1]){
      counterHolder = i;
      elementHolder = stack.store[i];
      stack.store[i] = element;
      break;
    } else if(i === 1 && element < stack.store[i]){
      counterHolder = i;
      elementHolder = stack.store[i];
      stack.store[i] = element;
      break;
    }
  }
  if(counterHolder){
    counterHolder = counterHolder;
    if(counterHolder === 1){  //edge case 
      counterHolder = 2;
    }
    stack.count++;
    for(let i = counterHolder; i <= stack.count; i++){
      let holder = stack.store[i];
      stack.store[i] = elementHolder;
      elementHolder = holder;
    }
  }
  return stack;
}

let stack = new Stack(3);
stack.push(4);
stack.push(6);
sortedInsert(stack, 5);
sortedInsert(stack, 1);