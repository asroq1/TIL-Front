//my code

// function solution(s) {
//   let answer = ''
//   let cnt = 1

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[i + 1]) {
//       cnt++
//       answer += s[i] + cnt
//     } else {
//       cnt = 1
//       answer += s[i]
//     }
//     answer
//   }
//   return answer
// }

// let str = 'KKHSSSSSSSE'
// console.log(solution(str))

//solution code

function solution(s) {
  let answer = ''
  let cnt = 1
  s = s + ' '
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      cnt++
    } else {
      answer += s[i]
      if (cnt > 1) {
        answer += String(cnt)
        cnt = 1
      }
    }
    answer
  }
  return answer
}

let str = 'KKHSSSSSSSE'
console.log(solution(str))

// 풀이: s[i] 와 s[i+1]가 같다면 cnt를 ++해주고 아니라면 빈 문자열 answer에다 s[i]를 더해준다.
// 그리고 cnt가 1보다 크다면 answer에 String화 시킨 cnt를 넣어주고, 다시 cnt는 1로 초기화 해준다.
