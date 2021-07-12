//my code
function solution(arr) {
  const answer = []
  answer.push(arr[0])
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      answer.push(arr[i + 1])
    }
  }
  return answer
}

let arr = [7, 3, 9, 5, 6, 12]
console.log(solution(arr))

//solution code

function solution(arr) {
  const answer = []
  answer.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      answer.push(arr[i])
    }
  }

  return answer
}

let arr = [7, 3, 9, 5, 6, 12]
console.log(solution(arr))
