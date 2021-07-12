// //my code
// function solution(arr) {
//   let n = arr.length
//   let answer = ''
//   let min, max
//   min = arr[0]

//   for (let i = 1; i < arr.length; i++) {
//     if (min < arr[i]) {
//       max = arr[i]
//       n--
//     }
//   }
//   console.log(max)
//   console.log(n)
//   return answer
// }

// let arr = [87, 89, 92, 100, 76]
// console.log(solution(arr))

//solution

function solution(arr) {
  let answer = []
  for (let i = 0; i < arr.length; i++) {
    answer.push(1)
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        answer[i]++
      }
    }
  }
  return answer
}

let arr = [87, 89, 92, 100, 76]
console.log(solution(arr))

// 풀이 : 첫 번째 for문에서 answer에 모든 인덱스의 값을 1로 초기화 해준다.
// 이후 2중 for를 통해서 전체 탐색을 한다. 만약 i의 값이 j보다 작다면 answer[i]를 증산연산자 ++를 통해 올린다.

// answer[(1, 1, 1, 1, 1)]
// arr = [87, 89, 92, 100, 76]
// 첫 번째 for arr[0] 87
// 두 번째 for  87 ,88 , 92, 100, 76 요소를 모두 돌면서 arr[0]보다 크다면 answer[0]의 인덱스가 ++된다.
