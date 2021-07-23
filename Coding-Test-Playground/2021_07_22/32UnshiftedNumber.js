//my code
// function solution(num) {
//   let answer = []
//   for (let i = 0; i < num.length; i++) {
//     reverse = num[i]
//       .toString()
//       .split('')
//       .reverse()
//       .join('')
//       .replace(/(^0+)/, '')

//     parseInt(reverse)
//     return reverse
//   }
//   function isPrime(num) {
//     if (num === 2) {
//       arr.push(num)
//     }
//     for (let i = 0; i <= num / 2; i++) {
//       if (num % i === 0) {
//         arr.push(num)
//       }
//     }
//     return arr
//   }
//   isPrime(reverse)
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100]
// console.log(solution(arr))

//solution code 1

// function isPrime(num) {
//   if (num === 1) {
//     return false
//   }
//   for (let i = 2; i < parseInt(num / 2); i++) {
//     if (num % i === 0) {
//       return false
//     }
//   }
//   return true
// }
// function solution(num) {
//   let answer = []
//   for (let i = 0; i < num.length; i++) {
//     let result = 0
//     while (num[i]) {
//       let t = num[i] % 10
//       result = result * 10 + t
//       x = parseInt(num[i] / 10)
//     }
//     if (isPrime(result)) {
//       answer.push(result)
//     }
//   }

//   return answer
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100]
// console.log(solution(arr))

// 풀이 :

function isPrime(num) {
  if (num === 1) {
    return false
  }
  for (let i = 2; i < parseInt(num / 2); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
function solution(arr) {
  let answer = []
  for (let x of arr) {
    let res = Number(x.toString().split('').reverse().join(''))
    if (isPrime(res)) {
      answer.push(res)
    }
  }
  return answer
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100]
console.log(solution(arr))

// 풀이 : isPrime이라는 함수는 소수를 판별하는 함수이다.
// 숫자를 뒤집은 이후 if문을 활용해 res가 true라면 answer이라는 배열에 push하면 된다.
