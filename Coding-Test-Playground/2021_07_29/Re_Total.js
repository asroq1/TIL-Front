function solution(n, arr) {
  let answer
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < arr.length; i++) {
    let sum = 0
    let temp = arr[i]
    while (temp) {
      sum += temp % 10
      temp = Math.floor(temp / 10)
    }
    if (sum > max) {
      max = sum
      answer = arr[i]
    } else if (sum === max) {
      if (arr[i] > answer) {
        answer = arr[i]
      }
    }
  }
  return answer
}

let arr = [128, 460, 605, 402, 990, 882, 123]

console.log(solution(7, arr))

function solution(n, arr) {
  let answer
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i]
      .toString()
      .split('')
      .reduce((a, b) => a + Number(b), 0)

    if (sum > max) {
      max = sum
      answer = arr[i]
    } else if (sum === max) {
      if (arr[i] > answer) {
        answer = arr[i]
      }
    }
  }
  return answer
}

let arr = [128, 460, 603, 40, 521, 137, 123]

console.log(solution(7, arr))
