// 두 가지 필드를 가지고 Next 값을 가리킬 수 있게
//추가적인 메서드를 이용해서 중간에 값을 추가하거나 삭제
const list = {
  head: {
    value: 90,
    next: {
      value: 10,
      next: {
        value: 89,
        next: {
          value: 100,
          next: null,
        },
      },
    },
  },
};
// console.log(list.head);
// console.log(list.head.value);
// console.log(list.head.next.value);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init; //가장 처음에 오는 node는 init
    this.tail = init; //가장 마지막 node도 init

    this.preNode = undefined;
    this.dataNumber = 0;
  }

  //toString을 실제 배열로 사용하고 싶다면
  get fullData() {
    let turnPreNode = this.head;
    turnPreNode = turnPreNode.next;

    let s = "";
    for (let i = 0; i < this.dataNumber; i++) {
      s += `${turnPreNode.data}, `;
      turnPreNode = turnPreNode.next;
    }
    return JSON.parse(`[${s.slice(0, -2)}]`); //JSON.parse로 감싸주면 문자열 그대로의 데이터가 array로 바뀜
  }

  length() {
    //데이터 수 출력력
    return this.dataNumber;
  }

  append(data) {
    //데이터 추가 (마지막에)
    let newNode = new Node(data); //맨 마지막 null이 newNode를 가리키도록
    this.tail.next = newNode;
    this.tail = newNode; //this.tail.next가 newNode가 됐으니 tail도 newNode가 됨
    this.dataNumber += 1;
  }

  toString() {
    let turnPreNode = this.head; //순회용 현재 노드
    turnPreNode = turnPreNode.next;

    let s = "";
    for (let i = 0; i < this.dataNumber; i++) {
      //순회
      s += `${turnPreNode.data}, `; //순회용 현재 노드의 데이터만 꺼냄
      turnPreNode = turnPreNode.next; //순회용 현재 노드가 계속해서 순회용 현재 노드 다음 노드를 가리키도록
    }
    return `[${s.slice(0, -2)}]`; //마지막 값은 콤마(,)가 필요 없음 & 템플릿 리터럴
  }

  insert(index, data) {
    let turnPreNode = this.head;
    turnPreNode = turnPreNode.next;

    for (let i = 0; i < index - 1; i++) {
      turnPreNode = turnPreNode.next;
    }
    let newNode = new Node(data);

    newNode.next = turnPreNode.next; //새로운 노드의 next는 현재 노드의 next를 가리킴
    turnPreNode.next = newNode; //현재 노드의 next는 새로운 노드를 가리킴
    //새로운 노드의 next 값 = null, 이 null에 현재 노드의 next 값을 넣어줌
  }
}

//링크드리스트로 인스턴스 생성
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.insert(2, 1000);
console.log(l);
// console.log(l.length()); //6
// console.log(l.head.data); //init
// console.log(l.head.next.data); //1
// console.log(l.head.next.next.data); //2
console.log(l.toString());
// console.log(l.fullData);
