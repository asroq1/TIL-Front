//my code
// function solution(s) {
//   let answer = ''
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 1; j < s.length; j++) {
//       if (s[i] !== s[j]) {
//         answer += s[i]
//         break
//       }
//     }
//   }

//   return answer
// }
// let str = ['good', 'time', 'good', 'time', 'student']
// console.log(solution(str))

// solution code

function solution(s) {
  let answer
  answer = s.filter((v, i) => {
    if (s.indexOf(v) === i) {
      return true
    }
  })
  return answer
}
let str = ['good', 'time', 'good', 'time', 'student']
console.log(solution(str))

// 풀이 : filter에서 v 는 index의 value이다 i는 index번호이다. 리턴이 true인 것만 반환한다.
// 조건문은 이전과 동일하게 indexOf를 사용하는데 v가 value의 값이니 중복되는 문자의 첫 번째 인덱스가 반환된다.
// 첫 번째 인덱스와 배열 요소의 index가 동일하다면 true이니 중복되는 값들은 다 필터링 된다.
