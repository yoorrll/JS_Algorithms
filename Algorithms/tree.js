//링크드리스트 기반
//left, right 두가지 = 이진트리
const tree = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 8,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      },
    },
  },
};
console.log(tree.root.value); //5
console.log(tree.root.left.left.value); //5

class Node {
  constructor(data) {
    this.data = data;
    //this.child = []; // 이진트리가 아닌 트리가 됨 계속 append할 수 있어서.
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data); //인스턴스 생성
    this.root = init;
    this.dataNumber = 0;
  }

  length() {
    return this.dataNumber;
  }

  insert(data) {
    let newNode = new Node(data);
    let turnPreNode = this.root;

    while (turnPreNode) {
      if (data === turnPreNode.data) {
        //값이 동일하면 어떻게 할지
        return;
      } //트리에서 작은 데이터는 왼쪽, 큰 데이터는 오른쪽
      if (data < turnPreNode.data) {
        if (!turnPreNode.left) {
          turnPreNode.left = newNode;
          this.dataNumber += 1;
          return;
        }
        turnPreNode = turnPreNode.left;
      }
      if (data > turnPreNode.data) {
        if (!turnPreNode.right) {
          turnPreNode.right = newNode;
          this.dataNumber += 1;
          return;
        }
        turnPreNode = turnPreNode.right;
      }
    }
  }
  DFS() {
    //깊이 우선 탐색 (Stack)
    let result = [];
    let stack = [this.root];

    while (stack.length !== 0) {
      let current = stack.pop();
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      result.push(current.data);
    }
    return result;
  }

  BFS() {
    //너비 우선 탐색 (Queue)
    let result = [];
    let queue = [this.root];

    while (queue.length !== 0) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      result.push(current.data);
    }
    return result;
  }
}
let t = new Tree(5);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);
console.log(t.root.data); //5
console.log(t.root.left.data); //3 작은 값이라 왼쪽 배치
console.log(t.root.right.data); //8 큰 값이라 오른쪽 배치
console.log(t.root.right.left.data); //6
console.log(t.root.right.right.data); //9
console.log(t.DFS());
console.log(t.BFS());
