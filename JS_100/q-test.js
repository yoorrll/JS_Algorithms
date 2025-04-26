//1
a = [1, 3, 45, 2, 10];
a.forEach((e, i) => {
  console.log(e, i);
});

//2
const str = "Hello World";
const ret = str.split(" ");
console.log(ret);
const b = ret.join(" hyo ");
console.log(b);

//3
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers = numbers.sort((c, d) => c - d); //const를 쓰면 재할당 불가하므로 let
// 내림차순은 (c, d) => (c - d) * -1)
console.log(numbers);

//4
const numbers2 = [1, 2, 3, 4, 5, 6];
const ret2 = numbers2.filter((e) => e % 2 == 0);
console.log(ret2);
const ret3 = numbers2.map((e) => e * 2);
console.log(ret3);
const ret4 = numbers.reduce((total, e) => total + e, 0); //값을 하나로, 0은 total의 초기값
console.log(ret4);

//5
const ret5 = Array(10)
  .fill()
  .map((_, i) => i + 1)
  .filter((v) => v % 2 === 0)
  .reduce((f, g) => f + g);
console.log(ret5);

//6
const ret6 = [10, 20, 30, 40, 50, 60].filter((v) => v > 45);
console.log(ret6);

//7
function solution(array, n) {
  return array.filter((v) => v === n).length;
}
console.log(solution([1, 1, 2, 3, 4, 5], 1));

//8-1
//한 판을 7등분 해주는 피자를 n명이서 나눠 먹을 때 피자가 총 몇 판 필요할까?
function solution2(n) {
  if (n / 7 == ~~(n / 7)) {
    return n / 7;
  }
  return ~~(n / 7) + 1;
}
console.log(solution2(20));

//8-2
function solution3(n) {
  return Math.ceil(n / 7); //올림 <-> Math.floor():내림 / Math.round(): 반올림
}
console.log(solution3(20));

//9-1
function solution4(num_list) {
  var answer = [0, 0];
  for (item of num_list) {
    if (item % 2 == 0) {
      answer[0] += 1; //인덱스가 0인 자리에 1 더하기
    } else {
      answer[1] += 1; //인덱스가 1인 자리에 1 더하기
    }
  }
  return answer;
}
console.log(solution4([1, 2, 3, 4, 5])); //홀수 2 짝수 3

//9-2
function solution5(num_list2) {
  var answer2 = [0, 0];
  for (item2 of num_list2) {
    answer2[item2 % 2] += 1; //answer2[1], answer2[0]에 상황에 따라 1을 더함함
  }
  return answer2;
}
console.log(solution5([1, 2, 3, 4, 5]));

//10
function solution6(numbers) {
  numbers.map((v) => v * 2);
}
console.log(solution6([1, 2, 3, 4]));

//11-1
//인수로 전달받은 my_string을 거꾸로 뒤집은 문자열
function solution7(my_string) {
  //array로 만들어야함
  return Array.from(my_string).reverse().join(""); //다시 문자열로 합치기기 join
}
console.log(solution7("Hello"));

//11-2
let text = "hello wolrd";
text = text.split("").reverse().join("");
console.log(text);
