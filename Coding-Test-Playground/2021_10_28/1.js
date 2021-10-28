function solution(arr1, arr2) {
  let answer = []
  let max = 0
  for (let i = 0; i < arr1.length; i++) {
    answer.push(arr1[i])
  }
  for (let i = 0; i < arr2.length; i++) {
    answer.push(arr2[i])
  }
  answer.sort()
  return answer
}

let a = [1, 3, 5]
let b = [2, 3, 6, 7, 9]
console.log(solution(a, b))
