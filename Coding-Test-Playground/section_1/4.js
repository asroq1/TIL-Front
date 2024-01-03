// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 20이하의 자연수 N이 입력된다..
// ▣ 출력설명
// 첫 번째 줄에 1부터 N까지의 합을 출력한다.
// ▣ 입력예제1 6
// ▣ 출력예제1 21
// ▣ 입력예제2 10
// ▣ 출력예제2 55
// [자바스크립트 알고리즘 문제풀이]

function solution(n) {
  let answer = 0

  for (let i = 0; i <= n; i++) {
    answer += i
  }
  return answer
}

console.log(solution(6))
console.log(solution(10))
