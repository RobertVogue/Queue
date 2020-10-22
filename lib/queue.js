// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
// test
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null
        this.back = null
        this.length = 0
    }

    enqueue(value){
        const newNode = new Node(value);
        if (this.front ===null && this.back ===null){
            this.front = newNode
            this.back = newNode
        }
    
        if(this.length>0){
            this.back.next = newNode
            this.back = newNode

        }
        this.length++
        return this.length;
    }

    dequeue(){
        let whatVal;
        if (this.length===0) return null;
        if (this.length === 1){
            whatVal = this.front;
            this.front = null;
            this.back = null;
        }

        if (this.length > 1) {
          whatVal = this.front;
          this.front = this.front.next;
        }
        this.length--
        return whatVal.value

    }

    size() {
        return this.length
    }
}


exports.Node = Node;
exports.Queue = Queue;
