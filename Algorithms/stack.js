class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop(index) {
    if (index === this.arr.length - 1) {
      //index가 arr 배열의 마지막 요소라면
      return this.arr.pop(); //마지막 요소를 제거하고 반환
    } //그렇지 않은 경우
    let result = this.arr.splice(index, 1); //index에 해당하는 값을 1개 제거
    return result;
  }

  empty() {
    if (this.arr.length === 0) {
      return true; //비어있다면 true;
    } else {
      return false;
    }
  }

  top() {
    return this.arr[this.arr.length - 1]; //가장 마지막에 들어온 값값
  }

  bottom() {
    return this.arr[0]; //가장 처음에 들어온 값
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

let popValue = s.pop(2); //인덱스 2의 요소를 제거해서 popValue에 할당당

console.log(s);
// console.log(s.arr[0]);
console.log(popValue);
console.log(s.top());
console.log(s.bottom());
