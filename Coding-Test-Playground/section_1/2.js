// 삼각형 판별하기

// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.
// ▣ 입력예제  6 7 11
// ▣ 출력예제  YES

// ▣ 입력예제  13 33 17
// ▣ 출력예제  NO

function solution(a, b, c) {
  let answer
  let longestLine, other, another

  if (a > b) {
    longestLine = a
    other = b
    another = c
  } else if (b > a) {
    longestLine = b
    other = a
    another = c
  }
  if (c > longestLine) {
    longestLine = c
    other = a
    another = c
  }

  if (other + another > longestLine) {
    answer = 'YES'
  } else {
    answer = 'NO'
  }
  return answer
}

console.log(solution(6, 7, 11))
console.log(solution(13, 33, 17))
console.log(solution(15, 33, 18))

function Tsolution(a, b, c) {
  let answer = 'yes'
  let longestLine
  let sum = a + b + c

  if (a > b) {
    longestLine = a
  } else if (b > a) {
    longestLine = b
  }
  if (c > longestLine) {
    longestLine = c
  }
  if (sum - longestLine <= longestLine) {
    answer = 'no'
  }
  return answer
}
console.log('-----------------------')
console.log(Tsolution(6, 7, 11))
console.log(Tsolution(13, 33, 17))
console.log(Tsolution(15, 33, 18))
