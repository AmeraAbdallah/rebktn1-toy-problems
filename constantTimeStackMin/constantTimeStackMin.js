/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    this.storage = [];
    this.minVal = null;
  // add an item to the top of the stack
    this.push = function(value) {
      this.storage.push(value);
      if(!this.minVal) this.minVal = value;
      if(this.minVal) this.minVal = value < this.minVal ? value : this.minVal;
    };

  // remove an item from the top of the stack
    this.pop = function() {
      var popd = this.storage.pop();
      if(popd === this.minVal){
        this.minVal = Math.min(...this.storage); // this is not constant 
      }
      return popd;
    };

  // return the number of items in the stack
    this.size = function() {
      return this.storage.length;
    };
  
  // return the minimum value in the stack
    this.min = function() {
      return this.minVal;
    };

  };



    // trying another way
    var Stack = function() {
      this.storage = {};
      this.start = 0;
      this.end = 0;
      this.minVal = null;
    // add an item to the top of the stack
      this.push = function(value) {
        this.storage[this.end++] = value;
        if(!this.minVal) this.minVal = value;
        if(this.minVal) this.minVal = value < this.minVal ? value : this.minVal;
      };
  
    // remove an item from the top of the stack
      this.pop = function() {
        if(this.start === this.end) return;
        var popd = this.storage[this.start];
        delete this.storage[this.start++];
        if(popd === this.minVal){
          this.minVal = Math.min(...Object.values(this.storage)); // this is not constant 
        }
        return popd;
      };
  
    // return the number of items in the stack
      this.size = function() {
        return this.end - this.start;
      };
    
    // return the minimum value in the stack
      this.min = function() {
        if(this.start === this.end) return;
        return this.minVal;
      };
  
    };
  