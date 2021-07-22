// my code
// function solution(n, arr) {

//     let text= 0
//   let answer = 0
//     let max = Number.MIN_SAFE_INTEGER,

//   for (let i = 0; i < arr.length; i++) {
//     let letter = arr[i].toString()
//     parseInt(letter)
//     letter = Number(letter)
//     // box.push(letter)

//     for (let j = 0; j < letter.length; j++) {
//       text += letter.toString()
//       if(text > max){
//           max = text
//           answer = max
//       }
//     }
//   }

//   return answer
// }

// let arr = [128, 460, 603, 40, 521, 137, 123]
// console.log(solution(7, arr))

// solution code 1

function solution(n, arr) {
  let answer
  let max = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < arr.length; i++) {
    let sum = 0
    tmp = arr[i]
    //자릿수를 구하는 while 문
    while (tmp) {
      sum += tmp % 10
      tmp = Math.floor(tmp / 10)
    }
    if (sum > max) {
      max = sum
      answer = arr[i]
    } else if (sum === max) {
      if (arr[i] > answer) {
        answer = arr[i]
      }
    }
  }
  return answer
}
let arr = [128, 460, 603, 40, 521, 137, 123]
console.log(solution(7, arr))

// 풀이 : tmp라는 변수를 활용해 요소의 값을 복사한다. 그 다음 while문을 통해 tmp가 0이 될 때까지 구한다.
// sum에다가 tmp % 10을 하면 1의 자리 숫자가 sum에 더해지고, 이후 tmp를 10으로 나눈 뒤 floor()함수를 통해 tmp를 10의 자리 숫자로 만든다.
// 그리고 다시 십의 자리 숫자가 된 (tmp == 12)의 나머지를 sum에다가 누적시킨다. 그러면 2가 더해지고, 다시 또 12인 값을 tmp /10으로 나머지 숫자를 구하게 되고, tmp가 0이 되면 넘어가게 된다.
//이후 if를 통해 제일 큰 수를 answer에다가 저장해주고, sum과 max가 같다면 더 큰 수를 비교하기 위해 현재 요소의 값보다 더 크다면 현재 요소의 값을 answer로 바꾸면 된다.

// solution code 2

function solution(n, arr) {
  let answer
  let max = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i]
      .toString()
      .split('')
      .reduce((a, b) => a + Number(b), 0)

    //자릿수를 구하는 while 문
    while (tmp) {
      sum += tmp % 10
      tmp = Math.floor(tmp / 10)
    }
    if (sum > max) {
      max = sum
      answer = arr[i]
    } else if (sum === max) {
      if (arr[i] > answer) {
        answer = arr[i]
      }
    }
  }
  return answer
}
let arr = [128, 460, 603, 40, 521, 137, 123]
console.log(solution(7, arr))
// 풀이 : 위와 다르게 내장 함수를 이용하여 사용할 수도 있다.
