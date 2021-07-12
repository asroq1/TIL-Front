//MY CODE

// function solution(a, b) {
//   let answer = ''
//   for (let i = 0; i < 5; i++) {
//     if (a[i] < b[i] && a[i] === 1) {
//       answer += 'B'
//     } else if (a[i] > b[i] && b[i] === 1) {
//       answer += 'A'
//     } else if (a[i] === b[i]) {
//       answer += 'D'
//     }
//   }
//   return answer
// }

// let a = [2, 3, 3, 1, 3]
// let b = [1, 1, 2, 2, 3]
// //a b a b d
// console.log(solution(a, b))

//SOLUTION CODE

function solution(a, b) {
  let answer = ''

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      answer += 'D' + ''
    } else if (a[i] === 1 && b[i] === 3) {
      answer += 'A' + ''
    } else if (a[i] === 2 && b[i] === 1) {
      answer += 'A' + ''
    } else if (a[i] === 3 && b[i] === 2) {
      answer += 'A' + ''
    } else {
      answer += 'B' + ''
    }
  }
  return answer
}

let a = [2, 3, 3, 1, 3]
let b = [1, 1, 2, 2, 3]
//a b a b d
console.log(solution(a, b))

// 풀이 : 통계를 내거나 할 때는 기준점을 한 개 잡아서 생각하면 쉽다.
// 이 예제의 경우에선 A를 기준으로 잡고 A가 이길 수 있는 경우는 가위로 이기거나,바위로 이기거나, 묵으로 이기거나 셋 중 하나이다.
// 그게 아니라면 B의 승리이다.
// 따라서 위와 같이 작성하면 쉽게 구할 수 있다.
