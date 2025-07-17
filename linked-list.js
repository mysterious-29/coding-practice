class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constrctor () {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        let currNode = this.head;

        if(!currNode) {
            this.head = node;
            return
        }

        while (currNode.next) {
            currNode = currNode.next;
        }

        currNode.next = node;
    }
    printList() {
        let currNode = this.head;
        let result = '';

        while(currNode) {
            result += `${currNode.value}->`
            currNode = currNode.next
        }

        console.log(result+'null');

    }
}

const linkkedList = new LinkedList();
linkkedList.append(10);
linkkedList.append(8);
linkkedList.append(6);

linkkedList.printList();