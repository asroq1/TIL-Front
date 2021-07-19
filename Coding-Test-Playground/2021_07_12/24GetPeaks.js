// function solution(arr) {
//   let answer = 0
//   let n = arr.length
//   let dx = [-1, 0, 1, 0]
//   let dy = [0, 1, 0, -1]
//   let peak = 0
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (
//         arr[i][j] > arr[i][j - 1] &&
//         arr[i][j] > arr[i][j + 1] &&
//         arr[i][j] > arr[i - 1][j] &&
//         arr[i][j] > arr[i + 1][j]
//       ) {
//         console.log('t')
//         answer++
//       }
//     }
//   }
//   return answer
// }

// let arr = [
//   [5, 3, 7, 2, 3],
//   [3, 7, 1, 6, 1],
//   [7, 2, 5, 3, 4],
//   [4, 3, 6, 4, 1],
//   [8, 7, 3, 5, 2],
// ]
// console.log(solution(arr))

//solution code

function solution(arr) {
  let answer = 0
  let n = arr.length
  //탐색 좌표 x,y를 통해서 12, 3, 6, 9시 방향을 탐색할 수 있다.
  let x = [-1, 0, 1, 0]
  let y = [0, 1, 0, -1]
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1
      for (let k = 0; k < 4; k++) {
        // nx와 ny는 x와 y의 해당 좌표를 향하는 변수를 담는다.
        let nx = i + x[k]
        let ny = j + y[k]
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0
          break
        }
      }
      if (flag) {
        answer++
      }
    }
  }
  return answer
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
]
console.log(solution(arr))

// 풀이: 첫 번째 for와 두 번째 for은 x , y 좌표를 탐색하게 된다.
// 해당 문제는 12시, 3시, 6시 , 9시 방향을 탐색해야하는 탓에 세 번째 for문을 만든다.
// 그래서 해당되는 arr[x],[i]를 기준으로 nx,ny라는 변수를 만들어 반복문을 통해
// 기존의 값보다 작다면 flag를 0으로 만들고 아니라면 answer를 ++해주게 되면서 모든 봉우리를 탐색할 수 있다.
