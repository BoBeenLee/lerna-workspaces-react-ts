class LinkedList {
  constructor() {
    this.linkedItem = null;
    this.lastItem = null;
  }

  addItem = item => {
    if (!this.linkedItem) {
      this.linkedItem = item;
      this.lastItem = item;
      return;
    }
    this.lastItem.next = item;
    this.lastItem = item;
  };

  removeItem = id => {
    const prevItem = this.findPrevById(id);
    const nextItem = this.findNextById(id);
    prevItem.next = nextItem;
  };

  findById = id => {
    let currentItem = this.linkedItem;
    while (currentItem !== null) {
      if (currentItem.id === id) {
        return currentItem;
      }
      currentItem = currentItem.next;
    }
    return currentItem;
  };

  findPrevById = id => {
    let prevItem = null;
    let currentItem = this.linkedItem;
    while (currentItem !== null) {
      if (currentItem.id === id) {
        break;
      }
      prevItem = currentItem;
      currentItem = currentItem.next;
    }
    return prevItem;
  };

  findNextById = id => {
    let nextItem = null;
    let currentItem = this.linkedItem;
    while (currentItem !== null) {
      if (currentItem.id === id) {
        break;
      }
      currentItem = currentItem.next;
      nextItem = currentItem.next;
    }
    return nextItem;
  };

  print = () => {
    let currentItem = this.linkedItem;
    console.log("print\n");
    while (currentItem !== null) {
      console.log(currentItem.id + " : " + currentItem.name);
      currentItem = currentItem.next;
    }
    console.log("end\n");
  };
}

class LinkedItem {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.next = null;
  }
}

linkedList = new LinkedList();

linkedList.addItem(new LinkedItem("1", "one"));
linkedList.addItem(new LinkedItem("2", "two"));
linkedList.addItem(new LinkedItem("3", "three"));
linkedList.addItem(new LinkedItem("4", "four"));
linkedList.addItem(new LinkedItem("5", "five"));
linkedList.addItem(new LinkedItem("6", "six"));
linkedList.print();
linkedList.removeItem("3");
linkedList.print();
