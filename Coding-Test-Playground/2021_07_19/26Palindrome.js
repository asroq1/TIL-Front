//my code
// function solution(s) {
//   let answer = 'YES'

//   if (
//     s
//       .toLowerCase()
//       .substr(0, s.length / 2)
//       .replace(/(\s*)/g, '')
//       .replace(/\;,:/g, '')
//       .replace(/,/g, '')
//       .replace(/:/g, '')
//       .replace(/;/g, '') ===
//     s
//       .toLowerCase()
//       .substr(s.length / 2, s.length - 1)
//       .split('')
//       .reverse()
//       .join('')
//       .replace(/(\s*)/g, '')
//       .replace(/,/g, '')
//       .replace(/:/g, '')
//       .replace(/;/g, '')
//   ) {
//     return answer
//   } else {
//     return 'NO'
//   }
// }

// let str = 'found7, time: stdy; Yduts; emit, 7Dnuof'
// console.log(solution(str))

//solution code

function solution(s) {
  let answer = 'YES'
  s = s.toLowerCase().replace(/[^a-z]/g, '')
  console.log(s.toLowerCase().replace(/[^a-z]/g, ''))
  console.log(s)
  if (s.split('').reverse().join('') !== s) {
    return 'NO'
  }
  return answer
}

let str = 'found7, time: stdy; Yduts; emit, 7Dnuof'
console.log(solution(str))
