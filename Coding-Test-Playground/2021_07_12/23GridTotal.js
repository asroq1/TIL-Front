//my code

// function solution(arr) {
//   let answer = Number.MIN_SAFE_INTEGER
//   let n = arr.length
//   //   let sum1 = (sum2 = 0)
//   let sum2 = 0
//   let sum3 = 0
//   let sum4 = 0

//   for (let i = 0; i < arr.length; i++) {
//     sum2 += arr[1][i]
//     answer = sum2
//   }
//   for (let i = 0; i < arr.length; i++) {
//     sum3 += arr[i][2]
//     // answer = sum3
//   }
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 4; j >= j + 1; j--) {
//       console.log(arr[i][j])
//       // answer = sum3
//     }
//   }

//   console.log('sum2', sum2)
//   console.log('sum3', sum3)
//   console.log('sum4', sum4)
//   return answer
// }

// let arr = [
//   [10, 13, 10, 12, 15],
//   [12, 39, 30, 23, 11],
//   [11, 25, 50, 53, 15],
//   [19, 27, 29, 37, 27],
//   [19, 13, 30, 13, 19],
// ]
// console.log(solution(arr))

//solution code

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER
  let n = arr.length
  let sum1 = 0
  let sum2 = 0

  for (let i = 0; i < n; i++) {
    sum1 = 0
    sum2 = 0
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j] //열 10 13 10 12 15
      sum2 += arr[j][i] //행 10 12 11 19 19
    }
    answer = Math.max(answer, sum1, sum2)
  }
  sum1 = 0
  sum2 = 0
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i]
    sum2 += arr[i][n - i - 1]
  }
  answer = Math.max(answer, sum1, sum2)

  return answer
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]
console.log(solution(arr))

//풀이 :
// 행과 열의 합 중에 제일 큰 값 구하는 방법
// 이중 for를 활용해 열을 구하는 sum1은 arr[i][j]를 해주면 인덱스 i번째의 배열의 모든 value값이 더해지게 되고,
// sum2는 arr[j][i]를 통해 행의 총합이 더해진다. 이후 두 번째 for가 끝난 후 Math.max()함수를 통해 구한 값과 answer를 넣는다. 그 셋 중 제일 큰 수가 answer이 되고,
// 계속 반복되는 for문 속에서 (answer(이전 최댓값), sum1(새로운 열), sum2(새로운 행))을 비교해서 총 10개 중 제일 큰 값이 최종적으로 answer이 된다.

// 대각선의 큰 값을 구하는 방법
// 다시 sum1, sum2를 초기화 시켜준다. for문 안에서 sum1은 arr[i][i]를 통해서 구한다. 10, 39, 50, 37, 19의 값을 더하고,
// sum2는 반대편의 대각선 값을 구하기 위해 arr[i][n (배열 크기)- i (반복문 값) - 1]을 통해 15, 23 , 50 , 27, 19가 더해진 값이 반환된다.
// 그 후 answer는 Math.max()를 통해서 이전에 행과 열 중 제일 큰 수가 담긴 answer와 초기화 후 서로 다른 대각선의 합인 sum1, sum2의 모든 값을 비교해 return한다.
