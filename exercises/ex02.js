// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  let current = list.head;

  while (current !== null) {
    let nextNode = current.next;
    if (current.data === value) {
      if (current.prev !== null) {
        current.prev.next = current.next;
      } else {
        list.head = current.next;
      }

      if (current.next !== null) {
        current.next.prev = current.prev;
      } else {
        list.tail = current.prev;
      }

      list.size--;
    }
    current = nextNode;
  }}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5