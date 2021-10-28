function solution(arr1, arr2) {
  let answer = []
  let n = arr1.length
  let p1 = 0
  let p2 = 0

  while (n != 0) {
    console.log(`n = ${n}`)
    let m = arr2.length
    while (m != 0) {
      console.log(`m = ${m}`)
      console.log(`p1 = ${p1}`)
      console.log(`p2 = ${p2}`)

      if (arr1[p1] == arr2[p2]) {
        answer.push(arr1[p1])
      }
      m--
      p2++
    }
    p1++
    p2 = 0
    n--
  }
  answer.sort()
  return answer
}

let a = [1, 3, 9, 5, 2]
let b = [3, 2, 5, 7, 8]
console.log(solution(a, b))
