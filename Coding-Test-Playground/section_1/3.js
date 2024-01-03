// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 필요한 다스 수를 출력합니다.
// ▣ 입력예제1 25
// ▣ 출력예제1 3
// ▣ 입력예제2 178
// ▣ 출력예제2 15

function solution(n) {
  let answer
  answer = n / 12
  if (n % 12 !== 0) {
    answer += 1
  }
  answer = Math.floor(answer)
  return answer
}

console.log(solution(25))
console.log(solution(178))
console.log(solution(11))

function Tsolution(n) {
  let answer
  answer = Math.ceil(n / 12)

  return answer
}

console.log(Tsolution(25))
console.log(Tsolution(178))
console.log(Tsolution(11))
