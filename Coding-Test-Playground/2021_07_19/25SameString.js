//my code
// function solution(s) {
//   let answer = 'YES'
//   const reverseString = s.split('').reverse().join('')
//   console.log(reverseString.substr(0, 1))
//   console.log(s.substr(0, 1))
//   if (s.substr(0, 1) === reverseString.substr(0, 1)) {
//     answer
//   } else {
//     answer === 'NO'
//   }
//   return answer
// }

// let str = 'gooG'
// console.log(solution(str))

// solution code 1

// function solution(s) {
//   let answer = 'YES'
//   s = s.toLowerCase()
//   let len = s.length

//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     if (s[i] !== s[len - i - 1]) {
//       return 'NO'
//     }
//     return answer
//   }

//   return answer
// }

// let str = 'gooog'
// console.log(solution(str))

// 풀이 : 직접 비교하면서 할 수 있다.
// 0 1 2 3
// [g],[o],[o],[g]라고 문자열을 가정할 때 0, 3 이 같고 1,2가 같으면 true이다.
// 그래서 조건문을 length의 절반만 도는 for문을 만들고,
// 조건문을 맨 처음 인덱스와 맨 뒤의 인덱스부터 줄이면서 돌리게 되면 값을 얻을 수 있다.

// solution code 2

function solution(s) {
  let answer = 'YES'
  s = s.toLowerCase()
  if (s.split('').reverse().join('') !== s) {
    return 'NO'
  }
  return answer
}

let str = 'goooSS'
console.log(solution(str))

// 풀이 : 메소드를 활용해 s를 뒤집는다.
// 그리고 직접적으로 비교해 기존의 s와 뒤집은 s가 다르다면 'NO'를 리턴한다.
