function solution(n, card) {
  let before = 0
  let value = 0
  let answer = 0

  let fir, sec, thi

  for (let i = 0; i < n; i++) {
    fir = card[i] % 10
    sec = (card[i] % 100) / 10
    thi = card[i] / 100
    value = Math.floor(fir) + Math.floor(sec) + Math.floor(thi)

    if (value >= before && answer < card[i]) {
      before = value
      answer = card[i]
    }
  }
  console.log(`res : ${before}`)
  return answer
}

// let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42, 74, 83]
// console.log(solution(12, arr))

let arr = [128, 460, 603, 40, 521, 137, 123]
console.log(solution(7, arr))
