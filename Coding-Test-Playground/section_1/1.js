function solution(a, b, c) {
  let answer

  if (a < b && a < c) {
    answer = a
  } else if (b < a && b < c) {
    answer = b
  } else if (c < a && c < b) {
    answer = c
  }
  return answer
}

function AnotherSolution(a, b, c) {
  let answer
  if (a < b) {
    answer = a
  } else if (b < a) {
    answer = b
  }
  if (c < answer) {
    answer = c
  }
  return answer
}

console.log(solution(2, 5, 1))
console.log(AnotherSolution(2, 5, 1))
