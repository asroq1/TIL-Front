//my code

function solution(arr) {
  let answer = 1,
    max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
      answer++
    }
  }
  return answer
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153]
console.log(solution(arr))

//soultion code
//2중 for문을 돌리면 시간 복잡도가 높아져서 차라리 이렇게 푸는 것이 좋다.

function solution(arr) {
  let answer = 1,
    max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++
      max = arr[i]
    }
  }
  return answer
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153]
console.log(solution(arr))
