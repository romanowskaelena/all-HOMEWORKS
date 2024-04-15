

class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null; //следующий узел в списке
    }
  }
  
class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    detectLoop() {
      let slow = this.head;
      let fast = this.head;
  
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
          return true; // если Петля обнаружена
        }
      }
  
      return false; // Петля не обнаружена
    }
  }
  
  // Создание связного списка
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  
  // Создание петли в связном списке
  let current = list.head;
  while (current.next) {
    current = current.next;
  }
  current.next = list.head.next; // Создание петли
  
  // Проверка наличия петли
  console.log("Есть ли петля в списке?", list.detectLoop());