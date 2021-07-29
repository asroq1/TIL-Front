function isPrime(num) {
  if (num === 1) return false
  //   //절반까지만 돌려도 된다. 절반까지만 돌려도 소수를 확인할 수 있다.

  for (let i = 2; i <= parseInt(num / 2); i++) {
    if (num % i === 0) return false
  }
  return true
}
function solution(arr) {
  let answer = []
  for (let i = 0; i < arr.length; i++) {
    let res = 0
    while (arr[i]) {
      let t = arr[i] % 10
      res = res * 10 + t
      arr[i] = parseInt(arr[i] / 10)
    }
    if (isPrime(res)) answer.push(res)
  }
  return answer
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100]
console.log(solution(arr))

function isPrime(num) {
  if (num === 1) return false
  //   //절반까지만 돌려도 된다. 절반까지만 돌려도 소수를 확인할 수 있다.

  for (let i = 2; i <= parseInt(num / 2); i++) {
    if (num % i === 0) return false
  }
  return true
}
function solution(arr) {
  let answer = []
  for (let i = 0; i < arr.length; i++) {
    //이렇게 쉽게 반전해줄 수도 있다.
    let res = Number(arr[i].toString().split('').revsere().join(''))
    if (isPrime(res)) {
      answer.push(res)
    }
  }
  return answer
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100]
console.log(solution(arr))
